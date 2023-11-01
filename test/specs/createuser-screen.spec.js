const createuserScreen = require("../screenobjects/createuser.screen");
const homeScreen = require("../screenobjects/home.screen");

describe('Testes da tela de criação de usuário', () => {

    before(async () => {
        await homeScreen.createAccountBtn.click();
    })

    beforeEach(async () => {
        await driver.terminateApp('io.ionic.starter');
        await driver.installApp('/home/esilva/Documents/TestMarvelopedia/app/android/marvelopedia.apk');
        await driver.activateApp('io.ionic.starter');
    });
    
    it.only('Cadastro de Usuario com dados válidos', async () => {

        await createuserScreen.emailField.addValue('lucas40@gmail.com');
        await createuserScreen.passwordField.addValue('123456');
        await createuserScreen.repeatedPassword.addValue('123456');

        await createuserScreen.createUserBtn.click();

        const message = await $('//android.view.View[@text="Cadastro realizado com sucesso!"]');
        await expect(message).toExist();

    });

    xit('Cadastro de Usuario com e-mail já cadastrado', async () => {

        await createuserScreen.emailField.addValue('lucas94@gmail.com');
        await createuserScreen.passwordField.addValue('123456');
        await createuserScreen.repeatedPassword.addValue('123456');

        await createuserScreen.createUserBtn.click();

        const message = await $('//android.view.View[@text="Error: The email address is already in use by another account."]');
        await expect(message).toExist();
    });

    xit('Cadastro de Usuario com e-mail em formato errado', async () => {

        await createuserScreen.emailField.addValue('lucass');
        await createuserScreen.passwordField.addValue('123456');
        await createuserScreen.repeatedPassword.addValue('123456');

        await createuserScreen.createUserBtn.click();

        const message = await $('//android.view.View[@text="Error: The email address is badly formatted."]');
        await expect(message).toExist();
    });

    it('Cadastro de Usuario com senha menor do que 6 caracteres', async () => {

        await createuserScreen.emailField.addValue('lucas30@gmail.com');
        await createuserScreen.passwordField.addValue('12345');
        await createuserScreen.repeatedPassword.addValue('12345');

        await createuserScreen.createUserBtn.click();

        const message = await $('//android.view.View[@text="Error: Password should be at least 6 characters"]');
        await expect(message).toExist();
    });

    it('Cadastro de usuário com os campos Senha e Repita Senha diferentes', async () => {

        await createuserScreen.emailField.addValue('lucas30@gmail.com');
        await createuserScreen.passwordField.addValue('123456');
        await createuserScreen.repeatedPassword.addValue('12345');

        await createuserScreen.createUserBtn.click();

        const message = await $('//android.view.View[@text="As senhas são diferentes! "]');
        await expect(message).toExist();
        driver.deleteSession()
    });
})