import { AdminTemplate } from "../../../template/AdminTemplate.js";


export class PageAdminProductsNew extends AdminTemplate {
    constructor(req) {
       super(req);
       this.pageJS = 'new-product';   
    }
    main() {
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
                        <h1 class="display">New product</h1>
                    </div>
                        <form class="form">
                            <div class="form-row">
                                <label for="title" class="form-label">Title</label>
                                <input type="text" class="form-control" id="title" required>
                            </div>
                            <div class="form-row">
                                <label for="url" class="form-label">Url slug</label>
                                <input type="text" class="form-control" id="url" required>
                            </div>
                            <div class="form-row">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description" required></textarea>
                            </div>
                            <button type="submit" class="btn">Create</button>
                        </form>
            </main>`;
    }
}