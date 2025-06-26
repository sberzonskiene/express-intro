import { PageTemplate } from "../template/PageTemplate.js";

export class PageServices extends PageTemplate {
    constructor(req) {
        super(req);
    }
    main() {
        return `
            <h1><i class="fa fa-picture-o"></i>Services page</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p> `
    } 
}