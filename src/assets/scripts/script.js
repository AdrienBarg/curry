function hideFrost() {
    var container = document.getElementsByClassName('frost-container');
            for (var i=0; i < container.length; i++) {
                container[i].style.visibility='hidden';
            };
};


var mapArea = document.getElementsByClassName('map-area');

for (var i=0; i < mapArea.length; i++) {
        
        mapArea[i].onmouseover = function() {
            document.getElementById('map').src='./assets/images/'+ this.id +'-cut-min.png';
        };
        mapArea[i].onmouseout = function() {
            document.getElementById('map').src='./assets/images/0s.png';
        };
        mapArea[i].onclick = function() {
            hideFrost();
            document.getElementById('frost-'+ this.id).style.visibility='visible';
        };
};


var close = document.getElementsByClassName('close');
for (var i=0; i < close.length; i++) {
    close[i].onclick = function() { 
        hideFrost();
    } 
};

$('img[usemap]').rwdImageMaps();