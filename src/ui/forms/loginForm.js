import { NODE_ENV } from "../../env.js";

export function loginForm() {
    let username = '';
    let password = '';

    if(NODE_ENV === 'dev') {
        username = 'saule';
        password = 'saule@saule.lt';
    }

    return `<h1><i class="fa fa-sign-in" aria-hidden="true"></i>Login</h1>
                <form class="form">
                    <div class="form-row">
                        <label>Username</label>
                        <input value="${username}" id="username" type="text" value="" required>
                    </div>
                    <div class="form-row">
                        <label>Password</label>
                        <input value="${password}" id="password" type="password" value="" required>
                    </div>
                    <div class="form-row">
                        <button type="submit">Login</button>
                    </div>
                </form>
                <div class="log">
                    <a href="/">Back home</a><i class="fa fa-home"></i>
                </div>
                `;
}