var engine;
var cursor;
var cookieCounter;
var producePS;

makers = function(){

  cookieCounter = 0;
  producePS = 0;

    cursor = {
      price : 15,
      vol : 0,
    };

  var grandma = {
    price : 100,
    vol : 0,
    pps: 0,
  };

  var farm = {
    price : 1100,
    vol : 0,
    pps: 0,
  };

  var bakery = {
    price : 12000,
    vol : 0,
    pps: 0,
  };

  var mine = {
    price : 130000,
    vol : 0,
    pps: 0,
  };
 engine ={

    setCookieCounter: function(value) {
      cookieCounter = value;
    },

    getCookieCounter: function() {
      return cookieCounter;
    },

    incCookieCounter: function(value) {
      cookieCounter += value;
    },

    setproducePS: function(value) {
      producePS = value;
    },

    getproducePS: function() {
      return producePS;
    },

    incproducePS: function(value) {
      producePS += value;
    },

    setCoursorPrice: function(value) {
      coursor.price = value;
    },

    getCoursorPrice: function() {
      return Math.floor(cursor.price);
    },

    setCoursorVol: function(value) {
      cursor.vol = value;
    },

    getCoursorVol: function() {
      return cursor.vol;
    },

    incCursorVol:  function(value) {
      cursor.vol += value;
    },

    incCursorPrice: function(value) {
      cursor.price *= value;
    },



    setGrandmaPrice: function(value) {
      grandma.price = value;
    },

    setGrandmaVol: function(value) {
      grandma.vol = value;
    },
    setGrandmaPPS: function(value){
      grandma.pps = value;
    },

    getGrandmaPrice: function() {
      return Math.floor(grandma.price);
    },

    getGrandmaVol: function() {
      return grandma.vol;
    },

    getGrandmaPPS: function() {
      return grandma.pps;
    },

    incGrandmaPrice: function(value) {
      grandma.price *= value;
    },

    incGrandmaVol: function(value){
      grandma.vol += value;
    },

    incGrandmaPPS: function(value) {
      grandma.pps += value;
    },



    setFarmPrice:function(value) {
      farm.price = value;
    },

    setFarmVol: function(value) {
      farm.vol = value;
    },

    setFarmPPS: function(value) {
      farm.pps = value;
    },

    getFarmPrice: function() {
      return Math.floor(farm.price);
    },

    getFarmVol: function() {
      return farm.vol;
    },

    getFarmPPS: function() {
      return farm.pps;
    },

    incFarmPrice: function(value) {
      farm.price *= value;
    },

    incFarmVol: function(value) {
      farm.vol += value;
    },

    incFarmPPS: function(value) {
      farm.pps += value;
    },



    setBakeryPrice: function(value) {
      bakery.price = value;
    },

    setBakeryVol: function(value) {
      bakery.vol = value;
    },

    setBakeryPPS: function(value) {
      bakery.pps = value;
    },

    getBakeryPrice: function() {
      return Math.floor(bakery.price);
    },

    getBakeryVol: function() {
      return bakery.vol;
    },

    getBakeryPPS: function() {
      return bakery.pps;
    },

    incBakeryPrice: function(value) {
      bakery.price *= value;
    },

    incBakeryVol: function(value) {
      bakery.vol += value;
    },

    incBakeryPPS: function(value) {
      bakery.pps += value;
    },



    setMinePrice: function(value) {
      mine.price = value;
    },

    setMineVol: function(value) {
      mine.vol = value;
    },

    setMinePPS: function(value) {
      mine.pps = value;
    },

    getMinePrice: function() {
      return Math.floor(mine.price);
    },

    getMineVol: function() {
      return mine.vol;
    },

    getMinePPS: function() {
      return mine.pps;
    },

    incMinePrice: function(value) {
      mine.price *= value;
    },

    incMineVol: function(value) {
      mine.vol += value;
    },

    incMinePPS: function(value) {
      mine.pps += value;
    },


  };
};



makers();
var mainCookie = $('.cookie');
var button = $('.btn');
var amount = $('.amount');
var cookieCounterToView = 0;

var productivityDisplay = $('.productivity');
amount.text(cookieCounterToView);
//var cookieAmountToView = 0;

