export function about () {
    const links = ['About us', 'Information', 'Contact'] ;
    let linksHTML = '';
    for (const link of links) {
        linksHTML += `<li>${link}</li>`;
    }
return `  
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>
</head>
<body>
<main>
    <h1>About page</h1>
    <p>Lorem ipsum dolor sit amet consectetur.</p>
    <ul>${linksHTML}</ul>
</main>      
</body>
</html>`
};