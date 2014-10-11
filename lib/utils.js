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
            Math.ceil(Math.rand()*length), 
            Math.ceil(Math.rand()*length)
        ];
    };
})();
