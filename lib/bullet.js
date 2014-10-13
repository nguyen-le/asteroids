(function() {
    window.Asteroids = window.Asteroids || {};

    var Bullet = Asteroids.Bullet = function(options) {
        options.radius = Bullet.RADIUS;
        options.color  = Bullet.COLOR;

        Asteroids.MovingObject.call(this, options);
    };
    Bullet.RADIUS = 2;
    Bullet.COLOR  = "red";

    Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
    Bullet.prototype.isBullet = true;
})();
