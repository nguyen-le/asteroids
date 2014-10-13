(function() {
    window.Asteroids = window.Asteroids || {};

    var MovingObject = Asteroids.MovingObject = function(obj) {
        this.pos    = obj.pos;
        this.vel    = obj.vel;
        this.radius = obj.radius;
        this.color  = obj.color;
        this.game   = obj.game;
    };
    MovingObject.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
          this.pos[0],
          this.pos[1],
          this.radius,
          0,
          2 * Math.PI,
          false
        );

        ctx.fill();
    };
    MovingObject.prototype.collideWith = function(obj) {
        this.game.remove(obj);
        this.game.remove(this);
    };
    MovingObject.prototype.isCollidedWith = function(obj) {
        var dist = Math.sqrt(
            Math.pow(this.pos[0] - obj.pos[0], 2) +
            Math.pow(this.pos[1] - obj.pos[1], 2)
        );
        return (dist <= this.radius + obj.radius);
    };
    MovingObject.prototype.move = function() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
        if (this.isBullet) {
            if (this.game.isOutOfBounds(this.pos)) {
                this.game.remove(this);
            }
        } else {
            this.pos = this.game.wrap(this.pos);
        }
    };
})();
