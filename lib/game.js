( function() {
    window.Asteroids = window.Asteroids || {};

    var Game = Asteroids.Game = function() {
        this.asteroids = [];

        this.ship = null;
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

        this.ship = newShip;
    };
    Game.prototype.checkCollisions = function() {
        var ship = this.ship;
        if (ship) {
            this.asteroids.forEach(function(obj1) {
                if (ship.isCollidedWith(obj1)) {
                    ship.collideWith(obj1);
                }
            });
        }
    };
    Game.prototype.draw = function(ctx) {
        ctx.clearRect(0, 0, Game.DIM_X, Game.DIM_Y);
        ctx.fillStyle = "black";
        ctx.fillRect(0, 0, Game.DIM_X, Game.DIM_Y);

        this.asteroids.forEach(function(obj) {
            obj.draw(ctx);
        } );
        if (this.ship.pos) this.ship.draw(ctx);
    };
    Game.prototype.isOutOfBounds = function(pos) {
        return (pos[0] < 0) || (pos[1] < 0) ||
               (pos[0] > Game.DIM_X) || (pos[1] > Game.DIM_Y);
    };
    Game.prototype.moveObjects = function(ctx) {
        this.asteroids.forEach(function(asteroid) {
            asteroid.move();
        });
        if (this.ship.pos) this.ship.move();
    };
    Game.prototype.randomPosition = function() {
        return [ Game.DIM_X * Math.random(), Game.DIM_Y * Math.random() ];
    };
    Game.prototype.remove = function(obj) {
        if (obj instanceof Asteroids.Asteroid) {
            var a = this.asteroids.indexOf(obj);
            this.asteroids.splice(a, 1);
        } else if (obj instanceof Asteroids.Ship) {
            this.ship.reset();
        } else if (obj instanceof Asteroids.Bullet) {
            var b = this.bullets.indexOf(obj);
            this.bullets.splice(b, 1);
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
