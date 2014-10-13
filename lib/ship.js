(function() {
    window.Asteroids = window.Asteroids || {};

    var Ship = Asteroids.Ship = function(obj) {
        this.pos    = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y * 0.75];
        this.vel    = obj.vel || [0, 0];
        this.radius = Ship.RADIUS;
        this.color  = Ship.COLOR;
        this.game   = obj.game;
        this.direction = [0, -1];
    };
    Ship.RADIUS = 10;
    Ship.COLOR = "blue";
    Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);
    Ship.prototype.fire = function() {
        var bullet = new Asteroids.Bullet({
            pos: this.pos,
            vel: this.direction,
            game: this.game,
        });
        this.game.addBullet(bullet);
    };
    Ship.prototype.power = function(impulse) {
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
        this.direction = impulse;
        capSpeed(this.vel);
    };
    Ship.prototype.reset = function() {
        this.pos = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y * 0.75];
        this.vel = [0, 0];
    };
    var capSpeed = function(array) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] > 10) {
                array[i] = 10;
            } else if (array[i] < -10) {
                array[i] = -10;
            }
        }
    };
})();
