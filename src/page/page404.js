import { PageTemplate } from "../template/PageTemplate.js";

export class Page404 extends PageTemplate {
    main() {
        return `
        <h1>Page 404</h1>
        <p>Page not found.</p>
        <a href="/">Back home</a> `;
    }
}