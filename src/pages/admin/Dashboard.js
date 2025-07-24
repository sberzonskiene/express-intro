import { PageTemplate } from "../../template/PageTemplate.js";
import { COOKIE_MAX_AGE } from "../../env.js";

export class PageDashboard extends PageTemplate {
    constructor(req) {
        super(req);
        this.isAsideVisible = false;
        this.pageType = 'shortPage';
    } 
    main() {
        if (!this.req.user.isLogged) {
            return `
            <main>
                <p class="par">401-reikia prisijungti!!!<p>
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
               <div>
                    <h1><i class="fa fa-dashcube"></i>Welcome to dashboard !!!</h1>
                    <p class="par">Username: ${this.req.user.username}</p>
                    <p class="par">Likęs sesijos laikas: ${minutes}:${seconds}</p>
                </div>
            </main>`;
    }
}


            