const MyHeading = document.querySelector('h1');
MyHeading.textContent = 'google is very cool';

let a = 9;
console.log(a*2);

let Myimage = document.querySelector('img')
Myimage.onclick = function() {
    let mySrc = Myimage.getAttribute('src');
    if(mySrc === 'images/firefox-icon.png') {
        Myimage.setAttribute('src', 'images/gl-icon.png');
    } else {
        Myimage.setAttribute('src', 'images/firefox-icon.png');
    }
}