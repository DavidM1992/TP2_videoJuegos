const { createApp } = Vue;
    
    createApp({
        data() {
            return {
                newGame: {
                    name: '',
                    platform: '',
                    state: '',
                    score: ''
                },
                games: []
            };
        },
        methods: {
            addGame() {
                if (this.newGame.name && this.newGame.platform && this.newGame.state && this.newGame.score) {
                    this.games.push({ ...this.newGame });
                    this.newGame.name = '';
                    this.newGame.platform = '';
                    this.newGame.state = '';
                    this.newGame.score = '';
                } else {
                    alert("Por favor complete todos los campos");
                }
            }
        }
    }).mount('#app');