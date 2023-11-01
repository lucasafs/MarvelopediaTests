class HomeScreen {
    get loginBtn() {
        return $('//android.widget.Button[@text="Login"]');
    }

    get emailField() {
        return $('//android.widget.EditText[@hint="E-mail"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@hint="Senha"]');
    }

    get createAccountBtn() {
        return $('//android.view.View[@text="Crie uma conta"]');
    }
}

module.exports = new HomeScreen();