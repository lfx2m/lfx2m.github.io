const header = new Vue({
    el: "#header",
    template: `
    <header class="navbar col-12 navbar-expand navbar-dark flex-column flex-md-row bd-navbar bg-dark text-white">
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-wrap">
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
                src="Images/StefanKubisa.jpeg" preserveAspectRatio="xMidYMid slice" focusable="false" role="img-fluid">
                <title>Placeholder</title>
            </img>
            <h2>Stefan Kubisa</h2>
            <p>I study Industrial Economics with focus on Information and Communication Technologies at the Technical                    University of Berlin and enjoy both reading and writing of academic papers as well as Capture the Falg competitions.</p>
        </div>
    </div>
    `
})
const footer = new Vue({
    el: "#footer",
    template: `
    <div class="container-fluid">
    <h5 class="col aol-lg-12 text-center">Programming</h5>
    <hr class="featurette-divider">
    <div class="navbar-nav-scroll">
        <ul class="navbar-nav bd-navbar-nav flex-wrap">
            <li class = "nav-item">
                <a class="nav-link">
                    <a type="button" class="btn btn-danger" href="https://www.javascript.com/" target="blank">JavaScript</a>
                    <a type="button" class="btn btn-danger" href="https://www.python.org/" target="blank">Python</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">Java</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">C</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">R</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">API</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">UML</a>
                    <a type="button" class="btn btn-danger" href="" target="blank">OOP</a>
                </a>
            </>
        </ul>
        </div>
        <hr class="featurette-divider">
        <h5 class="col aol-lg-12 text-center">Webdevelopment</h5>
        <hr class="featurette-divider">
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-wrap">
                <li class = "nav-item">
                    <a class="nav-link">
                        <a type="button" class="btn btn-primary" href="" target="blank">REST</a>
                        <a type="button" class="btn btn-primary" href="" target="blank">NodeJS</a>
                        <a type="button" class="btn btn-primary" href="" target="blank">CSS/SCSS</a>
                        <a type="button" class="btn btn-primary" href="" target="blank">MongoDB</a>
                        <a type="button" class="btn btn-primary" href="" target="blank">Vue.js</a>
                        <a type="button" class="btn btn-primary" href="" target="blank">Bootstrap</a>
                    </a>
                </>
            </ul>
            </div>
        <hr class="featurette-divider">
        <h5 class="col aol-lg-12 text-center">Software Security</h5>
        <hr class="featurette-divider">
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-wrap">
                <li class = "nav-item">
                    <a class="nav-link">
                        <a type="button" class="btn btn-secondary" href="" target="blank">pwntools</a>
                        <a type="button" class="btn btn-secondary" href="" target="blank">octoproxy</a>
                        <a type="button" class="btn btn-secondary" href="" target="blank">Burp</a>
                        <a type="button" class="btn btn-secondary" href="" target="blank">Ghidra</a>
                        <a type="button" class="btn btn-secondary" href="" target="blank">sqlmap</a>
                    </a>
                </>
            </ul>
            </div>
        <hr class="featurette-divider">
        <h5 class="col aol-lg-12 text-center">Operating Systems and Tools</h5>
        <hr class="featurette-divider">
        <div class="navbar-nav-scroll">
            <ul class="navbar-nav bd-navbar-nav flex-wrap">
                <li class = "nav-item">
                    <a class="nav-link">
                        <a type="button" class="btn btn-success" href="" target="blank">Linux</a>
                        <a type="button" class="btn btn-success" href="" target="blank">Windows</a>
                        <a type="button" class="btn btn-success" href="" target="blank">WSL</a>
                        <a type="button" class="btn btn-success" href="" target="blank">Git</a>
                        <a type="button" class="btn btn-success" href="" target="blank">Latex</a>
                        <a type="button" class="btn btn-success" href="" target="blank">MSOffice</a>
                        <a type="button" class="btn btn-success" href="" target="blank">bash</a>
                    </a>
                </>
            </ul>
            </div>
        <hr class="featurette-divider">
    </div>
    
    `
})