 
 var config = {
    apiKey: "AIzaSyBqG2dBEr8voXMA_yKKK6MZkUUxA9WoBJ4",
    authDomain: "trainhw-18cf1.firebaseapp.com",
    databaseURL: "https://trainhw-18cf1.firebaseio.com",
    projectId: "trainhw-18cf1",
    storageBucket: "",
    messagingSenderId: "884262154975"
  };

  firebase.initializeApp(config);

  var trainDatabase = firebase.database();

  $("#addTrainBtn").on("click",function(){
  		var trainName = $("#trainNameInput").val().trim();
  		var destination = $("#destinationInput").val().trim();
  		var firstTrain = moment($("#firstTrainInput").val().trim(),"HH:mm").subtract(10,"years").format("X");
  		var frequency = $("#frequencyInput").val().trim();
  	
  	var newtrain = {
  			name: trainName,
  			destination: destination,
  			firstTrain: firstTrain,
  			frequency: frequency
  	}
console.log(newtrain); 
  	trainDatabase.ref().push(newtrain);

  	prompt("New Train Added");

  	$("trainNameInput").val("");
  	$("destinationInput").val("");
  	$("firstTrainInput").val("");
  	$("frequencyInput").val("");
		
	  		
  });