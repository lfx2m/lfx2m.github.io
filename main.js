CardObject = new Vue({
    el: '#cards',
    data: {
        todos: [
            { text: 'Learn JavaScript' },
            { text: 'Learn Vue.js' },
            { text: 'Build Something Awesome' }
        ],
        locations: [
            { location: './Images/Tropical Morning.png'},
            { location: './Images/Leaf Of Faith.png'},
            { location: './Images/Gryfia Stocznia Remontowa.png'}
        ]
    }
})

new Vue({
    el: "#app",
    data: {
        image: './Images/Leaf Of Faith.png',
        image: './Images/Tropical Morning.png'
    },
})

test = new Vue({
    el: '#test',
    template: `
        <h2>{{ image }}</h2>
        <img v-for="z in image" v-bind:src="image" alt="">
    `,
    data: {
        image: './Images/Leaf Of Faith.png',
        image: './Images/Tropical Morning.png'
    }
})