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
             ${this.menuBar()}
            <table class="blueTable">
                <thead>
                    <tr>
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
                    <td class="">
                        <button class="bg-yellow">Edit</button>
                        <button class="bg-red">Delete</button>
                    </td>
                    </tr>
                    <tr>
                        <td>cell1_2</td>
                        <td>cell2_2</td>
                        <td>cell3_2</td>
                    <td class="">
                        <button class="bg-yellow">Edit</button>
                        <button class="bg-red">Delete</button>
                    </td>
                    </tr>
                </tbody>
            </table>`;
    }
}