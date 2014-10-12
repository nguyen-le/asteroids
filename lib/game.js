( function() {
    window.Asteroids = window.Asteroids || {};

    var Game = Asteroids.Game = function() {
        this.asteroids = [];

        this.ship = [];
        this.addAsteroids();
        this.addShip();
    };

    Game.DIM_X = window.innerWidth;
    Game.DIM_Y = window.innerHeight;
    Game.NUM_ASTEROIDS = 20;

    Game.prototype.addAsteroids = function() {
        for (var i = 0, l = Game.NUM_ASTEROIDS; i < l;i ++) {
            this.asteroids.push(new Asteroids.Asteroid({ game: this }));
        }
    };
    Game.prototype.addShip = function() {
        var newShip = new Asteroids.Ship({
            game: this
        });

        this.ship.push(newShip);
    };
    Game.prototype.checkCollisions = function() {
        var that = this;
        this.asteroids.forEach(function(obj1) {
            that.asteroids.forEach(function(obj2) {
                if (obj1 === obj2) {
                    return;
                } else if (obj1.isCollidedWith(obj2)) {
                    obj1.collideWith(obj2);
                }
            });
        });
    };
    Game.prototype.draw = function(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.asteroids.forEach(function(obj) {
            obj.draw(ctx);
        } );
        this.ship[0].draw(ctx);
    };
    Game.prototype.moveObjects = function(ctx) {
        this.asteroids.forEach(function(asteroid) {
            asteroid.move();
        });
        this.ship[0].move();
    };
    Game.prototype.randomPosition = function() {
        return [ Game.DIM_X * Math.random(), Game.DIM_Y * Math.random() ];
    };
    Game.prototype.remove = function(obj) {
        if (obj instanceof Asteroids.Asteroid) {
            var n = this.asteroids.indexOf(obj);
            this.asteroids.splice(n, 1);
        }
    };
    Game.prototype.step = function(ctx) {
        this.moveObjects(ctx);
        this.checkCollisions();
    };
    Game.prototype.wrap = function(pos) {
        return [
            (pos[0] + Game.DIM_X) % Game.DIM_X,
            (pos[1] + Game.DIM_Y) % Game.DIM_Y
        ];
    };
} )();
