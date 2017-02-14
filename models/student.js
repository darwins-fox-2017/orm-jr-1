"use strict"
const sqlite = require('sqlite3').verbose()

class Student {
  constructor(firstname, lastname, phone, cohortId, id){
      this.id = id
      this.firstname = firstname
      this.lastname = lastname
      this.phone = phone
      this.cohortId = cohortId
  }

  static create(db, student){
    let query_create = `INSERT INTO students (firstname, lastname, phone, cohortId) VALUES ('${student.firstname} ', '${student.lastname}','${student.phone}', '${student.cohortId}');`
    db.serialize(function(){
      db.run(query_create, function(err){
        if(err) { console.log(err) } else {console.log('DATA CREATED');}
      })
    })
  }

  static update(db, student){
    let query_update = `UPDATE students SET firstname = '${student.firstname}', lastname = '${student.lastname}', phone = '${student.phone}', cohortId = '${student.c}' WHERE id = '${student.id}'`
    db.serialize(function(){
      db.run(query_update, function(err){
        if(err) { console.log(err) } else {console.log('DATA UPDATED');}
      })
    })
  }

  static delete(db, student){
    let query_delete = `DELETE FROM students WHERE id = '${student.id}'`
    db.serialize(function(){
      db.run(query_delete, function(err){
        if(err) { console.log(err) } else {console.log('DATA DELETED');}
      })
    })
  }

  static findById(db, id){
    let query_findById = `SELECT * FROM students WHERE id = '${id}'`
    db.serialize(function(){
      db.each(query_findById, function(err,row){
        if(err) { console.log(err) } else {console.log(row);}
      })
    })
  }

  static findAll(db){
    let query_findAll = `SELECT * FROM students;`
    db.serialize(function(){
      db.each(query_findAll, function(err,row){
        if(err) { console.log(err) } else {console.log(row);}
      })
    })
  }

  static where(db, value, data){
    let query_where = "SELECT * FROM students WHERE "
    db.serialize(function(){
      db.all(query_where + value, data)
    })
  }

}

export default Student
