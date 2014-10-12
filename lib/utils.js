(function() {
    window.Asteroids = window.Asteroids || {};

    Asteroids.Util = {};
    Asteroids.Util.inherits = function(childClass, parentClass) {
        var Surrogate        = function() {};
        Surrogate.prototype  = parentClass.prototype;
        childClass.prototype = new Surrogate();
    };
    Asteroids.Util.randomVec = function(length) {
        return [
            randomDirection() * Math.ceil(Math.random()*length), 
            randomDirection() * Math.ceil(Math.random()*length)
        ];
    };
    var randomDirection = function() {
        return Math.random() > 0.5 ? 1 : -1;
    };
})();
