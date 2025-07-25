const formDOM = document.forms[0];
const usernameDOM = document.getElementById('username');
const passwordDOM = document.getElementById('password');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            username: usernameDOM.value,
            password: passwordDOM.value,
        };
        
        fetch('/api/login', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'succses' && data.action === 'redirect') {
                    location.href = data.href;
                }
            })
            .catch(console.error);
    });
} 


