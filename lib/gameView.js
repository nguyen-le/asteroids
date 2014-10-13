(function() {
    window.Asteroids = window.Asteroids || {};

    var GameView = Asteroids.GameView = function(game, ctx) {
        this.game = game;
        this.ctx = ctx;
    };
    GameView.prototype.start = function() {
        setInterval(function() {
            this.game.step(this.ctx);
            this.game.draw(this.ctx);
        }.bind(this), 20);
        this.bindKeys();
    };
    GameView.prototype.bindKeys = function() {
        var ship = this.game.ship;
        key("w", function() { ship.power([ 0, -1]); });
        key("a", function() { ship.power([-1,  0]); });
        key("s", function() { ship.power([ 0,  1]); });
        key("d", function() { ship.power([ 1,  0]); });
        key("m", function() { ship.fire(); });
    };
})();
