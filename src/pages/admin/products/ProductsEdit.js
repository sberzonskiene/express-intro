import { AdminTemplate } from "../../../template/AdminTemplate.js";
import { getProductByUrlSlug } from "../../../db/getProductByUrlSlugToEdit.js";


export class PageAdminProductsEdit extends AdminTemplate {
    constructor(req) {
       super(req);
       this.pageJS = 'edit-product';   
    }
    async main() {
        const data = await getProductByUrlSlug(this.req.params.urlSlug);

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
                        <h1 class="display">Edit product</h1>
                    </div>
                        <form class="form">
                        <input value="${data[0].url_slug}" type="text" id="original_url" hidden>
                            <div class="form-row">
                                <label for="title" class="form-label">Title</label>
                                <input value="${data[0].title}" type="text" class="form-control" id="title" required>
                            </div>
                            <div class="form-row">
                                <label for="url" class="form-label">Url slug</label>
                                <input value="${data[0].url_slug}" type="text" class="form-control" id="url" required>
                            </div>
                            <div class="form-row">
                                <label for="description" class="form-label">Description</label>
                                <textarea class="form-control" id="description" required>${data[0].description}</textarea>
                            </div>
                            <button type="submit" class="bg-yellow">Update</button>
                            <button type="reset" class="btn">Reset</button>
                        </form>
            </main>`;
    }
}