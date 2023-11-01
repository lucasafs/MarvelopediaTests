# MARVELOPÉDIA - DESAFIO QA ENGINEER 1


# Plano de teste e abordagem utilizada
  -  Para testar o Marvelopédia, decidi utilizar o Appium e WebDriverIO como principais ferramentas de teste. Além disso, para facilitar a reutilização de código, manutenibilidade e legibilidade, optei por usar o padrão de design Page Object Model. O objetivo foi testar todo o fluxo de ações do usuário, desde o seu cadastro até o login, compra de quadrinhos, alteração de senha, etc.

# Modelagem
  - Na Planilha abaixo encontra-se os cenários de teste, bem como os escopos e status.
     - https://docs.google.com/spreadsheets/d/1mbzfxAgomB20o_UsAvuNNZWeZFig2zAxs7dhxt3o774/edit?usp=sharing

# Erros Encontrados
  - Ao adicionar HQs no carrinho, caso eu exclua 1 ou mais quadrinhos do carrinho clicando no 'x', o valor total não é alterado. Mesmo com o valor diferente do que deveria ser, na aplicação ainda é possível finalizar a compra.
  - Ao acessar a aba de pedidos, nunca é exibido os pedidos realizados pelo usuário.
  - Uma vez que o usuário pesquisa por um HQ, ao voltar para a tela inicial dos quadrinhos, não é mais possível visualizar todos, é mostrado apenas os quadrinhos que tem ligação com a palavra-chave utilizada na pesquisa.
  - Possui inconsistência na alteração de senha do usuário.Quando é adicionado uma senha válida e é clicado no botão “Altera” as vezes aparece confirmação de que foi alterado e as vezes não. É comum acontecer de clicar várias vezes, não receber confirmação e nem alterar a senha.
  - Na tela de pagamento, não é realizada nenhuma checagem. Não é verificado se o cartão está com a validade vencida ou se o número de cartão possui uma determinada quantidade de dígitos.

# Análise dos resultados dos testes e visão geral da aplicação
  - Os testes detectaram alguns erros como foi citado anteriormente e possui inconsistências, além de uma renderização lenta.
  - A aplicação possui alguns erros críticos que afetam diretamente o usuário que está utilizando e o responsável pelo aplicativo ou venda do HQ. O principal entre eles é o valor final do pedido diferente do valor da soma dos quadrinhos que estão no carrinho em alguns casos de uso, o que pode levar tanto o usuário, como o vendedor e o dono da aplicação a terem sérios prejuízos. Além disso, não existe nenhuma checagem nos dados do cartão da compra, abrindo brechas para que o usuário possa agir de má fé e comprar HQs sem pagar. De modo geral, consertando esses principais problemas, é uma aplicação interessante e foi muito divertido trabalhar com ela.

# Considerações Finais
  - Particularmente, eu ainda não havia realizado testes de aplicação mobile. Foi muito interessante para mim expandir meus conhecimentos e realizar testes em uma aplicação como essa. Desenvolvendo os testes, notei que ferramentas como Appium e WebDriverIO são extremamente poderosas e facilitam bastante a vida de quem está testando. Além disso, foi mais uma oportunidade de poder demonstrar para mim mesmo, que possuindo uma base em testes como já tenho, sou capaz desenvolver e analisar testes mesmo com ferramentas que ainda não havia trabalhado anteriormente. Por fim, gostaria de agradecer a oportunidade de participar de um processo seletivo numa empresa tão grande como a Bemol. 
