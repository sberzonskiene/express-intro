export class PageTemplate {
    constructor(req) {
        this.req = req;
        this.pageType = 'fullPage';
        this.isAsideVisible = true;
        this.pageJS = '';
    }

    head () {
        return`
        <head>
            <meta charset="UTF-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>Express intro</title>
            <link rel="apple-touch-icon" sizes="57x57" href="/favicon/apple-icon-57x57.png">
            <link rel="manifest" href="/manifest.json">
            <meta name="msapplication-TileColor" content="#ffffff">
            <meta name="msapplication-TileImage" content="/ms-icon-144x144.png">
            <link rel="stylesheet" href="/css/main.css">
            <link rel="stylesheet" href="/css/vendor/font-awesome.min.css"/>
        </head> `;
    }

    header() {
        return `
        <header>
                <img src="/img/logo.jpg" alt="logo">
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
                <img src="/img/logo.jpg" alt="logo">
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

    script() {
        if (!this.pageJS) {
            return '';
        }
        return `<script src="/js/${this.pageJS}.js" type="module"></script>`;
    }

    aside() {
        return `<aside>SONINIS MENIU</aside>`;
    }

    main () {
        return `CONTENT`;
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
            ${this.script()}  
        </body>
    </html> `;
    }
}