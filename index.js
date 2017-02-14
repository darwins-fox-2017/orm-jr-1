"use strict"

const repl = require("repl")

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let db = new DBModel("./db/student.db")
let argv = process.argv[2]

if (argv == "playtime") {
  let start = repl.start('> ')
  start.context.dbModel = db
  start.context.Student = Student
  start.context.Cohort  = Cohort
}


//Driver TEST CODE fro STUDENT
// Student.create(dbModel.connection, new Student("Eri","Irawan",123456789,1))
// Student.update(dbModel.connection, new Student("Ei", "Irawan",123456789,1,1))
// Student.delete(dbModel.connection, 1)
// Student.findById(dbModel.connection, 1)
//
// Student.findAll(dbModel.connection, function(data, err){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//       console.log(err);
//   }
// })
//
// Student.where(dbModel.connection, "firstName = 'Eri'", function(err, data){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//     console.log(err)
//   }
// })

//Cohort
// Cohort.create(dbModel.connection, new Cohort("Angkata 1"))
// Cohort.update(dbModel.connection, new Cohort("Angkatan 2",1))
// Cohort.delete(dbModel.connection, 1)
// Cohort.findById(dbModel.connection, 1)
//
// Cohort.findAll(dbModel.connection, function(data, err){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//       console.log(err);
//   }
// })
//
// Cohort.where(dbModel.connection, "name = 'Angkatan 2'", function(err, data){
//   if(!err){
//     for(let i = 0; i < data.length; i++){
//       console.log(data[i])
//     }
//   }else {
//     console.log(err)
//   }
// })
