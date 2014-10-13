(function() {
    window.Asteroids = window.Asteroids || {};

    var Ship = Asteroids.Ship = function(obj) {
        this.pos    = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y * 0.75];
        this.vel    = obj.vel || [0, 0];
        this.radius = Ship.RADIUS;
        this.color  = Ship.COLOR;
        this.game   = obj.game;
    };
    Ship.RADIUS = 10;
    Ship.COLOR = "blue";
    Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);
    Ship.prototype.power = function(impulse) {
        this.vel[0] += impulse[0];
        this.vel[1] += impulse[1];
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
