export function loginForm() {
    return `<h1><i class="fa fa-sign-in" aria-hidden="true"></i>Login</h1>
                <form class="form">
                    <div class="form-row">
                        <label>Username</label>
                        <input id="username" type="text" value="" required>
                    </div>
                    <div class="form-row">
                        <label>Password</label>
                        <input id="password" type="password" value="" required>
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