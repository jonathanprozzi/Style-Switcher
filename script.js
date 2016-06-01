(function () {

    console.log('initial element: ' + styleType);
    var redButton = document.getElementById('red-button');
    var blueButton = document.getElementById('blue-button');
    var greenButton = document.getElementById('green-button');
    var resetButton = document.getElementById('reset-button');

    var resetShift = function () {
        var allEle = document.getElementsByTagName("*");

        for (var i = 0; i < allEle.length; i++) {
            if (allEle[i].classList.contains("redify")) {
                allEle[i].classList.remove("redify")
            };
            if (allEle[i].classList.contains("greenify")) {
                allEle[i].classList.remove("greenify")
            };
            if (allEle[i].classList.contains("blueify")) {
                allEle[i].classList.remove("blueify")
            };
        }
    }

    var redShift = function () {
        var styleType = document.getElementById('styleType').value;
        console.log('red has been clicked');
        console.log('the current element is: ' + styleType);
        console.log(styleType);
        var styleEle = document.getElementsByTagName(styleType);
        console.log(styleEle.length);

        for (var i = 0; i < styleEle.length; i++) {
            console.log('im element of ' + styleType + ' number ' + i);
            console.log('appending red to ...' + styleEle[i]);

            if (styleEle[i].classList.contains("greenify")) {
                styleEle[i].classList.remove("greenify");
            };

            if (styleEle[i].classList.contains("blueify")) {
                styleEle[i].classList.remove("blueify");
            };

            styleEle[i].className += " redify";
        };
    }

    var greenShift = function () {
        var styleType = document.getElementById('styleType').value;
        console.log('green has been clicked');
        console.log('the current element is: ' + styleType);
        console.log(styleType);
        var styleEle = document.getElementsByTagName(styleType);
        console.log(styleEle.length);

        for (var i = 0; i < styleEle.length; i++) {
            console.log('im element of ' + styleType + ' number ' + i);
            console.log('appending green to ...' + styleEle[i]);

            if (styleEle[i].classList.contains("redify")) {
                styleEle[i].classList.remove("redify");
            };

            if (styleEle[i].classList.contains("blueify")) {
                styleEle[i].classList.remove("blueify");
            };

            styleEle[i].className += " greenify";
        }
    }

    var blueShift = function () {
        var styleType = document.getElementById('styleType').value;
        console.log('red has been clicked');
        console.log('the current element is: ' + styleType);
        console.log(styleType);
        var styleEle = document.getElementsByTagName(styleType);
        console.log(styleEle.length);

        for (var i = 0; i < styleEle.length; i++) {
            console.log('im element of ' + styleType + ' number ' + i);
            console.log('appending blue to ...' + styleEle[i]);

            if (styleEle[i].classList.contains("greenify")) {
                styleEle[i].classList.remove("greenify");
            };

            if (styleEle[i].classList.contains("redify")) {
                styleEle[i].classList.remove("redify");
            };

            styleEle[i].className += " blueify";
        }
    }


    redButton.addEventListener('click', redShift, false);
    greenButton.addEventListener('click', greenShift, false);
    blueButton.addEventListener('click', blueShift, false);
    resetButton.addEventListener('click', resetShift, false);

})();
