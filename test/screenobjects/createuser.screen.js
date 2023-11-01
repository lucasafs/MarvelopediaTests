class CreateUserScreen {
    get emailField() {
        return $('//android.widget.EditText[@hint="Email"]');
    }

    get passwordField() {
        return $('//android.widget.EditText[@hint="Senha"]');
    }

    get repeatedPassword() {
        return $('//android.widget.EditText[@hint="Repita Senha"]');
    }

    get createUserBtn() {
        return $('//android.widget.Button[@text="Cadastrar"]');
    }
}

module.exports = new CreateUserScreen();