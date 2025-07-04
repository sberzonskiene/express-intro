export function registerForm (){
    return `<h1><i class="fa fa-registered"></i>Register</h1>
            <form class="form">
                    <div class="form-row">
                        <label>Username</label>
                        <input id="username" type="text" value="" required>
                    </div>   
                <div class="form-row">    
                    <label for="email">Email</label>
                    <input id="email" type="email" required>
                </div>    
                <div class="form-row">    
                    <label for="password">Password</label>
                    <input id="password" type="password" required>
                </div>    
                <div class="form-row">    
                    <button type="submit">Register</button>
                </div>    
            </form>`;
}

