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
            <link rel="icon" type="image/png" href="/favicon/favicon-96x96.png" sizes="96x96" />
            <link rel="icon" type="image/svg+xml" href="/favicon//favicon.svg" />
            <link rel="shortcut icon" href="/favicon/favicon.ico" />
            <link rel="apple-touch-icon" sizes="180x180" href="/favicon/apple-touch-icon.png" />
            <link rel="manifest" href="/site.webmanifest" />
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
                <a href="/services">Services</a>
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
            <div class="col-12 col-md-6 col-lg-2">
                        <p>Quick links</p>
                        <a class="fa fa-facebook" aria-hidden="true"></a>
                        <a class="fa fa-dribbble" aria-hidden="true"></a>
                        <a class="fa fa-twitter" aria-hidden="true"></a>
                        <a class="fa fa-instagram" aria-hidden="true"></a>
                        <a class="fa fa-linkedin" aria-hidden="true"></a>
            </div>
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