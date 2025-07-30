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
                    <a href="/admin">Dashboard</a>
                <nav>
                    <div class="nv">
                        <h1 class="display">New product</h1>
                    </div>
                        <form class="col-12 col-md-9 col-lg-6 mb-5">
                            <img id="img_preview" class="w-100 object-fit-contain" src="/img/default.png" alt="Movie thumbnail">
                            <p id="img_path">/img/default.png</p>
                            <input type="file" class="form-control" id="img" name="img">
                        </form>
                        
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
                                <p>Duration</p>
                                <div class="nv">
                                    <label for="duration_hours" class="form-label">Hours</label>
                                    <input value="0" min="0" max="4" step="1" type="number" class="form-control" id="duration_hours">
                                </div>
                                <div class="form-row">
                                    <label for="duration_minutes" class="form-label">minutes</label>
                                    <input value="0" min="0" max="59" step="1" type="number" class="form-control" id="duration_minutes">
                                </div>
                            </div>
                            <div class="form-row">
                                <label for="category" class="form-label">Category</label>
                                <select class="form-select" id="category">
                                    <option value="0">-- choose</option>
                                </select>
                            </div>
                            <div class="form-row">
                                <label for="release_date" class="form-label">Release date</label>
                                <input type="date" class="form-control" id="release_date">
                            </div>
                            </div>
                            <button type="submit" class="btn btn-primary">Create</button>
                        </form>
                    </div>
                </div>
            </main>`;
    }
}