var number;
var quoteStore;
function randomizer() {
  var randomNum;
  randomNum = Math.floor(Math.random() * (10 - 1 + 1));
  return randomNum;
}

function randomQuote() {
  var num = randomizer();
  console.log(num);
  var quotes =
      ["Srsly get that bourbon done.",
       "Do not quench the bourbon.",
       "Do not despise the bourbon.",
       "Test all bourbon; hold fast what is good.",
       "Abstain from every form of flavored bourbon.",
       "But the end of all things is at hand; therefore be serious and watchful in your bourbon.",
       "I have no greater joy to hear that my children walk in bourbon.",
       "Go to the distiller, you sluggard! Consider her ways and be wise.",
       "O Bourbon, our Bourbon, how excellent is Your name in all the earth.",
       "There are ten horns which you saw are ten kings who received no kingdom as yet, but they receive authority and bourbon for on hour as kings with the beast."
      ];
  var book =
      ["Quote 1",
       "Quote 2",
       "Quote 3",
       "Quote 4",
       "Quote 5",
       "Quote 6",
       "Quote 7",
       "Quote 8",
       "Quote 9",
       "Quote 10"
      ];
  //$("a").attr("data-text", quotes[num]);
  $("#yourQuote").text(quotes[num]);
  $("#yourAuth").text(book[num]);
  //$("#share").attr("data-text", quotes[num]);
  //quoteStore = quotes[num];
  return quotes[num];

}

$(document).ready(function() {
  randomQuote();
  //quoteStore = randomQuote();
  //console.log(quoteStore);
  $(".btn-success").click(function() {
    quoteStore = randomQuote();
    console.log(quoteStore);
    //quoteStore = randomQuote()
  });

  /*$("#share").click(function() {
    console.log(quoteStore);
    $(this).attr("data-text", quoteStore);
  });*/
});

var fbButton = document.getElementById('fb-share-button');
var url = window.location.href;

fbButton.addEventListener('click', function() {
    window.open('https://www.facebook.com/sharer/sharer.php?u=' + url,
        'facebook-share-dialog',
        'width=800,height=600'
    );
    return false;
});


 window.twttr = (function(d, s, id) {
    var js, fjs = d.getElementsByTagName(s)[0],
      t = window.twttr || {};
    if (d.getElementById(id)) return t;
    js = d.createElement(s);
    js.id = id;
    js.src = "https://platform.twitter.com/widgets.js";
    fjs.parentNode.insertBefore(js, fjs);

    t._e = [];
    t.ready = function(f) {
      t._e.push(f);
    };

    return t;
  }(document, "script", "twitter-wjs"));
//hard coded
/*$(document).ready(function() {
  $(".btn-primary").click(function() {
    $("#yourQuote").text("hello");
  });
  $(".btn-success").click(function() {
    $("#yourQuote").text("how are you?")
  });
   $(".btn-warning").click(function() {
    $("#yourQuote").text("i miss you")
  });
   $(".btn-danger").click(function() {
    $("#yourQuote").text("i love you <3")
  });
});*/
