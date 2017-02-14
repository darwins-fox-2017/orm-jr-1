"use strict"

class Student {
  constructor(firstname, lastname, cohort_id) {
    this.firstname = firstname
    this.lastname = lastname
    this.cohort_id = cohort_id
  }

  static create(connection, data) {

    let db = connection

    let createDataStudent = `INSERT INTO student (firstname, lastname, cohort_id) VALUES ('${data.firstname}', '${data.lastname}', '${data.cohort_id}')`
    db.serialize(function() {
      db.run(createDataStudent, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('INSERT Data berhasil !');
        }
      })
    })
  }

  static update(connection, student) {
    let db = connection
    let UpdateDataStudent = `UPDATE student SET firstname = '${firstname}', lastname = '${lastname}' WHERE id = ${id};`

    db.serialize(function() {
      db.run(UpdateDataStudent, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('Update Data berhasil !');
        }
      })
    })
  }

  static delete(connection, id) {
    let db = connection
    let DeleteStudent = `DELETE FROM student WHERE id = ${id};`

    db.serialize(function() {
      db.run(DeleteStudent, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('Delete Data Berhasil  !');
        }
      })
    })
  }

  static findById(connection, id) {
    let db = connection
    let findById = `SELECT * FROM student WHERE id = ${id}`
    db.serialize(function() {
      db.each(findById, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log(data);
        }
      })
    })
  }

  static findAll(connection, callback) {
    let db = connection
    let findAll = `SELECT * FROM student`

    db.serialize(function() {
      db.all(findAll, callback)
    })
  }

  static where(connection, value, callback) {
    let db = connection
    let where = `SELECT * FROM student WHERE`


    db.serialize(function() {
      db.all(where + value, callback)
    })
  }
}

export default Student