var cost ={
  cursor: 15,
  grandma: 100,
  farm: 1100,
  bakery: 12000,
  mine: 130000
};
var volume ={
  cursor: 0,
  grandma: 0,
  farm: 0,
  bakery: 0,
  mine: 0
};
var productivity ={
  grandma: 1,
  farm: 8,
  bakery: 47,
  mine: 260
};
var productivityPS ={
  coursor: 0,
  grandma: 0,
  farm: 0,
  bakery: 0,
  mine: 0
};

function shorten(num) {
  if (num < 1000)  {
    return num.toFixed(2);
  }
  if ((num > 999) && (num < 1000000) ) {
    return ((num/1000).toFixed(2) + 'k');
  }
  if(num > 999999) {
    return (num/1000000).toFixed(3) + 'mln';
  }
}

mainCookie.on("click", function () {
  cookieCounterToView++;
  engine.incCookieCounter(1);
  amount.text(shorten(cookieCounterToView));
});

setInterval(function(){
  cookieCounterToView += cursor.vol;
  engine.incCookieCounter(cursor.vol);
  amount.text(shorten(cookieCounterToView));
},10000);

setInterval(function(){
  cookieCounterToView += engine.getproducePS();
  engine.incCookieCounter(engine.getproducePS());
  amount.text(shorten(cookieCounterToView));
}, 1000);



button.on('click', function(){
  var attribute = $(this).attr('data-name');
  var displayAmount =  $(this).parent().parent().children();

  if((engine.getCookieCounter() >= engine.getCoursorPrice()) && ($(this).attr('data-name') === 'cursor')){

    engine.incCookieCounter(- engine.getCoursorPrice());
    cookieCounterToView = engine.getCookieCounter();
    amount.text(shorten(cookieCounterToView));

    engine.incCursorPrice(1.1);
    ($(this).parent().prev('.cost')).text(shorten(engine.getCoursorPrice()));

    engine.incCursorVol(1);
    $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getCoursorVol());
    }

    if((engine.getCookieCounter() >= engine.getGrandmaPrice()) && ($(this).attr('data-name') === 'grandma')) {
        engine.incCookieCounter(- engine.getGrandmaPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incGrandmaPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getGrandmaPrice()));

        engine.incGrandmaVol(1);
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getGrandmaVol());

        engine.incGrandmaPPS(1);
        $(displayAmount).find('div.popup span.pps').text(engine.getGrandmaPPS());

        engine.incproducePS(1);
        productivityDisplay.text(shorten(engine.getproducePS()));
    }

    if((engine.getCookieCounter() >= engine.getFarmPrice()) && ($(this).attr('data-name') === 'farm')) {
        engine.incCookieCounter(- engine.getFarmPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incFarmPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getFarmPrice()));

        engine.incFarmVol(1);
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getFarmVol());

        engine.incFarmPPS(8);
        $(displayAmount).find('div.popup span.pps').text(engine.getFarmPPS());

        engine.incproducePS(8);
        productivityDisplay.text(shorten(engine.getproducePS()));
    }

    if((engine.getCookieCounter() >= engine.getBakeryPrice()) && ($(this).attr('data-name') === 'bakery')) {
        engine.incCookieCounter(- engine.getBakeryPrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incBakeryPrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getBakeryPrice()));

        engine.incBakeryVol(1);
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getBakeryVol());

        engine.incBakeryPPS(47);
        $(displayAmount).find('div.popup span.pps').text(engine.getBakeryPPS());

        engine.incproducePS(47);
        productivityDisplay.text(shorten(engine.getproducePS()));
    }

    if((engine.getCookieCounter() >= engine.getMinePrice()) && ($(this).attr('data-name') === 'mine')) {
        engine.incCookieCounter(- engine.getMinePrice());
        cookieCounterToView = engine.getCookieCounter();
        amount.text(cookieCounterToView);

        engine.incMinePrice(1.1);
        ($(this).parent().prev('.cost')).text(shorten(engine.getMinePrice()));

        engine.incMineVol(1);
        $(displayAmount).find('div.popup span.amountOfMakers').text(engine.getMineVol());

        engine.incMinePPS(260);
        $(displayAmount).find('div.popup span.pps').text(engine.getMinePPS());

        engine.incproducePS(260);
        productivityDisplay.text(shorten(engine.getproducePS()));
    }



});
