(function (window) {
    'use strict';

    function kostasotrelos0() {
        var _trelos = {};
        trelos.introduce = function (opts = {}) {
            const message = 'Καλησπέρα friends! ορίστε!';
            opts.needsAttention ? alert(message) : console.log(message);
            return console.log('');
        };
        trelos.sayKalispera = function () {
            var audio = new Audio('./audio/friends.mp3');
            audio.play();
        };
        return _trelos;
    }

    if (typeof window.kostasotrelos0 === 'undefined') {
        window.globalTrelos = kostasotrelos0();
    }
})(window);

console.log(kostasotrelos0);
