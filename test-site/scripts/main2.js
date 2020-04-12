let myImage = document.querySelector('img');

myImage.onclick = function() {
    let mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/img1.jpg') {
      myImage.setAttribute('src', 'images/erth.png');
    } else {
      myImage.setAttribute('src', 'images/img1.jpg');
    }
}
