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
  // start.context.tokek = 'tokek'
}
