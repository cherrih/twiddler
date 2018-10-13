/*
 * NOTE: This file generates fake tweet data, and is not intended to be part of your implementation.
 * You can safely leave this file untouched, and confine your changes to index.html.
 */

// set up data structures
window.streams = {};
streams.home = [];
streams.users = {};
streams.users.cheshCat = [];
streams.users.tweedleDeez = [];
streams.users.tweedleDumbledore = [];
streams.users.madHatTrick = [];
streams.users.qu33nee = [];
window.users = Object.keys(streams.users);

// utility function for adding tweets to our data structures
var addTweet = function(newTweet){
  var username = newTweet.user;
  streams.users[username].push(newTweet);
  streams.home.push(newTweet);
};

// utility function
var randomElement = function(array){
  var randomIndex = Math.floor(Math.random() * array.length);
  return array[randomIndex];
};

// random tweet generator
var opening = ['just', 'immediately' , '', '', '', '', 'the Queen of Hearts' ,'ask me how i', 'completely', 'nearly', 'productively', 'efficiently', 'last night i', 'the Caterpillar', 'the Duchess', 'Alice', 'the White Rabbit', 'the March Hare', 'the Mock Turtle', 'drastically'];
var verbs = ['followed', 'created', 'designed', 'prophecized', 'built', 'invented', 'experienced', 'drank', 'found', 'enjoyed', 'examined', 'installed', 'explained', 'delegated', 'automated', 'formulated', 'believed', 'explored', 'encountered'];
var objects = ['my', 'your', 'the', 'a', 'my', 'an entire', 'this', 'that', 'the', 'the big', 'a new form of'];
var nouns = ['fall', 'tea party', 'secret', 'turtle', 'breakfast', 'raven', 'writing desk', 'riddle', 'puzzle', 'belief system', 'security system', 'bad decision', 'future', 'life', 'mind', 'dodo', 'duck', 'queen', 'knave', 'mouse', 'teacup', 'wine', 'imagination'];
var tags = ['#eatme', '#imlate' ,'#curiouserandcuriouser', '#drinkme', '#followthewhiterabbit', 'for real', '#wereallmadhere', '#takesomemoretea', '#offwithherhead', '#downtherabbithole', '', '', '', '', '#itsalwaysteatime', '#bonkers', '#that\'s logic'];

var randomMessage = function(){
  return [randomElement(opening), randomElement(verbs), randomElement(objects), randomElement(nouns), randomElement(tags)].join(' ');
};

// generate random tweets on a random schedule
var generateRandomTweet = function(){
  var tweet = {};
  tweet.user = randomElement(users);
  tweet.message = randomMessage();
  tweet.created_at = new Date();
  addTweet(tweet);
};

for(var i = 0; i < 10; i++){
  generateRandomTweet();
}

var scheduleNextTweet = function(){
  generateRandomTweet();
  setTimeout(scheduleNextTweet, Math.random() * 1500);
};
scheduleNextTweet();

// utility function for letting students add "write a tweet" functionality
// (note: not used by the rest of this file.)
var writeTweet = function(message){
  if(!visitor){
    throw new Error('set the global visitor property!');
  }
  var tweet = {};
  tweet.user = visitor;
  tweet.message = message;
  addTweet(tweet);
};
