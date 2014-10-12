( function() {
    window.Asteroids = window.Asteroids || {};

    var Game = Asteroids.Game = function() {
        this.asteroids = [];

        this.addAsteroids();
    };

    Game.DIM_X = window.innerWidth;
    Game.DIM_Y = window.innerHeight;
    Game.NUM_ASTEROIDS = 20;

    Game.prototype.addAsteroids = function() {
        for (var i = 0, l = Game.NUM_ASTEROIDS; i < l;i ++) {
            this.asteroids.push(new Asteroids.Asteroid({ game: this }));
        }
    };
    Game.prototype.draw = function(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.asteroids.forEach(function(obj) {
            obj.draw(ctx);
        } );
    };
    Game.prototype.moveObjects = function(ctx) {
        this.asteroids.forEach(function(asteroid) {
            asteroid.move();
        });
    };
    Game.prototype.randomPosition = function() {
        return [ Game.DIM_X * Math.random(), Game.DIM_Y * Math.random() ];
    };
} )();
