import { PageTemplate } from "../template/PageTemplate.js";

export class Page404 extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageType = 'shortPage';
        this.isAsideVisible = false;
    }
    main() {
        return `
        <h1><i class="fa fa-frown-o"></i>Page 404</h1>
            <p>Page "${this.req.url}" not found.</p>
        <div class="log">
            <a href="/">Back home</a><i class="fa fa-home"></i>
        </div>`;
    }
}