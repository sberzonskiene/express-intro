export function tableProducts(data) {
    let HTML = '';
    let nr = 1;

    for (const product of data) {
        HTML += `
        <tr>
            <td>${nr++}</td>
            <td>${product.title}</td>
            <td>${product.url}</td>
            <td>${product.description}</td>
            <td>
                <a class="bg-yellow" href="/admin/products/${product.url_slug}/edit">Edit</a>
                <button data-url="${product.url_slug}" class="bg-red">Delete</button>
            </td>
        </tr>`;
    }

    return `
        <table class="blueTable">
            <thead>
                 <tr>
                    <th>#</th>
                    <th>Title</th>
                    <th>Url</th>
                    <th>Description</th>
                    <th>Actions</th>
                </tr>
            </thead>
            <tbody>
                ${HTML}
            </tbody>
        </table>`;
}