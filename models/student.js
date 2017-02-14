"use strict"
const sqlite = require('sqlite3').verbose()

//SQL STATEMENT

class Student {
  constructor(firstName, lastName, phone, cohortId, id){
    this.id = id
    this.firstName = firstName
    this.lastName = lastName
    this.phone = phone
    this.cohortId = cohortId
  }

  //Driver Code
  // Student.update(dbModel.connection, new Student("firstname","lastname",phone,cohortId))
  static create(db, data){
    let SEED_DATA_STUDENT = `INSERT INTO students(firstName, lastName, phone,cohortId) VALUES('${data.firstName}','${data.lastName}','${data.phone}','${data.cohortId}')`
    console.log(SEED_DATA_STUDENT);
    db.serialize(function(){
      db.run(SEED_DATA_STUDENT, function(err) {
        err ? console.log(err):console.log(`SEED DATA STUDENT SUCCESSFUL`)
      })
    })
  }

  static update(db, data){
    let EDIT_DATA_STUDENT  = `UPDATE students SET firstName = '${data.firstName}', lastName = '${data.lastName}', phone = '${data.phone}', cohortId = '${data.cohortId}' WHERE id = '${data.id}'`
    db.serialize(function(){
      db.run(EDIT_DATA_STUDENT, function(err){
        err ? console.log(err):console.log(`UPDATE DATA STUDENT SUCCESSFUL`);
      })
    })
  }

  static delete(db, data){
    let DELETE_DATA_STUDENT = `DELETE FROM students WHERE id = '${data.id}'`
    db.serialize(function(){
      db.run(DELETE_DATA_STUDENT, function(err) {
        err ? console.log(err):console.log(`DELETE DATA STUDENT SUCCESSFUL`);
      })
    })
  }

  static findById(db, id){
    let findById = `SELECT * FROM students WHERE id LIKE '${id}'`
    db.serialize(function() {
      db.each(findById, function(err, row) {
        err ? console.log(err):console.log(row)
      })
    })
  }

  static findAll(db, data){
    let SELECT_ALL = "SELECT * FROM students"
    db.serialize(function(){
      db.all(SELECT_ALL, function(err, row){
        err ? console.log(err):console.log(row);
      })
    })
  }

  static where(db, value, data){
    let WHERE_STUDENT = "SELECT * FROM students WHERE "
    db.serialize(function(){
      db.all(WHERE_STUDENT + value, data)
    })
  }

}

export default Student
