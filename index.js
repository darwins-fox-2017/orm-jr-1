"use strict"

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let db = new DBModel ("./db/student.db")

const repl = require('repl');
let argv = process.argv

let command = argv.slice(2).join('')


if(command === 'playtime') {
  let start = repl.start('> ')
  start.context.dbmodel = db
  start.context.Student = Student
  start.context.Cohort =  Cohort
  // start.context.tokek = 'tokek'
}


// Student.create(dbmodel.connection, new Student("Daniel", "Agus", 4))
// Student.update(dbmodel.connection, new Student("Danil", "Permadi", 4, 3))
// Student.delete(dbmodel.connection, new Student, 4)
// Student.findById(dbmodel.connection, 3)
/* Student.findAll(dbmodel.connection, function(data, err) {
  if(!err) {
    for (var i = 0; i < data.length; i++) {
      console.log(data[i]);
    }
  } else {
    console.log('error');
  }
})
*/

/*
    Student.where(dbmodel.connection, "firstname = Daniel ", function(data, err) {
    if (!err) {
      for (var i = 0; i < data.length; i++) {
        console.log(data[i])
      }
    } else {
      console.log('ERROR');
    }
  });
*/
