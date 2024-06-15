console.log("web is running....")
document.querySelector('.cross').style.display = "none";
document.querySelector('.hamburger').addEventListener('click', () => {
    document.querySelector('.sidebar').classList.toggle('sidebarGo');
    if (document.querySelector('.sidebar').classList.contains('sidebarGo')) {
        document.querySelector('.ham').style.display = 'inline'
        document.querySelector('.cross').style.display = 'none'
    }
    else {
        document.querySelector('.ham').style.display = 'none'
        setTimeout(() => {
            document.querySelector('.cross').style.display = 'inline'
        }, 250)
    }
})
document.querySelector('#btn1').addEventListener('click', () => {
    document.querySelector('.hide_html').classList.remove('hide_html');
    document.querySelector('#btnHtml').classList.remove('hide_html');
    document.querySelector('#btn1').classList.add('hide_html');

    // console.log("button is pressed")
})
document.querySelector('#btnHtml').addEventListener('click', () => {
    document.querySelector('#hide_p').classList.add('hide_html');
    document.querySelector('#btnHtml').classList.add('hide_html');
    document.querySelector('#btn1').classList.remove('hide_html')
})
//#btn2
document.querySelector('#btn2').addEventListener('click', () => {
    document.querySelector('.hide_html1').classList.remove('hide_html1');
    document.querySelector('#btnHtml1').classList.remove('hide_html1');
    document.querySelector('#btn2').classList.add('hide_html1');

    // console.log("button is pressed")
})
document.querySelector('#btnHtml1').addEventListener('click', () => {
    document.querySelector('#hide_p1').classList.add('hide_html1');
    document.querySelector('#btnHtml1').classList.add('hide_html1');
    document.querySelector('#btn2').classList.remove('hide_html1')
})
//#btn3
document.querySelector('#btn3').addEventListener('click', () => {
    document.querySelector('.hide_html2').classList.remove('hide_html2');
    document.querySelector('#btnHtml2').classList.remove('hide_html2');
    document.querySelector('#btn3').classList.add('hide_html2');

    // console.log("button is pressed")
})
document.querySelector('#btnHtml2').addEventListener('click', () => {
    document.querySelector('#hide_p2').classList.add('hide_html2');
    document.querySelector('#btnHtml2').classList.add('hide_html2');
    document.querySelector('#btn3').classList.remove('hide_html2')
})
//#btn4
document.querySelector('#btn4').addEventListener('click', () => {
    document.querySelector('.image6').classList.remove('hide_image');
    document.querySelector('.gallery').classList.remove('hide_html3');
    document.querySelector('.galleryp').classList.remove('hide_html3');
    document.querySelector('#btnHtml3').classList.remove('hide_html3');
    document.querySelector('#btn4').classList.add('hide_html3');
    document.querySelector('.image').classList.remove('hide_image');
    document.querySelector('.image1').classList.remove('hide_image');
    document.querySelector('.image2').classList.remove('hide_image');
    document.querySelector('.image3').classList.remove('hide_image');
    document.querySelector('.image4').classList.remove('hide_image');
    document.querySelector('.image5').classList.remove('hide_image');
    document.querySelector('.imagep').classList.remove('hide_image');
    document.querySelector('.imagep1').classList.remove('hide_image');
    document.querySelector('.imagep2').classList.remove('hide_image');
    document.querySelector('.imagep3').classList.remove('hide_image');
    document.querySelector('.imagep4').classList.remove('hide_image');
    document.querySelector('.imagep5').classList.remove('hide_image');
    document.querySelector('.imagep6').classList.remove('hide_image');
    document.querySelector('.imagep7').classList.remove('hide_image');
    document.querySelector('.imagep8').classList.remove('hide_image');
})
document.querySelector('#btnHtml3').addEventListener('click', function () {
    document.querySelector('#btn4').classList.remove('hide_html3');
    document.querySelector('#btnHtml3').classList.add('hide_html3');
    document.querySelector('.galleryp').classList.add('hide_html3');
    document.querySelector('.image').classList.add('hide_image');
    document.querySelector('.image1').classList.add('hide_image');
    document.querySelector('.image2').classList.add('hide_image');
    document.querySelector('.image3').classList.add('hide_image');
    document.querySelector('.image4').classList.add('hide_image');
    document.querySelector('.image5').classList.add('hide_image');
    document.querySelector('.image6').classList.add('hide_image');
    document.querySelector('.gallery').classList.add('hide_html3');
    document.querySelector('.imagep').classList.add('hide_image');
    document.querySelector('.imagep1').classList.add('hide_image');
    document.querySelector('.imagep2').classList.add('hide_image');
    document.querySelector('.imagep3').classList.add('hide_image');
    document.querySelector('.imagep4').classList.add('hide_image');
    document.querySelector('.imagep5').classList.add('hide_image');
    document.querySelector('.imagep6').classList.add('hide_image');
    document.querySelector('.imagep7').classList.add('hide_image');
    document.querySelector('.imagep8').classList.add('hide_image');
})
document.querySelector('.symbol').addEventListener('mouseover', () => {

});


