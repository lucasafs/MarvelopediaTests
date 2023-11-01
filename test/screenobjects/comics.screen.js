class ComicsScreen {
    get comicsText() {
        return $('//android.view.View[@text="Quadrinhos"]');
    }

    get searchComics() {
        return $('//android.widget.EditText[@hint="search text Pesquise quadrinhos"]');
    }

    get plusBtn() {
        return $('//android.widget.Button[@text="+"]');
    }

    get deadpoolComic() {
        return $('//android.widget.Image[@text="51a501dfef455"]');
    }

    get makePaymentBtn() {
        return $('//android.widget.Button[@text="Fazer Pagamento"]');
    }

    get cardNumber() {
        return $('//android.widget.EditText[@hint="Número do cartão"]');
    }

    get printedName() {
        return $('//android.widget.EditText[@hint="Nome impresso"]');
    }

    get validityCard() {
        return $('//android.widget.EditText[@hint="Validade"]')
    }

    get securityCode() {
        return $('//android.widget.EditText[@hint="Código de Seg."]')
    }

    get payNowBtn() {
        return $('//android.widget.Button[@text="Pagar agora!"]');
    }

    get herosBar() {
        return $('(//android.view.View[@text="people Heróis"])[2]');
    }

    get searchHeros() {
        return $('//android.widget.EditText');
    }

    get spiderManImg() {
        return $('//android.widget.Image[@text="526548a343e4b"]');
    }

    get addBtn() {
        return $('//android.widget.Button[@index=3]');
    }

    get fantasticFourImg() {
        return $('//android.widget.Image[@text="6489f06c4f5b6"]');
    }

    get fantasticFourTxt() {
        return $('//android.view.View[@text="Fantastic Four by Dan Slott Vol. 1 (Trade Paperback)"]')
    }

    get purchaseMessage() {
        return $('//android.view.View[@resource-id="alert-2-msg"]');
    }

    get leaveCart() {
        return $('//android.widget.Button[@text="arrow back"]');
    }

    get leaveComic() {
        return $('//android.widget.Button[@text="arrow back"]');
    }
}

module.exports = new ComicsScreen();