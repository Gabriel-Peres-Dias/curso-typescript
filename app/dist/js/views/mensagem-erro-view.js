import { View } from "./view.js";
export class MensagemErroView extends View {
    template(model) {
        return `
        <p class="alert alert-danger">${model} </p>
    `;
    }
}
