/*eslint-env browser*/
var BigFont = document.getElementById('big');
BigFont.onclick = function () {
    'use strict';
    document.getElementById('article').style.fontSize = '7vmin';
};

var MediumFont = document.getElementById('medium');
MediumFont.onclick = function () {
    'use strict';
    document.getElementById('article').style.fontSize = '5vmin';
};

var SmallFont = document.getElementById('small');
SmallFont.onclick = function () {
    'use strict';
    document.getElementById('article').style.fontSize = '3vmin';
};
