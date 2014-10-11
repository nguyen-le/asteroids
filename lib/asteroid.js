( function() {
    window.Asteroids = window.Asteroids || {};

    var Asteroid = Asteroids.Asteroid = function(obj) {
        obj.pos    = obj.pos;
        obj.vel    = obj.vel;
        obj.color  = Asteroid.COLOR;
        obj.radius = Asteroid.RADIUS;
        Asteroids.MovingObject.call(this, obj);
    };

    Asteroid.COLOR = 'white';
    Asteroid.RADIUS = 10;
    Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
