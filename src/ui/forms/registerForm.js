export function registerForm (){
    return `<h1><i class="fa fa-registered"></i>Register</h1>
            <form id="registerForm">
                <div class="mb-4">
                    <label for="username">Username</label>
                    <input type="text" id="username" name="username" required>
                </div>    
                <div class="mb-4">    
                    <label for="email">Email</label>
                    <input type="email" id="email" name="email" required>
                </div>    
                <div class="mb-4">    
                    <label for="password">Password</label>
                    <input type="password" id="password" name="password" required>
                </div>    
                <div class="mb-4">    
                    <button type="submit">Register</button>
                </div>    
            </form>`;
}