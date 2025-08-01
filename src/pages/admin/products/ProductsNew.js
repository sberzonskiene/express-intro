import { AdminTemplate } from "../../../template/AdminTemplate.js";


export class PageAdminProductsNew extends AdminTemplate {
    constructor(req) {
       super(req)   
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
                                <textarea class="form-control" id="description"></textarea>
                            </div>
                            <div class="form-row">
                                <label for="release_date" class="form-label">Release date</label>
                                <input type="date" class="form-control" id="release_date">
                            </div>
                            </div>
                            <button type="submit" class="btn">Create</button>
                        </form>
                    </div>
                </div>
            </main>`;
    }
}