// Data

const cards = [
    {
        id: '1',
        title: 'Borsuk',
        image: './Images/Badger The Alchemist.png',
        source: './Sources/Badger The Alchemist.jpg',
        url: '',
    },
    {
        id: '2',
        title: 'Borsuk',
        image: './Images/Badger The Specialist.png',
        source: './Sources/Badger The Specialist.jpg',
        url: '',
    },
    {
        id: '3',
        title: 'Rome',
        image: './Images/Caffe Italiano.png',
        source: './Sources/Caffe Italiano.jpg',
        url: '',
    },
    {
        id: '4',
        title: 'Rzelechowo',
        image: './Images/Forest of the Frozen.png',
        source: './Sources/Forest of the Frozen.jpg',
        url: '',
    },
    {
        id: '5',
        title: 'Park',
        image: './Images/Freeze.png',
        source: './Sources/Freeze.jpg',
        url: '',
    },
    {
        id: '6',
        title: 'Bulwary',
        image: './Images/Gryfia Stocznia Remontowa.png',
        source: './Sources/Gryfia Stocznia Remontowa.jpg',
        url: '',
    },
    {
        id: '7',
        title: 'Bulgaria',
        image: './Images/Leaf Of Faith.png',
        source: './Sources/Leaf Of Faith.jpg',
        url: '',
    },
    {
        id: '8',
        title: 'Perkoza',
        image: './Images/Tropical Morning.png',
        source: './Sources/Tropical Morning.jpg',
        url: '',
    },
    {
        id: '9',
        title: 'Wiercik',
        image: './Images/Wiercik The Tank.png',
        source: './Sources/Wiercik The Tank.jpeg',
        url: '',
    }
]

// Vue instance

const header = Vue.createApp({
    template: `
    <header class="site-header">
        <div class="site-logo">
            <div class="site-title">
                <h1>Ligo Autismo</h1>
                <div class="site-subtitle">Fan Made Inside Joke in the Form of a Magic the Gathering Like Card Game Expansion
                </div>
            </div>
        </div>
        <div class="header-nav">
            <ul class="nav">
                <li class="active">
                    <a target="_self" href="./">Display</a>
                </li>
                <li>
                    <a target="_self" href="./search.html">Search</a>
                </li>
                <li>
                    <a target="_self" href="./images.html">Images</a>
                </li>
            </ul>
        </div>
    </header>
    `,
});

const footer = Vue.createApp({
    template: `
    <footer class="site-footer">
        <div class="row row-middle">
            <div class="col-md-3 site-footer-copyright">
                © Stefan Kubisa Feel Free to Copy or Take Inspiration From
            </div>
            <div class="col-md-6 site-footer-links">
            <div class="social-item-linkdin">
                <a target="_blank" href="https://www.linkedin.com/in/stefan-kubisa/">
                    <img src="./Bootstrap_Fonts_Logos/linkedin_black_logo_icon_small.png" alt="">
                </a>
            </div>
            <div class="social-item-github">
                <a target="_blank" href="https://github.com/lfx2m/Ligo-Autismo">
                    <img src="./Bootstrap_Fonts_Logos/github-logo_icon.png" alt=""></a>
            </div>
            </div>
            <div class="col-md-3 back-to-top">
                <a class="scroll-to-top" href="#top">
                    &#X2191 Back to Top</a>
            </div>
        </div>
    </footer>
    `,
});

const display = Vue.createApp({
    el: '#display',
    data() {
        return {
            cards: cards
        }
    },
})

// Components

const card = display.component('card', {
    template: `
    <a class="album-insta-item" :href="card.source">
        <div class="album-insta-inner">
            <img class="img-responsive" :src="card.image" alt="">
            <div class="album-insta-overlay">
                <div class="album-insta-project">{{ card.title }}</div>
            </div>
        </div>
    </a>
    `,
    props: [
        'card',
    ]
})

const cardWrapper = display.component('card-wrapper', {
    template: `
    <div class="site-wrapper">
        <div class="site-content">
            <div class="album-insta-wrap">
                <div class="album-insta justify-content-center">
                    <card v-for="card in cards" :key="card.id" :card="card" />
                </div>
            </div>
        </div>
    </div>
    `,
    props: [
        'cards',
    ]
})