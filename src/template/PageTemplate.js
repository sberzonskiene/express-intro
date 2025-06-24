export class PageTemplate {
    constructor() {}

    head () {
        return`
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express intro</title>
        </head> `;
    }

    header() {
        return `
        <header>
            <img src="./img/logo.jpg" alt="Logo">
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
            </nav>
        </header> `;
    }

    footer() {
        return `
        <footer>
            Pagaminta Lietuvoje &copy; 2025m.
        </footer> `;
    }

    main () {
        return `CONTENT`
    }

    render() {
        return `
    <!DOCTYPE html>
    <html lang="en">
        ${this.head()}
        <body>
            ${this.header()}
            <main>${this.main()}</main>
            ${this.footer()}  
        </body>
    </html> `;
    }
}