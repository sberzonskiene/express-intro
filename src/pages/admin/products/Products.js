import { AdminTemplate } from "../../../template/AdminTemplate.js";

export class PageAdminProducts extends AdminTemplate {
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
                        <h1 class="display">All products</h1>
                    </div>
            <table class="blueTable">
                <thead>
                    <tr>
                        <th>#</th>
                        <th>Title</th>
                        <th>Url</th>
                        <th>Description</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>cell1_1</td>
                        <td>cell2_1</td>
                        <td>cell3_1</td>
                        <td>cell4_1</td>
                    <td>
                        <button class="bg-yellow">Edit</button>
                        <button class="bg-red">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>`;
    }
}