export function registerForm (){
    return `<h1><i class="fa fa-registered"></i>Register</h1>
            <form id="registerForm">
                <div class="mb-4">
                    <label for="username">Username</label>
                    <input id="username" type="text" required>
                </div>    
                <div class="mb-4">    
                    <label for="email">Email</label>
                    <input id="email" type="email" required>
                </div>    
                <div class="mb-4">    
                    <label for="password">Password</label>
                    <input id="password" type="password" required>
                </div>    
                <div class="mb-4">    
                    <button type="submit">Register</button>
                </div>    
            </form>`;
}