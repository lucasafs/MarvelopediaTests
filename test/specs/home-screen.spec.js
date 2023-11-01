const comicsScreen = require("../screenobjects/comics.screen");
const homeScreen = require("../screenobjects/home.screen");

describe('Testes para login do usuário na página inicial', () => {
    
    it('Login com email não cadastrado', async () => {
        await homeScreen.emailField.addValue('lucas22@gmail.com');
        await homeScreen.passwordField.addValue('123456');

        await homeScreen.loginBtn.click();

        const message = await $('//android.view.View[@text="Error: There is no user record corresponding to this identifier. The user may have been deleted."]');
        await expect(message).toExist();
    });

    it('Login com e-mail em formato errado', async () => {
        await homeScreen.emailField.addValue('lucas22');
        await homeScreen.passwordField.addValue('123456');

        await homeScreen.loginBtn.click();

        const message = await $('//android.view.View[@text="Error: The email address is badly formatted."]');
        await expect(message).toExist();
    });

    it('Login com e-mail válido, mas campo de senha vazio', async () => {
        await homeScreen.emailField.addValue('lucas@gmail.com');
        await homeScreen.passwordField.addValue('');
        
        await homeScreen.loginBtn.click();

        const message = await $('//android.view.View[@text="Error: The password is invalid or the user does not have a password."]');
        await expect(message).toExist();
    });

    it('Tentativa de login errado repetidas vezes', async () => {
        await homeScreen.emailField.addValue('lucas2@gmail.com');
        await homeScreen.passwordField.addValue('12345');
        let attempt = 0;

        while(attempt < 6) {
            await homeScreen.loginBtn.click();
            await(2000);
            attempt += 1;
        }

        //assert
        const message = await $('//android.view.View[@text="Error: Access to this account has been temporarily disabled due to many failed login attempts. You can immediately restore it by resetting your password or you can try again later."]');
        await expect(message).toExist();
    });

    it('Login com entradas válidas', async () => {
        await homeScreen.emailField.addValue('lucas3@gmail.com');
        await homeScreen.passwordField.addValue('123456');

        await homeScreen.loginBtn.click();

        //assert
        const comics = await comicsScreen.comicsText
        await expect(comics).toExist();
    });
})