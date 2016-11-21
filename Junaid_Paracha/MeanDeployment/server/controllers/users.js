var mongoose = require('mongoose'),
    Appointment = mongoose.model('Appointment');
    User = mongoose.model('User');

function response_additions(err, data) {
    if (err) {
        this.json({
            error: err
        });
    }
    this.json({
        data
    });
}

function UsersController() {
    var _this = this;
    this.index = function(req, res) {
        User.find({}, function(err, data) {
            res.json(data);
        });
    };
    this.getAppointments = function(req, res) {
        Appointment.find({}, function(err, data) {
            res.json(data);
        });
    };
    this.create = function(req, res) {
        console.log(req.body);
        var newAppointment = new Appointment({
                                                name: req.body.name,
                                                complaint: req.body.complaint,
                                                appointment_date: req.body.date,
                                                appointment_time: req.body.time,
                                              });
        newAppointment.save(function (error) {
          if(error){
              console.log(error);
          }else{
              console.log(res.boby)

            // res.json(res.body);
          }
        })
    }
    // this.update = function(req, res) {
    //     res.json({
    //         future: 'update'
    //     });
    //
    // }
    this.delete = function(req, res) {
      console.log(req.body);
      Appointment.remove({_id: req.params.id }, function(err){
        if(err){
          console.log('Something went wrong creating new');
        }else {
          Appointment.find({}, function(err, appointments){
            console.log(appointments);
            res.json(appointments);
          })
        }
      });

    }
    this.show = function(req, res) {
        res.json({
            future: 'show'
        });
    }

    this.login = function(req, res) {
        User.findOne({
            email: req.body.email
        }, function(err, data) {
            if (err) {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            } else if (data && data.validPassword(req.body.password)) {
                res.json({
                    _id: data._id,
                    email: data.email,
                    name: data.first_name + ' ' + data.last_name

                });
            } else {
                res.json({
                        errors: {
                            login_reg: {
                                message: "user name and/or password is invalid",
                                kind: "what didn't work",
                                path: "reference to the schema's name",
                                value: "cause of the initial error"
                            }
                        },
                        name: "Validation error"
                    }

                );
            }
        })
    }
    this.register = function(req, res) {
        var user = new User(req.body);
        user.save(function(err, newuser) {
            if (err){
              res.json(err);
            }
            else{
            console.log(newuser);
            res.json({
                _id: newuser._id,
                email: newuser.email,
                name: newuser.first_name+' '+newuser.last_name
            });
          }
        });
        // res.json({future:'register'});
    }


}



module.exports = new UsersController();
