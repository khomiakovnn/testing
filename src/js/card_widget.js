import { detectPaymentSystem } from "./identer";
import { validator } from "./validators";

export class CardWidget {
    constructor(parentEl) {
        this.parentEl = parentEl;
        this.onSubmit = this.onSubmit.bind(this);
    }

    static get markup() {
        return `
        <div class="logo-container">
            <img class="payment-logo active-logo" src="img/visa.png" alt="Visa">
            <img class="payment-logo" src="img/mastercard.png" alt="MasterCard">
            <img class="payment-logo" src="img/amex.png" alt="American Express">
            <img class="payment-logo" src="img/mir.png" alt="Mir">
            <img class="payment-logo" src="img/jcb.png" alt="JCB">
            <img class="payment-logo" src="img/diners-club.png" alt="Diners Club">
        </div>
        <div class="input-container">
            <input type="text" class="card-input" placeholder="Enter your card number">
            <button class="validate-button">Validate</button>
        </div>    
        `;
    }

    static get buttonSelector() {
        return '.validate-button';
    }

    static get inputSelector() {
        return '.card-input';
    }

    static get selector() {
        return '.input-container';
    }

    bindToDOM() {
        this.parentEl.innerHTML = CardWidget.markup;
        this.element = this.parentEl.querySelector(CardWidget.selector);
        this.submit = this.element.querySelector(CardWidget.buttonSelector);
        this.input = this.element.querySelector(CardWidget.inputSelector);

        this.element.addEventListener('click', this.onSubmit);
    }

    onSubmit(e) {
        e.preventDefault();

        const value = this.input.value;
        console.log(value)
        // if(isValidInn(value)) {
        //     this.input.classList.add('valid');
        //     this.input.classList.remove('invalid');
        // } else {
        //     this.input.classList.add('invalid');
        //     this.input.classList.remove('valid');
        // }
    }
}