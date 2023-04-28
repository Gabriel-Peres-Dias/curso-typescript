import { View } from "./view.js";
export class MensagemSucessoView extends View {
    template(model) {
        return `
        <p class="alert alert-success">${model} </p>
    `;
    }
}
