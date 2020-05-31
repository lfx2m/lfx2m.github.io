const header = new Vue({
    el: "#header",
    template: `
    <div class="container col-12">
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
    </div>
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
            <div class="container-lg">
            <p>I study Industrial Economics with focus on Information and Communication Technologies at the Technical University of Berlin and enjoy both reading and writing of academic papers as well as Capture the Falg competitions.</p>
            </div>
        </div>
    </div>
    `
})

const footer = new Vue({
    el: "#footer",
    template: `
    
    <div class="container-fluid bd-light">
        <div class="row">
            <div class="col col-12 col-md-3">

                <h5 class="container text-center">Programming</h5>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link">
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">JavaScript</a>
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">Python</a>
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">Java</a>
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">API</a>
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">UML</a>
                                <a type="button" class="btn btn-danger text-white active" aria-pressed="true">OOP</a>
                            </a>
                            </>
                    </ul>
                </div>
                <hr class="featurette-divider">

            </div>

            <div class="col col-12 col-md-3">

                <h5 class="container text-center">Webdevelopment</h5>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link">
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">REST</a>
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">NodeJS</a>
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">CSS/SCSS</a>
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">MongoDB</a>
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">Vue.js</a>
                                <a type="button" class="btn btn-primary text-white active" aria-pressed="true">Bootstrap</a>
                            </a>
                            </>
                    </ul>
                </div>
                <hr class="featurette-divider">

            </div>

            <div class="col col-12 col-md-3">

                <h5 class="container text-center">Software Security</h5>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link">
                                <a type="button" class="btn btn-secondary text-white active"
                                    aria-pressed="true">pwntools</a>
                                <a type="button" class="btn btn-secondary text-white active"
                                    aria-pressed="true">octoproxy</a>
                                <a type="button" class="btn btn-secondary text-white active" aria-pressed="true">Burp</a>
                                <a type="button" class="btn btn-secondary text-white active" aria-pressed="true">Ghidra</a>
                                <a type="button" class="btn btn-secondary text-white active" aria-pressed="true">sqlmap</a>
                            </a>
                            </>
                    </ul>
                </div>
                <hr class="featurette-divider">

            </div>

            <div class="col col-12 col-md-3">

                <h5 class="container text-center">Operating Systems and Tools</h5>
                <div class="navbar-nav-scroll">
                    <ul class="navbar-nav bd-navbar-nav flex-wrap">
                        <li class="nav-item">
                            <a class="nav-link">
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">Linux</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">Windows</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">WSL</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">Git</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">Latex</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">MSOffice</a>
                                <a type="button" class="btn btn-success text-white active" aria-pressed="true">bash</a>
                            </a>
                            </>
                    </ul>
                </div>
                <hr class="featurette-divider">
        </div>
        </div>
    </div>
    `
})