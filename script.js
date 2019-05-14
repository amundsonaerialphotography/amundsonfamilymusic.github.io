var slideNumber;
var maxSlides = 4;




function facebook() {
  fbpmt.style.display = "block";
}

function close1() {
  fbpmt.style.display = "none";
}

function open1() {
  open('https://www.facebook.com/amundsonfamilymusic/');
}

function open2() {
  open('fb://profile/1158558627502187');
}

function open3() {
  open('fb://profile/1158558627502187');
}



window.onload = function () {
  //alert("My apologies, but my website isn't done yet.  Nevertheless, feel free to look around!");

  mainContent.style.display = "none";
  //landingPage.style.display = "none";
  document.body.style.backgroundImage = "none";
  
  tools.style.display = "none";

  //slideNumber = 4;
  //showslide1();
  //nextSlide();
  //auto();
  //alert("good");
}

//____________________________________________________________

function auto() {
  setTimeout(nextSlide, 5000);
  setTimeout(auto, 5000);
}



function showslide1() {
  slide_one.style.display = "inline";
  slide_two.style.display = "none";
  slide_three.style.display = "none";
  slide_four.style.display = "none";
}

function showslide2() {
  slide_one.style.display = "none";
  slide_two.style.display = "inline";
  slide_three.style.display = "none";
  slide_four.style.display = "none";
}

function showslide3() {
  slide_one.style.display = "none";
  slide_two.style.display = "none";
  slide_three.style.display = "inline";
  slide_four.style.display = "none";
}

function showslide4() {
  slide_one.style.display = "none";
  slide_two.style.display = "none";
  slide_three.style.display = "none";
  slide_four.style.display = "inline";
}





function nextSlide() {

document.getElementById("nothing2").innerHTML = "swiched slide";

  if (slideNumber > (maxSlides - 1)) {
    slideNumber = 1;
    document.getElementById("nothing2").innerHTML = "went back to slide one";
    refresh();
    showslide1();
  }else {
    slideNumber++;
    refresh();
  }

  //____________________________________________________________

  if (slideNumber == 1) {
    showslide1();
  } else {
    if (slideNumber == 2) {
      showslide2();
    } else {
      if (slideNumber == 3) {
        showslide3();
      } else {
        if (slideNumber == 4) {
          showslide4();
        } else {
          alert("I give up!");
        }
      }
    }
  }

  //____________________________________________________________



}


















function prevSlide() {

document.getElementById("nothing2").innerHTML = "swiched slide";

  if (slideNumber < 2) {
    slideNumber = 4;
    document.getElementById("nothing2").innerHTML = "went back to slide three";
    refresh();
    showslide4();
  }else {
    slideNumber--;
    refresh();
  }

  //____________________________________________________________

  if (slideNumber == 1) {
    showslide1();
  } else {
    if (slideNumber == 2) {
      showslide2();
    } else {
      if (slideNumber == 3) {
        showslide3();
      } else {
        if (slideNumber == 4) {
          showslide4();
        } else {
          alert("I give up!");
        }
      }
    }
  }

  //____________________________________________________________



}

function refresh() {
  document.getElementById("nothing").innerHTML = slideNumber;
}




//____________________________________________________________
