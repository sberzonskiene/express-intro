export class PageTemplate {
    constructor() {
        this.pageType = 'fullPage';
        this.isAsideVisible = true;
    }

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
            <a href="/">
                <img class="logo" src="/img/logo.webp" alt="Logo">
            </a>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </header> `;
    }

    headerAuth() {
        return `
        <header>
            <a href="/">
                <img class="logo" src="/img/logo.webp" alt="Logo">
            </a>
            <nav>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </header> `;
    }

    footer() {
        return `
        <footer>
            <p>Pagaminta Lietuvoje &copy; 2025m.</p>
            <nav>
                <a href="/">Home</a>
                <a href="/about">About</a>
                <a href="/register">Register</a>
                <a href="/login">Login</a>
            </nav>
        </footer> `;
    }

    footerAuth() {
        return `
        <footer>
            Pagaminta Lietuvoje &copy; 2025m.
        </footer> `;
    }

    aside() {
        return `<aside>SONINIS MENIU</aside>`;
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
            ${this.pageType === 'fullPage' ? this.header() : this.headerAuth()}
            ${this.isAsideVisible ? this.aside() : ''}
            <main>${this.main()}</main>
            ${this.pageType === 'fullPage' ? this.footer() : this.footerAuth()}  
        </body>
    </html> `;
    }
}