## Estudo do regex
- Extração de CPF
- Extração de e-mail 

**Extração não é o mesmo que validação**

Ao extrair CPF de texto, estará somente retirando do texto números que estão no formato de CPF, por exemplo
333.333.333-33 será extraido com a utilização de regex por conta que está nos padrões de formatação de CPF, 
**não necessariamente será um CPF válido**. Da mesma forma um provedor de e-mail poderá ter suas próprias regras de validação.

### Extração de números em formato de CPF com regex

Ao extrair CPF de texto, estará somente retirando do texto números que estão no formato de CPF, por exemplo 333.333.333-33 será extraído com a utilização de regex por conta que está nos padrões de formatação de CPF, **não necessariamente será um CPF válido**.

## processo de extração do CPF

Na expressão acima temos o que define a regex com "/" no começo e fim,
**podendo variar dependendo da linguagem de programação utilizada**, onde em alguns casos esses delimitadores não serão necessários.
* "g" significa global, onde a regex buscará **todas as correspondências**, e não somente a primeira como seria feito caso não houvesse o "g" no final da regex.

* \b significa que a correspondência deve ocorrer no início de uma palavra, caso seja colocado no final, significa que a correspondência deve terminar antes do \b
* \d equivale ao conjunto [0-9], possibilitando qualquer número de 0 a 9, podendo ser *ou 0 ou 1 ou 2 ...*
* {} define um quantificador, /a{3}/ por exemplo significa que a String procurada tem 3 "a" em sequência: 
* #### String: "teste aaa aaaaa bbb aa"
* #### regex: /a{3}/g
* #### Correspondências: "teste 'aaa' 'aaa'aa bbb aa" 
* o ponto é um metacaractere, tem a função de representar um coringa dentro da regex, 
podendo ser qualquer caractere, portanto colocamos "\\" (escape) para representar literalmente o ".".

### ajustando a parte final da regex temos:
~~~
    /\b\d{3}\.\d{3}\.\d{3}-\d{2}\b/g
~~~
Obs.: As regex podem ser testadas em sites como regex101.com.

### processo de extração de e-mail

na extração de e-mail devemos levar em consideração que existem provedores de e-mail com Gmail, Outlook que utilizam
das próprias regras para definir quais caracteres serão válidos na criação do e-mail, por exemplo, o Gmail considera que:
enviar um e-mail para **teste.teste@gmail.com** terá o mesmo resultado que enviar para **testeteste@gmail.com**.

Aqui estão duas regex para extração de e-mails: uma genérica e outra específica para o Gmail.

### primeira regex (genérica)
* \s representa todos os caracteres responsáveis por espaços num texto, como estamos utilizando o "s" maiúsculo (S) estamos representando a negação a essa característica, portando **\S (maiúsculo) representa todos os caracteres que não são responsáveis por espaços no texto)**.
* \+ representa um quantificador que significa que o elemento a esquerda será buscado **um ou mais vezes** no texto.
* @ É obrigatório, e permitido apenas 1 no e-mail.
* \w é um **"shorthand"**, tem mesma funcionalidade do conjunto [a-zA-Z0-9\_], que representa letras de "a" a "z" maiúsculas e minúsculas, númericos de 0 a 9, e o "_".
* posteriormente é colocado o caractere de (escape) "\" anterior ao "." para indicar que será utilizado o valor literal do ".".
*  \w{2, 6} representa um quantificador de no mínimo 2 e máximo de 6 de caracteres correspondentes a [a-zA-Z0-9\_] 
*  () representa um grupo, $ colocado a direita representa que o elemento a erquerda no caso (grupo) será opcional, tendo que aparecer 0 ou 1 vez depois do restante da regex
*  portando (\.\w{2})? faz referência à possível presença de uma extensão de domínio, como ".br".
~~~
    /\b\S+@\w+\.\w{2,6}(\.\w{2})?\b/g
~~~
### segunda regex (padrão Gmail)
~~~
    /\b[\w.-]+@\w+\.\w{2,6}(\.\w{2})?\b/g
~~~
* A única alteração que fizemos foi alterar \s para [\w.-] que representa letras maiúsculas e minúsculas, números de 0 a 9, "_", "." e "-".

agora alguns caracteres especiais como "$" não poderão ser usados no meio do nome de usuário. 

Essas regex podem ser adaptadas conforme necessário.



