const homeScreen = require("../screenobjects/home.screen");
const profileScreen = require("../screenobjects/profile.screen");

describe('Testes da aba perfil do Usuário', () => {
    beforeEach(async () => {
        await homeScreen.emailField.addValue('lucas51@gmail.com');
        await homeScreen.passwordField.addValue('123456');
        await homeScreen.loginBtn.click();
        await profileScreen.profileTab.click();
    })

    afterEach(async () => {
        await driver.terminateApp('io.ionic.starter');
        await driver.activateApp('io.ionic.starter');
    })

    it('Verificar pedidos do usuário', async () => {
        await profileScreen.orders.click();

        expect($('//android.view.View[@text="Pedidos"]')).toExist();
    })

    it('Tentar adicionar uma nova senha com menos de 6 caracteres', async () => {
        await profileScreen.userPassword.click();
        await profileScreen.newPassword.addValue('123');
        await profileScreen.repeatNewPassword.addValue('123');

        await profileScreen.changePasswordBtn.click();

        expect(await $('//android.view.View[@text=" Use senhas acima de 6 digitos. "]')).toBeDisplayed();
    })

    it('Tentar criar uma nova senha inserindo valores diferentes na nova senha e na confirmação da nova senha', async () => {
        await profileScreen.userPassword.click();
        await profileScreen.newPassword.addValue('1234567');
        await profileScreen.newPassword.addValue('123456');

        await profileScreen.changePasswordBtn.click();

        expect(await $('//android.view.View[@text="As senhas não são iguais"]')).toBeDisplayed();
    })

    it.only('Logout do usuário através da aba perfil', async () => {
        await profileScreen.logoutUser.click();

        expect(await $('//android.view.View[@resource-id="alert-14-msg"]')).toBeDisplayed();

        await $('//android.widget.Button[@text="SIM"]').click();

        expect(await $('//android.view.View[@text="M"]')).toExist();
    })
    
    xit('Alterar senha do usuário', async () => {
        await profileScreen.userPassword.click();
        await profileScreen.newPassword.addValue('123456789');
        await profileScreen.repeatNewPassword.addValue('123456789');

        await profileScreen.changePasswordBtn.click();

        expect(await $('//android.view.View[@text="Mudar Senha"]')).toExist();
    })

})