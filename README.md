# Marvelopédia - Testes na Apk
# Ainda em desenvolvimento, tenho até o fim do dia para terminar.

# PLANO DE TESTE E ABORDAGEM UTILIZADA
  -  Para testar o Marvelopédia, decidi utilizar o Appium e WebDriverIO como principais ferramentas de teste. Além disso, para facilitar a reutilização de código, manutenibilidade e legibilidade, optei por usar o padrão de design Page Object Model. O objetivo foi testar todo o fluxo de ações do usuário, desde o seu cadastro até o login, compra de quadrinhos, alteração de senha, etc.

# MODELAGEM
  - Na Planilha abaixo encontra-se os cenários de teste, bem como os escopos e status.
     - https://docs.google.com/spreadsheets/d/1mbzfxAgomB20o_UsAvuNNZWeZFig2zAxs7dhxt3o774/edit?usp=sharing

# ERROS ENCONTRADOS
  - Ao adicionar HQs no carrinho, caso eu exclua 1 ou mais quadrinhos do carrinho clicando no 'x', o valor total não é alterado. Mesmo com o valor diferente do que deveria ser, na aplicação ainda é possível finalizar a compra.
  - Ao acessar a aba de pedidos, nunca é exibido os pedidos realizados pelo usuário.
  - Uma vez que o usuário pesquisa por um HQ, ao voltar para a tela inicial dos quadrinhos, não é mais possível visualizar todos, é mostrado apenas os quadrinhos que tem ligação com a palavra-chave utilizada na pesquisa.
