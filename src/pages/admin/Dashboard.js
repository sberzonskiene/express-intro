import { PageTemplate } from "../../template/PageTemplate.js";

export class PageDashboard extends PageTemplate {
    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageType = 'shortPage';
    }
    main() {
        return `
            <h1><i class="fa fa-dashcube"></i>Welcome to dashboard !!!</h1>
            <p>User:---</p>
            `;
    }
}