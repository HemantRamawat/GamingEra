const JAO = document.querySelector('#JAO');
const JAO1 = document.querySelector('#JAO1');
const JAO2 = document.querySelector('#JAO2');
const JAO3 = document.querySelector('#JAO3');
const JAO4 = document.querySelector('#JAO4');
const JAO5 = document.querySelector('#JAO5');
const JAO6 = document.querySelector('#JAO6');
const JAO7 = document.querySelector('#JAO7');
const JAO8 = document.querySelector('#JAO8');
const R0 = document.querySelector('#R0');
const R1 = document.querySelector('#R1');
const R2 = document.querySelector('#R2');
const R3 = document.querySelector('#R3');
const R4 = document.querySelector('#R4');
const R5 = document.querySelector('#R5');
const R6 = document.querySelector('#R6');
const R7 = document.querySelector('#R7');
const R8 = document.querySelector('#R8');
const R00 = document.querySelector('#R00');
const R01 = document.querySelector('#R01');
const R02 = document.querySelector('#R02');
const R03 = document.querySelector('#R03');
const R04 = document.querySelector('#R04');
const R05 = document.querySelector('#R05');
const R06 = document.querySelector('#R06');
const R07 = document.querySelector('#R07');
const R08 = document.querySelector('#R08');


var xhttp = new XMLHttpRequest();
xhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {

          var response = xhttp.responseText;
        var data1 = JSON.parse(this.responseText);
        console.log(data1);
        console.log();
           JAO.textContent = data1.results[0].name;
        //    console.log(JAO);
           JAO1.textContent = data1.results[1].name;
        //    console.log(JAO);
           JAO2.textContent = data1.results[2].name;
           JAO3.textContent = data1.results[3].name;
           JAO4.textContent = data1.results[4].name;
           JAO5.textContent = data1.results[5].name;
           JAO6.textContent = data1.results[6].name;
           JAO7.textContent = data1.results[7].name;
           JAO8.textContent = data1.results[8].name;

              R0.textContent = data1.results[0].platforms[0].platform.name;
              R00.textContent = data1.results[0].platforms[0].released_at;
              // console.log(R00);
              R1.textContent = data1.results[1].platforms[0].platform.name;
              R01.textContent = data1.results[1].platforms[0].released_at;
              // console.log(R01);
              R2.textContent = data1.results[2].platforms[0].platform.name;
              R02.textContent = data1.results[2].platforms[0].released_at;
              R3.textContent = data1.results[3].platforms[0].platform.name;
              R03.textContent = data1.results[3].platforms[0].released_at;
              R4.textContent = data1.results[4].platforms[0].platform.name;
              R04.textContent = data1.results[4].platforms[0].released_at;
              R5.textContent = data1.results[5].platforms[0].platform.name;
              R05.textContent = data1.results[5].platforms[0].released_at;
              R6.textContent = data1.results[6].platforms[0].platform.name;
              R06.textContent = data1.results[6].platforms[0].released_at;
              R7.textContent = data1.results[7].platforms[0].platform.name;
              R07.textContent = data1.results[7].platforms[0].released_at;
              R8.textContent = data1.results[8].platforms[0].platform.name;
              R08.textContent = data1.results[8].platforms[0].released_at;

              // R1.textContent = data1.results[7].name;
              // R2.textContent = data1.results[7].name;
              // R3.textContent = data1.results[7].name;
              // R4.textContent = data1.results[7].name;
              // R5.textContent = data1.results[7].name;
              // R6.textContent = data1.results[7].name;
              // R7.textContent = data1.results[7].name;
              // R8.textContent = data1.results[7].name;

          




      imageO.setAttribute("src","https://media.rawg.io/media/games/1bb/1bb86c35ffa3eb0d299b01a7c65bf908.jpg");
      imageO1.setAttribute("src","https://media.rawg.io/media/screenshots/b47/b47cf651fd0db9abc036c041a9c56780.jpg");
      imageO2.setAttribute("src","https://media.rawg.io/media/games/511/5118aff5091cb3efec399c808f8c598f.jpg");
      imageO01.setAttribute("src","https://media.rawg.io/media/games/1ad/1ad3737af2c4a4ff8e7f5540b5dcade8.jpg ");
      imageO02.setAttribute("src","https://media.rawg.io/media/games/bd7/bd7cfccfececba1ec2b97a120a40373f.jpg");
      imageO03.setAttribute("src","https://media.rawg.io/media/games/b50/b501727147644474562935f19a60134e.jpg");
      imageO04.setAttribute("src","https://media.rawg.io/media/games/a57/a57e3c73ca46cbf55b526c828e3545c0.jpg");
      imageO001.setAttribute("src","https://media.rawg.io/media/games/72e/72e0e063c817e90c696b2da3ea78abaa.jpg");
      imageO002.setAttribute("src","https://media.rawg.io/media/screenshots/da2/da254988b3f474dbb5d8312263414096.jpg");

    }
};

xhttp.open("GET", "https://api.rawg.io/api/games/grand-theft-auto-v/suggested?page_size=5?key=dc550937ae294c67aad26f5852de34db", true);

xhttp.send();