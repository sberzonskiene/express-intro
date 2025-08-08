import { getAllProducts } from "../../../db/getAllProducts.js";
import { AdminTemplate } from "../../../template/AdminTemplate.js";
import { tableProducts } from "../../../ui/table/tableProducts.js";

export class PageAdminProducts extends AdminTemplate {
    constructor(req) {
        super(req);
        this.pageJS = "product-delete";
    }

    async main() {
        const data = await getAllProducts();

        if (!this.req.user.isLoggedIn) {
            return `
            <main>
                <img src="/img/logo.jpg" alt="logo">
                <nav class="nv">
                    <a href="/register">Register</a>
                    <a href="/login">Login</a>
                </nav>
                    <p class="par">403-reikia prisijungti!!!<p>
                <div class="log">
                    <a href="/">Back home</a><i class="fa fa-home"></i>
                </div>
            </main>`
        }

        return `
            <main>
                <img src="/img/logo1.jpg" alt="logo">
                <nav class="nv">
                    ${this.menuBar()}
                </nav>
                    <div class="nv">
                        <h1 class="display">All products</h1>
                    </div>
                ${tableProducts(data)}
        </main>`;
    }
}