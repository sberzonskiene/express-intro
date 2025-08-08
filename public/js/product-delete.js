const deleteButtonsDOM = document.querySelectorAll('table button');

for (const btnDOM of deleteButtonsDOM) {
    btnDOM.addEventListener('click', () => {
        console.log('delete', btnDOM.dataset.url);
        
        fetch('/api/admin/products/' + btnDOM.dataset.url, {
            method: 'DELETE',
        })
            .then(res => res.json())
            .then(data => {
                if (data.status === 'success') {
                    btnDOM.closest('tr').remove();
                }    
            })
            .catch(console.error)
    });
}
