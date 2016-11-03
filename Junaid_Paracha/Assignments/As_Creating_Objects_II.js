function Vehicle(name, numWheels, numPassengers, speed){
	var distance_travelled = 0;
	var privateMethod = function() {
		console.log(speed);
		console.log(distance_travelled);
		distance_travelled += speed;
    	console.log("You have travled" + distance_travelled);
    }
	this.getdistance_travelled= function(){
	    privateMethod();
	    return distance_travelled;
	}
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;
	this.speed = speed;
	this.description = function(){
		console.log('This is a '+ this.name + '. It has '+ this.numWheels +' wheels and you can seat up to '+ this.numPassengers + ' passangers.');
		return this;
	}
	this.topSpeed = function(){
		console.log('Vehicle has a topspeed of '+this.speed);
		return this;
	}
}
Vehicle.prototype.noise = function(noise){
	console.log('Vehicle makes a '+noise+' noise');
	return this;
}
var truck= new Vehicle('Toyota', 4, 6, 10);
var bike = new Vehicle('Bike', 2, 1, 100);
var sedan= new Vehicle('Sedan', 4, 6, 120);
var bus= new Vehicle('Bus', 18, 100, 80);
bus.pickupPassengers = function(newPassengers){
  bus.numPassengers += newPassengers;
}


bike.description().noise('RingRing').topSpeed();
bike.getdistance_travelled();
bike.getdistance_travelled();
bike.getdistance_travelled();
bike.getdistance_travelled();
truck.description().noise('Vroom').topSpeed();
sedan.description().noise('Honkhonk').topSpeed();
bus.description().noise('Honkhonk').topSpeed();
bus.pickupPassengers(20);
