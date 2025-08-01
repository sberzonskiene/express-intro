const formDOM = document.forms[0];
const titleDOM = document.getElementById('title');
const urlDOM = document.getElementById('url');
const descriptionDOM = document.getElementById('description');

if (formDOM) {
    formDOM.addEventListener('submit', (e) => {
        e.preventDefault();

        const data = {
            title: titleDOM.value,
            url: urlDOM.value,
            description: descriptionDOM.value,
        };

        fetch('/api/admin/products', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(data),
        })
            .then(res => res.json())
            .then(data => {
               /* if (data.status === 'success' && data.action === 'redirect') {
                    location.href = data.href;
                }*/
            })
            .catch(console.error);
    });
}