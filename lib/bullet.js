(function() {
    window.Asteroids = window.Asteroids || {};

    var Bullet = Asteroids.Bullet = function(options) {
        options.radius = Bullet.RADIUS;
        options.color  = Bullet.COLOR;
        options.image  = new Image();
        options.image.src = "./lasermini.png";

        Asteroids.MovingObject.call(this, options);
    };
    Bullet.RADIUS = 10;
    Bullet.COLOR  = "lime";

    Asteroids.Util.inherits(Bullet, Asteroids.MovingObject);
    Bullet.prototype.isBullet = true;
})();
