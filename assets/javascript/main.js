var number;
var quoteStore;
function randomizer() {
  var randomNum;
  randomNum = Math.floor(Math.random() * (7 - 1 + 1));
  return randomNum;
}

function randomQuote() {
  var num = randomizer();
  console.log(num);
  var quotes =
      ["You see three artificial moons launched into the night sky. What does this mean for sunrise tomorrow?",
       "A friend reveals that she has access to a set of data that contradict what you know about your company. What is your journey to sharing this info - or not?",
       "A group of heroes collaborates on building an ice-maker to keep the north pole covered in ice. You discover corrupted data that may mean the project will end humanity. Who do you talk to? How do you - as a group - try to save the world?",
       "What if data was a physical body extension, in the same way that hair or nails are?",
       "What if instead of data science we had developed dream science, and used mathematics and technology to capitalise on dreams instead of data?",
       "You’re on jury duty for a Supreme Court case, and an autonomous artificial intelligence is challenging the government’s regulation of speech by demanding the right for freedom of speech. What is your decision? Does speaker humanness matter when it comes to the First Amendment?",
       "What if we lived in a post-modern society where every aspect/detail of our lives was captured, meticulously catalogued, and used to determine how we should live our lives (from the clothing we wear to the number of times we should smile in a day)? What if this was not imposed from outside but rely on an enthusiastic self-improvement drive?"
      ];
  var book =
      ["Prompt 1",
       "Prompt 2",
       "Prompt 3",
       "Prompt 4",
       "Prompt 5",
       "Prompt 6",
       "Prompt 7"
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
