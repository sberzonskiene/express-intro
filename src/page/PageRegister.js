import { PageTemplate } from "../template/PageTemplate.js";

export class PageRegister extends PageTemplate {
    constructor () {
        super();
        this.pageType = 'shortPage';
        this.isAsideVisible = false;
    }
    main() {
        return `
        <h1>Register</h1>
            <form id="registerForm">
                <label for="username">Vartotojo vardas:</label>
                <input type="text" id="username" name="username" required>
                <label for="password">Slaptažodis:</label>
                <input type="password" id="password" name="password" required>
                <button type="submit">Registruotis</button>
            </form>`;
        }
    }