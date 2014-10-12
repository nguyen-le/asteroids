(function() {
    window.Asteroids = window.Asteroids || {};

    var GameView = Asteroids.GameView = function(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    };
    GameView.prototype.start = function() {
        setInterval(function() {
            this.game.moveObjects(this.ctx);
            this.game.draw(this.ctx);
        }.bind(this), 300);
    };
})();
