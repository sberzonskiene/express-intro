const formDOM = document.forms[0];
const usernameDOM = document.getElementById('username');
const emailDOM = document.getElementById('email');
const passwordDOM = document.getElementById('password');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            username: usernameDOM.value,
            email: emailDOM.value,
            password: passwordDOM.value,
        
        };
         console.log(data);

    
    });
} 



/*   fetch('/api/register', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
             console.log(data);
            })
            .catch(console.error);*/