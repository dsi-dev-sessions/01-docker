var amqp = require('amqp');
 
console.log("Waiting 6 seconds for rabbit mq to come up...");

setTimeout(function() {

	var connection = amqp.createConnection({
		host: process.env['RABBITMQ_HOSTNAME'],
		login: process.env['RABBITMQ_USER'],
		password: process.env['RABBITMQ_PASS']
	});
	 
	connection.on('error', function(e) {
	  console.log("Error from amqp: ", e);
	});
	 
	connection.on('ready', function () {
	  console.log("Connected to RabbitMQ service...");
	  console.log("Queueing in "+process.env['MY_QUEUE']);
	  connection.queue(process.env['MY_QUEUE'], function (q) {

	      q.subscribe(function (message, headers, deliveryInfo, messageObject) {
	        console.log(message.counter);
	      	setTimeout(function() {
		      	connection.publish(process.env['NEXT_QUEUE'], { counter: message.counter+1 });
	      	}, Math.random() * 2000);
	      });

	      // If we are the firestarter, then lets send the first message
	      if(process.env['FIRESTARTER']) {
	      	console.log("I'm a firestarter, twisted firestarter.");
	      	connection.publish(process.env['NEXT_QUEUE'], { counter: 0 });
	      }
	  });
	});
}, 6000);

