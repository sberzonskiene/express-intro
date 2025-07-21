import { PageTemplate } from "../../template/PageTemplate.js";

export class PageAbout extends PageTemplate {
    constructor(req) {
        super(req);
    }
    main() {
        const links = ['About us', 'Information', 'Contact'] ;
        let linksHTML = '';
    for (const link of links) {
        linksHTML += `<li>${link}</li>`;
    }
        return `
            <h1><i class="fa fa-book"></i>About page</h1>
            <p>Lorem ipsum dolor sit amet consectetur.</p>
            <ul>${linksHTML}</ul>`;
    }
}