(function() {
    window.Asteroids = window.Asteroids || {};

    var Ship = Asteroids.Ship = function(obj) {
        this.color  = Ship.COLOR;
        this.direction = [0, -1];
        this.game   = obj.game;
        this.health = 40;
        this.pos    = [Asteroids.Game.DIM_X / 2, Asteroids.Game.DIM_Y * 0.75];
        this.radius = Ship.RADIUS;
        this.vel    = obj.vel || [0, 0];
        this.image = new Image();
        this.image.src = "./ds_full1.png";
        this.fireSound = new Audio();
        this.fireSound.src = "http://www.sa-matra.net/sounds/starwars/ISD-Laser3.wav";
    };
    Ship.RADIUS = 150;
    Ship.COLOR = "darkgray";
    Asteroids.Util.inherits(Asteroids.Ship, Asteroids.MovingObject);
    Ship.prototype.fire = function() {
        var bulletVel = [this.direction[0] * 6 + this.vel[0] * 4,
            this.direction[1] * 6 + this.vel[1] * 4];
        var bullet = new Asteroids.Bullet({
            pos: this.pos.slice(0),
            vel: bulletVel,
            game: this.game,
        });
        this.game.addBullet(bullet);
        this.fireSound.play();
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
    Ship.prototype.takeDmg = function() {
        this.health -= 1;
        if (this.health === 0) {
            this.image.src = "./ds_half.png";
            this.power = null;
            alert("Thrusters have been knocked offline! You drift aimlessly through space...");
        }
    };
    var capSpeed = function(array) {
        for (var i = 0, l = array.length; i < l; i++) {
            if (array[i] > 8) {
                array[i] = 8;
            } else if (array[i] < -8) {
                array[i] = -8;
            }
        }
    };
})();
