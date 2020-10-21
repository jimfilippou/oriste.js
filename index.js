(function (window) {
    'use strict';

    function kostasotrelos0() {
        var _trelos = {};
        var _el = document.createElement('audio');
        _el.innerHTML =
            '<source src="' +
            'https://raw.githubusercontent.com/jimfilippou/oriste.js/master/assets/audio/friends.mp3' +
            '" type="audio/mpeg" />';
        document.querySelector('body').appendChild(_el);
        _trelos.introduce = function (opts = {}) {
            const message = 'Καλησπέρα friends! ορίστε!';
            opts.needsAttention ? alert(message) : console.log(message);
            return console.log('');
        };
        _trelos.sayKalispera = function () {
            var audio = document.querySelector('audio');
            audio.play();
        };
        return _trelos;
    }

    if (typeof window.kostasotrelos0 === 'undefined') {
        window.kostasotrelos0 = kostasotrelos0();
        console.log('[!] Kostasotrelos0 was loaded!');
	}
	
	function anastasia(){
		let anastasia = document.createElement('DIV');
		anastasia.style.display = "none";
		anastasia.innerHTML = `<h3>Bonus Kalispera!</h3><iframe width="560" height="315" src="https://www.youtube.com/embed/_k32P-M0AsY" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen=""></iframe>`;
		document.querySelector('body').appendChild(anastasia);
		return function() {
			anastasia.style.display = "block";
		}
	}

	if (typeof window.anastasia === 'undefined') {
        window.anastasia = anastasia();
        console.log('[!] Anastasia was loaded!');
	}
})(window);
