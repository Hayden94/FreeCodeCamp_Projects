$(document).ready(function(){
  var randomQuote;
  var randomAuthor;
  var randomNum;
  getQuote();
  
  function getQuote(){
   var quote = ["May the Force be with you.", "You talking to me?", "E.T. phone home.", "There's no place like home.", "If you build it, he will come.", "I see dead people.", "Houston, we have a problem.", "Keep your friends close, but your enemies closer.", "Elementary, my dear Watson.", "Carpe diem. Seize the day, boys. Make your lives extraordinary.", "Hasta la vista, baby.", "Here's Johnny!", "Say 'hello' to my little friend!", "Show me the money!", "Bond. James Bond.", "Toga! Toga!", "A boy's best friend is his mother.", "There's no crying in baseball!"];
   var author = ["-Star Wars", "-Taxi Driver", "-E.T.", "-The Wizard of OZ", "-The Field of Dreams", "-The Sixth Sense", "-Apollo 13", "-The Godfather II", "-The Adventures of Sherlock Holmes", "-Dead Poets Society", "-Terminator 2: Judgement Day", "-The Shining", "-Scarface", "-Jerry Maguire", "-James Bond Series", "-Nation Lampoon's Animal House", "-Psycho", "-A League of Their Own"];
    
    randomNum = Math.floor((Math.random()*quote.length));
    randomQuote = quote[randomNum];
    randomAuthor = author[randomNum];
    
    $(".quote").text(randomQuote);
    $(".author").text(randomAuthor);
  }
  
  $("#quote").on('click', function(){
    getQuote();
  });
  
  $("#tweet").on('click', function(){
    window.open("https://twitter.com/intent/tweet?text=" + randomQuote + " " + randomAuthor);
  })
  
});