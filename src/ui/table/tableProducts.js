export function tableProducts(data) {
    let HTML = '';
    let nr = 1;

    for (const product of data) {
        HTML += `
        <tr>
            <td>${nr++}</td>
            <td>${product.title}</td>
            <td>${product.url_slug}</td>
            <td>${product.desc}</td>
            <td>
                <button class="">Edit</button>
                <button class="bg-red">Delete</button>
                <a class="bg-yellow" href="/admin/products/${product.url_slug}/edit">Edit</a>
                <button data-url="${category.url_slug}" class="btn btn-danger btn-sm">Delete</button>
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