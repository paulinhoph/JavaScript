var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/camila.jpg') {
      myImage.setAttribute ('src','imagens/paulo.jpg');
    } else {
      myImage.setAttribute ('src','imagens/camila.jpg');
    }
}
