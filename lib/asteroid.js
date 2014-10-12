( function() {
    window.Asteroids = window.Asteroids || {};

    var Asteroid = Asteroids.Asteroid = function(obj) {
        obj.pos    = obj.pos || obj.game.randomPosition();
        obj.vel    = obj.vel || Asteroids.Util.randomVec(5);
        obj.color  = Asteroid.COLOR;
        obj.radius = Asteroid.RADIUS;
        Asteroids.MovingObject.call(this, obj);
    };

    Asteroid.COLOR = 'white';
    Asteroid.RADIUS = 10;

    Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
