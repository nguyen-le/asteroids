(function() {
    window.Asteroids = window.Asteroids || {};

    var Bullet = Asteroids.Bullet = function(options) {
        options.radius = Bullet.RADIUS;
        options.color  = Bullet.COLOR;

        Asteroids.MovingObject.call(this, options);
    };
    Bullet.RADIUS = 5;
    Bullet.COLOR  = "yellow";

    Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
    Bullet.prototype.isBullet = true;
})();
