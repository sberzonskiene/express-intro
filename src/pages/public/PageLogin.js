import { PageTemplate } from "../../template/PageTemplate.js";
import { loginForm } from "../../ui/forms/loginForm.js";

export class PageLogin extends PageTemplate {
    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageType = 'shortPage';
        this.pageJS = 'login';
    }

    main() {
        return `
        ${loginForm()}`;
    }
}
