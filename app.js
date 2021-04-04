const heading = document.querySelector('#title');
const JA = document.querySelector('#JA');
const JA2 = document.querySelector('#JA2');
// const JA3 = document.querySelector('#JA3');
// const JA3Summary =document.querySelector('#JA3Summary');
const VTMB = document.querySelector('#VTMB');
const VTMBSummary =document.querySelector('#VTMBSummary');
const rating = document.querySelector('#rating');
const myDIV1 = document.querySelector('#myDIV1');
const content1 = document.querySelector('#content1');
const myDIV2 = document.querySelector('#myDIV2');
const content2 = document.querySelector('#content2');
const myDIV3 = document.querySelector('#myDIV3');
const content3 = document.querySelector('#content3');



//const image = document.querySelector('#image');


const headingC = document.querySelector('#titleC');

// GET "";
// GET "https://api.rawg.io/api/games?key=YOUR_API_KEY&dates=2019-09-01,2019-09-30&platforms=18,1,7"


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
          var response = xhttp.responseText;
        var data = JSON.parse(this.responseText);
        // console.log(data);
         JA.textContent = data.results[0].games[0].name;
      // JASummary.textContent = data[0].summary;
      JA2.textContent = data.results[0].games[3].name;
      // JA2Summary.textContent = data[1].summary;
      VTMB.textContent = data.results[0].games[5].name;









      
        // imageO.setAttribute("src","https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg");
        image.setAttribute("src","https://media.rawg.io/media/games/84d/84da2ac3fdfc6507807a1808595afb12.jpg");
        image1.setAttribute("src","https://media.rawg.io/media/games/b45/b45575f34285f2c4479c9a5f719d972e.jpg");
        image2.setAttribute("src","https://media.rawg.io/media/games/8d6/8d69eb6c32ed6acfd75f82d532144993.jpg");
        image01.setAttribute("src","https://media.rawg.io/media/games/3c8/3c872330c4e9966a5a06c1371525e760.jpg ");
        image02.setAttribute("src","https://media.rawg.io/media/games/eec/eeccbd9e91dd1696ddb1dffef99aec72.jpg");
        image03.setAttribute("src","https://media.rawg.io/media/screenshots/615/615351a9565d1c4ae1f39d053b1614d4.jpg");
        image04.setAttribute("src","https://media.rawg.io/media/games/826/82626e2d7ee7d96656fb9838c2ef7302.jpg");
        image001.setAttribute("src","https://media.rawg.io/media/games/360/360f00cbb4b4364b9af0e7ff8e397b65.jpg");
        image002.setAttribute("src","https://media.rawg.io/media/games/91c/91c4f377c1e09755b60a0102c5252843.jpg");

    }
};
xhttp.open("GET", "https://api.rawg.io/api/platforms?key=dc550937ae294c67aad26f5852de34db", true);

xhttp.send();

      // Scrolling Effect

      $(window).on("scroll", function() {
            if($(window).scrollTop()) {
                  $('nav').addClass('black');
            }

            else {
                  $('nav').removeClass('black');
            }
      })




      function myFunction1() {
            var x = document.getElementById("myDIV1");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

          function myFunction1() {
            var y = document.getElementById("content1");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
              
            }
          }
          

          
      function myFunction2() {
            var x = document.getElementById("myDIV2");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }

          function myFunction2() {
            var y = document.getElementById("content2");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
            }
          }

          
      function myFunction3() {
            var x = document.getElementById("myDIV3");
            if (x.style.display === "block") {
              x.style.display = "none";
            } else {
              x.style.display = "block";
            }
          }
          function myFunction3() {
            var y = document.getElementById("content3");
            if (y.style.display === "block") {
              y.style.display = "none";
            } else {
              y.style.display = "block";
            }  
          }

