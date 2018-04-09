//LINE BOT TOKEN
var CHANNEL_ACCESS_TOKEN = 'Vz9QxrSb9jqYFB7yLI6tZyokugeQlglbBICsabL0E7wXPVkItJmuqqrD+eFVQOTn+Ra3UMzUSwVsPZXr/wvXstdjgQsEp6gSRLkKxoaAEYHHbqFmjMoDX6NmYGPL2xiu1N0jF0cy+Brr62Mh8RL/7gdB04t89/1O/w1cDnyilFU=';

var header = {
    'Content-Type': 'application/json; charset=UTF-8',
    'Authorization': 'Bearer ' + CHANNEL_ACCESS_TOKEN,
  };

//-----------------------------------------------------------------------

function doGet(e) {
  return ContentService.createTextOutput("API is running.");
}

function doPost(request) {
  //////////////////////////////
  console.log("-----START-----");
  var jsonString = request.postData.getDataAsString();
  var jsonData = JSON.parse(jsonString);  
  var failureUID = [];  
  
  for (var z=0; z<jsonData.UID_List.length; z++) {
    var UID = jsonData.UID_List[z];
    try{
      sendMessage (jsonData.message_List, UID);
    } catch (e) {
      failureUID.push(UID);
    }
  }
  //////////////////////////////
  console.log(failureUID);
  console.log("------END------");
  if (failureUID.length > 0)
  {
    return ContentService.createTextOutput(failureUID);
  } else
  {
    return ContentService.createTextOutput("All Success");
  }
}

function sendMessage (message_List, UID) {
  
  var messages = [];
  
 for (var i=0; i<message_List.length; i++)
  {
    sentence = {"type": "text","text": message_List[i]}
    messages.push(sentence);
  };

 var data = {
   "to": UID,
   "messages": messages,
 };
  
 var options = {
   'headers': header,
   'method' : 'POST',
   'payload' : JSON.stringify(data),
 };
  
 UrlFetchApp.fetch('https://api.line.me/v2/bot/message/push', options);
}