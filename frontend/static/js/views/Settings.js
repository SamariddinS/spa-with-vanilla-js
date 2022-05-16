import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Settings");
    }

    async getHtml() {
        return `
        <h1>Settings</h1>
        <p>
            Same text for settings
        </p>
        `;
    }
}