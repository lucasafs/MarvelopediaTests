const { text, execute } = require("wd/lib/commands");
const comicsScreen = require("../screenobjects/comics.screen");
const homeScreen = require("../screenobjects/home.screen");

describe('Testes da tela de Quadrinhos', () => {

    beforeEach(async () => {
        await homeScreen.emailField.addValue('lucas51@gmail.com');
        await homeScreen.passwordField.addValue('123456');
        await homeScreen.loginBtn.click();
    })

    afterEach(async () => {
        await driver.terminateApp('io.ionic.starter');
        await driver.activateApp('io.ionic.starter');
    })

    xit('Comprar um Quadrinho, inserindo uma palavra-chave', async () => {

        await comicsScreen.searchComics.addValue('deadpool');
        await comicsScreen.deadpoolComic.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();
        await comicsScreen.makePaymentBtn.click();
        await comicsScreen.cardNumber.addValue('44444');
        await comicsScreen.printedName.addValue('lucasA');
        await comicsScreen.validityCard.addValue('06/24');
        await comicsScreen.securityCode.addValue('444');
        await comicsScreen.payNowBtn.click();

        expect(await comicsScreen.purchaseMessage).toBeDisplayed();
    })

    xit('Pesquisar Herói para ver sua descrição e quadrinhos em que o mesmo participa.', async () => {
        await comicsScreen.herosBar.click();
        await comicsScreen.searchHeros.addValue('spider-man');

        await $('android=new UiScrollable(new UiSelector().scrollable(true)).scrollTextIntoView("Spider-Man (Peter Parker)")');
        await comicsScreen.spiderManImg.click();

        await expect($('//android.view.View[@text="Spider-Man (Peter Parker)"]')).toExist();
    })

    xit('Comprar um Quadrinho sem buscar por palavra-chave', async () => {

        await(10000);
        await comicsScreen.fantasticFourImg.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();
        await comicsScreen.makePaymentBtn.click();
        await comicsScreen.cardNumber.addValue('555544444');
        await comicsScreen.printedName.addValue('lucas');
        await comicsScreen.validityCard.addValue('05/24');
        await comicsScreen.securityCode.addValue('555');
        await comicsScreen.payNowBtn.click();

        expect(await comicsScreen.purchaseMessage).toBeDisplayed();
    })

    xit('Adicionando quadrinhos diferentes e realizando a compra acessando o carrinho', async () => {
        await comicsScreen.fantasticFourImg.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();
        await $('//android.widget.Button[@text="arrow back"]').click();
        await $('//android.widget.Button[@text="arrow back"]').click();
        await comicsScreen.searchComics.addValue('deadpool');
        await comicsScreen.deadpoolComic.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();

        const value = await $('//android.view.View[@text="Total: R$ 42.98"]');
        expect(value).toHaveText("Total: R$ 42.98")


        await comicsScreen.makePaymentBtn.click();
        await comicsScreen.cardNumber.addValue('44444');
        await comicsScreen.printedName.addValue('lucasA');
        await comicsScreen.validityCard.addValue('06/24');
        await comicsScreen.securityCode.addValue('444');
        await comicsScreen.payNowBtn.click();

        expect(await comicsScreen.purchaseMessage).toBeDisplayed();
    })

    it('Removendo quadrinho do carrinho clicando no x', async () => {
        await comicsScreen.fantasticFourImg.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();
        await comicsScreen.leaveCart.click();
        await comicsScreen.leaveComic.click();
        await comicsScreen.searchComics.addValue('deadpool');
        await comicsScreen.deadpoolComic.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();

        await $('(//android.widget.Image[@text="close"])[2]').click();

        await comicsScreen.fantasticFourTxt.click();
        await comicsScreen.leaveComic.click();


        const value = await $('//android.view.View[@text="Total: R$ 42.98"]');
        const textValue = await value.getAttribute('text');
        await expect(textValue).toBe("Total: R$ 39.99");
    })

    it('Alterando quantidade de quadrinhos no carrinho clicando no +', async () => {
        await comicsScreen.fantasticFourImg.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();

        await $('//android.widget.Button[@text="add"]').click();

        await comicsScreen.leaveCart.click();
        await comicsScreen.leaveComic.click();
        
        await comicsScreen.searchComics.addValue('deadpool');
        await comicsScreen.deadpoolComic.click();
        await comicsScreen.plusBtn.click();
        await comicsScreen.addBtn.click();

        await comicsScreen.fantasticFourTxt.click();
        await comicsScreen.leaveComic.click();

        const value = await $('//android.view.View[@text="Total: R$ 82.97"]');
        const textValue = await value.getAttribute('text');

        await expect(textValue).toBe("Total: R$ 82.97");
        
    })

    it('Acessar aba e visualizar todos os quadrinhos de todos os personagens, após pesquisar por um quadrinho, adicioná-lo ao carrinho e voltar à tela de quadrinhos', async () => {
        await comicsScreen.searchComics.addValue('deadpool');
        await comicsScreen.deadpoolComic.click();
        await comicsScreen.leaveComic.click();

        const fantasticFourImg = comicsScreen.fantasticFourImg;

        await expect(fantasticFourImg).toBeDisplayed();
    })
})