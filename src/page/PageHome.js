import { PageTemplate } from "../template/PageTemplate.js";

export class PageHome extends PageTemplate {
    constructor(req) {
        super(req);
        this.pageJS = 'main';
    }
    main() {
        return `
            <h1>Home page</h1>
            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Repudiandae, a doloremque accusantium necessitatibus praesentium dolorem voluptatem distinctio. Iusto corrupti nesciunt animi ipsum voluptates enim illo, officiis quo, sapiente rem atque?</p>`
    }
}