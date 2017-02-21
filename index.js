"use strict"

const repl = require('repl');

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let db = new DBModel("./db/student.db")

let argv = process.argv[2]

if (argv == 'playtime') {
    let start = repl.start('> ');
    start.context.dbModel = db
    start.context.Student = Student
}


// Student.create(dbModel.connection, new Student("sam","ganteng",1234567,1))
// Student.update(dbModel.connection, new Student("sam", "ganeng",1234567,1,1))
// Student.delete(dbModel.connection, 1)
// Student.findById(dbModel.connection, 1)

// Student.findAll(dbModel.connection, function(data, err){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//       console.log(err);
//   }
// })

// Student.where(dbModel.connection, "firstName = 'ganteng '", function(err, data){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//     console.log(err)
//   }
// })
