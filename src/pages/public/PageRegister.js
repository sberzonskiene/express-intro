import { PageTemplate } from "../../template/PageTemplate.js";
import { registerForm } from "../../ui/forms/registerForm.js";

export class PageRegister extends PageTemplate {
    constructor (req) {
        super(req);
        this.pageType = 'shortPage';
        this.isAsideVisible = false;
        this.pageJS = 'register';
    }
    main() {
        return `
        ${registerForm()}`
    }
}