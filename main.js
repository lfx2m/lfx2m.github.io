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
            </img>
            <h2>Stefan Kubisa</h2>
            <p>I study Industrial Economics with focus on Information and Communication Technologies at the Technical University of Berlin and enjoy both reading and writing of academic papers as well as Capture the Falg competitions.</p>
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
                    <a type="button" class="btn btn-danger text-white">JavaScript</a>
                    <a type="button" class="btn btn-danger text-white">Python</a>
                    <a type="button" class="btn btn-danger text-white">Java</a>
                    <a type="button" class="btn btn-danger text-white">C</a>
                    <a type="button" class="btn btn-danger text-white">R</a>
                    <a type="button" class="btn btn-danger text-white">API</a>
                    <a type="button" class="btn btn-danger text-white">UML</a>
                    <a type="button" class="btn btn-danger text-white">OOP</a>
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
                        <a type="button" class="btn btn-primary text-white">REST</a>
                        <a type="button" class="btn btn-primary text-white">NodeJS</a>
                        <a type="button" class="btn btn-primary text-white">CSS/SCSS</a>
                        <a type="button" class="btn btn-primary text-white">MongoDB</a>
                        <a type="button" class="btn btn-primary text-white">Vue.js</a>
                        <a type="button" class="btn btn-primary text-white">Bootstrap</a>
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
                        <a type="button" class="btn btn-secondary text-white">pwntools</a>
                        <a type="button" class="btn btn-secondary text-white">octoproxy</a>
                        <a type="button" class="btn btn-secondary text-white">Burp</a>
                        <a type="button" class="btn btn-secondary text-white">Ghidra</a>
                        <a type="button" class="btn btn-secondary text-white">sqlmap</a>
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
                        <a type="button" class="btn btn-success text-white">Linux</a>
                        <a type="button" class="btn btn-success text-white">Windows</a>
                        <a type="button" class="btn btn-success text-white">WSL</a>
                        <a type="button" class="btn btn-success text-white">Git</a>
                        <a type="button" class="btn btn-success text-white">Latex</a>
                        <a type="button" class="btn btn-success text-white">MSOffice</a>
                        <a type="button" class="btn btn-success text-white">bash</a>
                    </a>
                </>
            </ul>
            </div>
        <hr class="featurette-divider">
    </div>
    
    `
})