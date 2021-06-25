let track;
var timer;
var startTime;
var min,sec,msec;

document.getElementById('start').onclick = function(){
    //Starting Game with shiffling matrix elements
    var arr = shuffleArray([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22,23,24,25]);
    var cells = document.getElementsByTagName('td');
    for(var i=0;i<cells.length;i++)
    cells[i].innerHTML = arr[i];
    track=1;

    document.getElementById('current').innerHTML = track;
    document.getElementById('current').style.margin='10px';
    document.getElementById('current').style.display ='inline-block';
    document.getElementById('current').style.backgroundColor = 'black';
    document.getElementById('current').style.color = 'white';
    document.getElementById('current').style.fontSize = '30px';
    document.getElementById('current').style.height = '40px';
    document.getElementById('current').style.width = '30px';
    document.getElementById('current').style.padding = '10px';
    document.getElementById('current').style.textAlign = 'center';
    //Timer started
     timer = window.setInterval(timerStart,10);
    startTime = new Date().getTime(); 
}


//Timer Function
function timerStart(){
    var now = new Date().getTime();     
    msec = now-startTime;
    // console.log( Math.floor((now-startTime)/1000) + " : " +  Math.floor((now-startTime)/100 ));
    var time = new Date().getTime() - startTime;
    document.getElementById('timer').innerHTML =  timeString(Math.floor((time/60000)%60),2) + " : " + timeString(Math.floor((time/1000)%60),2) + " : " +  timeString(Math.floor(time%1000),3);
}


$(document).ready(function(){
    $("table td").click(function() {


        if(this.innerHTML == String(track)){
            if(track == 25){
                window.clearInterval(timer);
                return;
            }
            track++;
            document.getElementById('current').innerHTML = track;
            
        }
        

        var column_num = parseInt( $(this).index() ) + 1;
        var row_num = parseInt( $(this).parent().index() )+1;
    });
});


function shuffleArray(array) {
    let curId = array.length;
    // There remain elements to shuffle
    while (0 !== curId) {
      // Pick a remaining element
      let randId = Math.floor(Math.random() * curId);
      curId -= 1;
      // Swap it with the current element.
      let tmp = array[curId];
      array[curId] = array[randId];
      array[randId] = tmp;
    }
    return array;
  }

  function timeString(a,b){
      a+='';
      
      if(a.length ==b ) return a;
      var s = '';
      for(var i=0;i<b-a.length;i++)
      s +='0';
      return s +a;
  }
