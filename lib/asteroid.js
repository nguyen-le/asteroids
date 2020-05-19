( function() {
    window.Asteroids = window.Asteroids || {};

    var Asteroid = Asteroids.Asteroid = function(obj) {
        obj.pos    = obj.pos || obj.game.randomPosition();
        obj.vel    = obj.vel || Asteroids.Util.randomVec(5);
        obj.color  = Asteroid.COLOR;
        obj.radius = Asteroid.RADIUS;
        obj.image  = new Image();
        obj.image.src = "./xwingmini.png";
        Asteroids.MovingObject.call(this, obj);
    };

    Asteroid.COLOR = 'white';
    Asteroid.RADIUS = 20;

    Asteroids.Util.inherits(Asteroids.Asteroid, Asteroids.MovingObject);
})();
