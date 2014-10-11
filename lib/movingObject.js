(function() {
    window.Asteroids = window.Asteroids || {};

    var MovingObject = Asteroids.MovingObject = function(obj) {
        this.pos    = obj.pos;
        this.vel    = obj.vel;
        this.radius = obj.radius;
        this.color  = obj.color;
    };

    MovingObject.prototype.draw = function (ctx) {
        ctx.fillStyle = this.color;
        ctx.beginPath();

        ctx.arc(
          this.centerX,
          this.centerY,
          this.radius,
          0,
          2 * Math.PI,
          false
        );

        ctx.fill();
    };

    MovingObject.prototype.move = function() {
        this.pos[0] += this.vel[0];
        this.pos[1] += this.vel[1];
    };
})();
