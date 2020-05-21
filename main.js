const header = new Vue({
    el: "#header",
    template: `
    <header class="navbar col-12 navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark text-white">
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-row">
                <li class="nav-item">
                    <a class="nav-link"
                onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank"
                rel="noopener">stefankubisa@gmail.com</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.linkedin.com/in/stefan-kubisa/"
                        onclick="ga('send', 'event', 'Navbar', 'Community links', 'Themes');" target="_blank"
                        rel="noopener">LinkedIn</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://github.com/lfx2m/"
                        onclick="ga('send', 'event', 'Navbar', 'Community links', 'Expo');" target="_blank"
                        rel="noopener">Github</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://twitter.com/lfx2m/"
                        onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank"
                        rel="noopener">Twitter</a>
                </li>
                <li class="nav-item">
                    <a class="nav-link" href="https://www.instagram.com/lfx2mer/"
                        onclick="ga('send', 'event', 'Navbar', 'Community links', 'Blog');" target="_blank"
                        rel="noopener">Instagram</a>
                </li>
            </ul>
        </div>
    </header>
    `
})

const mainer = new Vue({
    el: "#mainer",
    template: `
    <div class="row">
        <div class="col-lg-12 text-center">
            <img class="img rounded-circle align-self-center" width="240" 
                src="Images/StefanKubisa.jpeg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img"
                aria-label="Placeholder: 140x140">
                <title>Placeholder</title>
            </img>
            <h2>Heading</h2>
            <p>I study Industrial Economics with focus on Information and Communication Technologies at the Technical                    University of Berlin and enjoy both reading and writing of academic papers as well as Capture the Falg competitions.</p>
        </div>
    </div>
    `
})
const footer = new Vue({
    el: "#footer",
    template: `      
    `
})