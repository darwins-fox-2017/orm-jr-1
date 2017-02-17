"use strict"

import Student from "./student.js";

class Cohort {
  constructor(name, id) {
    this.name = name
    this.id = id
  }

  static create(connection, data) {
    let db =  connection
    let create_data_cohort = `INSERT INTO cohort (name) VALUES ('${data.name}')`;
    db.serialize(function() {
      db.run(create_data_cohort, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('INSERT Data Cohort berhasil !');
        }
      })
    })
  }

  static update(connection, data) {
    let db = connection
    let Update_data_cohort = `UPDATE cohort SET name = '${data.name}' WHERE id = ${data.id};`

    db.serialize(function() {
      db.run(UpdateDataStudent, function(err) {
        if(err) {
          console.log(err);
        } else {
          console.log('Update Data Cohort berhasil !');
        }
      })
    })
  }

  static read(connection, data) {
    let db = connection
    let read_data_cohort = `SELECT * FROM cohort`;
    db.serialize(function() {
      db.each(read_data_cohort, function(err, row) {
        if(err) {
          console.log(err);
        } else {
          console.log(row);
        }
      });
    })
  }

  static delete(connection, data) {
    let delete_data_cohort = `DELETE FROM cohort WHERE id = ${data.id}`;
    db.serialize(() => {
      db.run(delete_data_cohort, function(err) {
        if (err) {
          console.log(err)
        } else {delete_data_cohort
          console.log(delete_data_cohort, "Delete data success!!")
        }
      });
    })
  }

  static findById(connection, data) {
    let db = connection
    let findById = `SELECT * FROM cohort WHERE id = ${data.id}`;
    db.serialize(() => {
      db.run(findById, function(err) {
        if (err) {
          console.log(err)
        } else {
          console.log(findById)
        }
      });
    })
  }

  static findAll(connection, callback) {
    let db = connection
    let read_data_cohort = `SELECT * FROM cohorts`;
    db.serialize(() => {
      db.all(read_data_cohort, function(err, data) {
        callback(data)
      })
    })
  }

  static where(connection, value, callback) {
    let db = connection
    let where = `SELECT * FROM cohort WHERE`

    db.serialize(function() {
      db.all(where + value, callback)
    })
  }

}

export default Cohort
