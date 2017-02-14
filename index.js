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
}
