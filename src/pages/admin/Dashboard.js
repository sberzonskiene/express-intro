import { COOKIE_MAX_AGE } from "../../env.js";
import { AdminTemplate } from "../../template/AdminTemplate.js";

export class PageDashboard extends AdminTemplate {
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
        
        const cookie = this.req.user.login_token_created_at.getTime();
        const secondsLeft = Math.floor(COOKIE_MAX_AGE - (Date.now() - cookie) / 1000);
        const seconds = secondsLeft % 60;
        const minutes = (secondsLeft - seconds) / 60;

        return `
            <main>
                <img src="/img/logo1.jpg" alt="logo">    
                    <h1><i class="fa fa-dashcube"></i>Welcome to dashboard !!!</h1>
                    <p class="par">Username: ${this.req.user.username}</p>
                    <p class="par">Likęs sesijos laikas: ${minutes}:${seconds}</p>
                    ${this.menuBar()}
            </main>`;
    }
}


            