import AbstractView from "./AbstractView.js";

export default class extends AbstractView {
    constructor(params) {
        super(params);
        this.setTitle("Dashboard");
    }

    async getHtml() {
        return `
        <h1>Welcome back, Samariddin</h1>
        <p>
            Same text
        </p>

        <p>
            <a href="/posts" data-link>View recent posts</a>
        </p>
        `;
    }
}