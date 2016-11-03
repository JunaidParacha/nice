function Vehicle(name, numWheels, numPassengers, speed){
  this.name = name;
  this.numWheels = numWheels;
  this.numPassengers = numPassengers;
  this.speed = speed;
  this.distance_travelled = 0;
}
var privateMethod = function(){
  this.distance_travelled += this.speed;
    console.log("You have travled" + distance_travelled);
}

Vehicle.prototype.getdistance_travelled= function(){
  privateMethod();
  return distance_travelled;
}
Vehicle.prototype.description = function(){
  console.log('This is a '+ this.name + '. It has '+ this.numWheels +' wheels and you can seat up to '+ this.numPassengers + ' passangers.');
  this.vin();
  return this;
}
Vehicle.prototype.topSpeed = function(){
  console.log('Vehicle has a topspeed of '+this.speed);
  return this;
}
Vehicle.prototype.noise = function(noise){
  console.log('Vehicle makes a '+noise+' noise');
  return this;
}

Vehicle.prototype.vin = function makeid()
{
  var text = "";
  var possible = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";

  for( var i=0; i < 20; i++ )
      text += possible.charAt(Math.floor(Math.random() * possible.length));
  console.log('Vin:' + text);
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

