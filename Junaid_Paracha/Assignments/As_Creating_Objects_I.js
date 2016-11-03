// function VehicleConstructor(name, num_wheels, num_passengers){
// 	var vehicle = {};
// 	vehicle.name = name;
// 	vehicle.num_wheels = num_wheels;
// 	vehicle.num_passengers = num_passengers;

// 	vehicle.description = function(){
// 		console.log('This is a '+ vehicle.name + '. It has '+ vehicle.num_wheels +' wheels and you can seat up to '+ vehicle.num_passengers + ' passangers.');
// 		return this;
// 	}
// 	return vehicle;
// }

// var Car = VehicleConstructor('Toyota', 4, 6);
// // Car.description();
// Car.noise = function(noise){
// 	console.log('Vehicle makes a '+noise+' noise');
// 	return this;
// }
// console.log(Car.description().noise('vroom'))

function Vehicle(name, numWheels, numPassengers){
	this.name = name;
	this.numWheels = numWheels;
	this.numPassengers = numPassengers;

	this.description = function(){
		console.log('This is a '+ this.name + '. It has '+ this.numWheels +' wheels and you can seat up to '+ this.numPassengers + ' passangers.');
		return this;
	}
}
Vehicle.prototype.noise = function(noise){
	console.log('Vehicle makes a '+noise+' noise');
	return this;
}

var truck= new Vehicle('Toyota', 4, 6);
var bike = new Vehicle('Bike', 2, 1);
var sedan= new Vehicle('Sedan', 4, 6);
var bus= new Vehicle('Bus', 18, 100);
bus.pickupPassengers = function(newPassengers){
  bus.numPassengers += newPassengers;
}


bike.description().noise('RingRing');
truck.description().noise('Vroom');
sedan.description().noise('Honkhonk');
bus.description().noise('Honkhonk');
bus.pickupPassengers(20);
bus.description().noise('Honkhonk');
bus.pickupPassengers(20);
bus.description().noise('Honkhonk');



// Ans from the track///////////////////////////////////////////////////////
/* Vehicle Constructor declares an initial variable, vehicle as an object.
  public properties that can be set:
    name, wheels, passengersNumber
  public method:
    makeNoise
  returns vehicle.
*/

// function VehicleConstructor(name, wheels, passengerNumber){
//   var vehicle = {};
// /*
//   Properties
// */
//   vehicle.name = name || "unicycle";
//   vehicle.wheels = wheels || 1;
//   vehicle.passengerNumber = passengerNumber || 0;
//   /*
//     methods
//   */
//   vehicle.makeNoise = function(noise){
//     var noise = noise || "Honk Honk";
//     console.log(noise)
//   }
//   /*
//   return
//   */
//   return vehicle;
// }

// var unicycle = VehicleConstructor();

// var bike = VehicleConstructor("bicycle", 2, 0);
// bike.makeNoise = function(){
//   console.log('ring, ring');
// }
// // or simply: bike.makenoise("ring, ring");
// var sedan = VehicleConstructor("sedan", 4, 4);
// sedan.makeNoise = function(){
//   console.log('Honk Honk');
// }

// var bus = VehicleConstructor('bus',6, 0);
// bus.pickupPassengers = function(newPassengers){
//   bus.passengerNumber += newPassengers;
// }

// console.log(bus.passengerNumber);
// bus.pickupPassengers(6);
// console.log(bus.passengerNumber);