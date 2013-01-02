var http = require('http');
var aRandom = require('./random.js');

var arguments = process.argv.splice(2);

if(arguments < 2){
  console.log("Sintax: node contest.js meetup_api_key event_id")
  process.exit(1);
}

//Parsing arguments
var apiKey = arguments[0];
var eventId = arguments[1];

//Composing request url
var path = '/2/rsvps?key='+apiKey+'&sign=true&event_id='+eventId+'&rsvp=yes&order=name&only=member.name';

var options = {
  host: 'api.meetup.com',
  path: path
};



callback = function(response) {
  console.log("Got response: " + response.statusCode);
  var str = '';

  //another chunk of data has been recieved, so append it to `str`
  response.on('data', function (chunk) {
    str += chunk;
  });

  response.on('end',function(){
    var winner;
    var data = JSON.parse(str);
    var participants = data.results;
    var len = participants.length;

    if(len > 0){
      winner = participants[aRandom.generate(len)];
      console.log("Participants:"+len);
      console.log("And the winner is:"+winner.member.name);
    }else{
      console.log("There is no participants");
    }
  });
}

var req = http.request(options, callback);

req.on('error', function(e) {
  console.log('Problem with request: ' + e.message);
});

req.end();