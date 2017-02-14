"use strict"

const repl = require('repl');

import DBModel from "./models/db_model.js";
import Cohort from "./models/cohort.js";
import Student from "./models/student.js";

let playtime = process.argv
let command = playtime.slice(2).join('')

if (command == 'playtime') {
  let dbmodel = new DBModel()

  console.log('============== ORM JR 1 ==================');
  console.log(`Type : 'dbmodel' Test database connection `);
  console.log(`Type : 'dbmodel.setup()' For create table `);
  console.log(`Type : 'Student' For CRUD Data Student`);
  console.log(`Type : 'Cohort' For CRUD Data Cohort`);
  console.log(`Type : 'Student.create(dbmodel.connection, new Student('firstname', 'lastname', id))'`);
  

  var r = repl.start('> ')
  r.context.dbmodel = dbmodel
  r.context.Student = Student
  r.context.Cohort = Cohort
}
