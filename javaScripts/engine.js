var engine;
makers = function(){

  var cookieCounter = 0;
  var producePS = 0;
  var time = 0;

  var cursor = {
      price : 15,
      vol : 1,
      incrementTime : 10,
    };

 engine ={

   /*produkcjanasekunde: function(value){
     producePS += cursor.vol;
   },*/

    setCookieCounter: function(value){
      cookieCounter = value;
    },

    getCookieCounter: function(){
      return cookieCounter;
    },

    incCookieCounter: function(value){
      cookieCounter += value;
    },

    setproducePS: function(value){
      producePS = value;
    },

    getproducePS: function(){
      return producePS;
    },

    incproducePS: function(value){
      producePS += value;
    },

    setCoursorPrice: function(value){
      coursor.price = value;
    },

    getCoursorPrice: function(){
      return Math.floor(cursor.price);
    },

    setCoursorVol: function(value){
      cursor.vol = value;
    },

    getCoursorVol: function(){
      return cursor.vol;
    },

    incCursorVol:  function(value) {
      cursor.vol += value;
    },

    incCursorPrice: function(value) {
      cursor.price *= value;
    },

    /*tyk: function(){
      time++;
      if (time % cursor.incrementTime === 1 ){
          cookieCounter += (cursor.vol);
      }
    }*/


  };
};
