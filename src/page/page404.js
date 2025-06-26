import { PageTemplate } from "../template/PageTemplate.js";

export class Page404 extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageType = 'shortPage';
        this.isAsideVisible = false;
    }
    main() {
        return `
        <h1><i class="fa fa-frown-o"></i>Page 404</h1>fa-frown-o
        <p>Page "${this.req.url}" not found.</p>
        <a href="/">Back home</a> `;
    }
}