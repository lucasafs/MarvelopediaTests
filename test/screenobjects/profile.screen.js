class ProfileScreen {
    get profileTab() {
        return $('(//android.view.View[@text="person Perfil"])[2]');
    }

    get orders() {
        return $('//android.view.View[@text="Pedidos"]');
    }

    get userPassword() {
        return $('//android.view.View[@text="Senha"]');
    }

    get newPassword() {
        return $('//android.widget.EditText[@hint="Nova senha"]');
    }

    get repeatNewPassword() {
        return $('//android.widget.EditText[@hint="Repita nova senha"]');
    }

    get changePasswordBtn() {
        return $('//android.widget.Button[@text="Alterar"]');
    }

    get logoutUser() {
        return $('//android.view.View[@text="Logout"]');
    }

    get about() {
        return $('//android.view.View[@text="Sobre"]');
    }
}

module.exports = new ProfileScreen();