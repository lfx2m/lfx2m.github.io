const card = new Vue({
    el: "#card",
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