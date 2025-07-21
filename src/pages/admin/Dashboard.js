import { PageTemplate } from "../../template/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageType = 'shortPage';
    }
    main() {
        return `
            <h1><i class="fa fa-dashcube"></i>Welcome to dashboard !!!<img src="/img/logo1.jpg" alt="logo1" style="max-height: 7rem"></h1>
            `;
    }
}