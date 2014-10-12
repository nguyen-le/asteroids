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
})();
