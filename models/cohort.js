"use strict"

import Student from "./student.js";

class Cohort {
  constructor(cohortname, id) {
    this.cohortname = cohortname
    this.id = id
  }

  static create(db, data) {
    let SEED_DATA_COHORT = `INSERT INTO cohorts (cohortname) VALUES ('${data.cohortname}')`;
    db.serialize(() => {
      db.run(SEED_DATA_COHORT, function(err) {
        if (err) {
          console.log('err');
        } else {
          console.log(SEED_DATA_COHORT, 'INSERT DATA COHORT SUKSES!');
        }
      });
    })
  }

  static read(db) {
    let READ_DATA_COHORT = `SELECT * FROM cohorts`;
    db.serialize(() => {
      db.each(READ_DATA_COHORT, function(err, row) {
        if (err) {
          console.log(err);
        } else {
          console.log(row);
        }
      })
    })
  }

  static create(db, data) {
    let UPDATE_DATA_COHORT = `UPDATE cohorts SET cohortname = ${data.cohortname} WHERE id = ${data.id}`;
    db.serialize(() => {
      db.run(UPDATE_DATA_COHORT, function(err) {
        if (err) {
          console.log('err');
        } else {
          console.log(UPDATE_DATA_COHORT, 'UPDATE DATA COHORT SUKSES!');
        }
      });
    })
  }

  static delete(db, data) {
    let DELETE_DATA_COHORT = `DELETE FROM cohorts WHERE id = ${data.id}`;
    db.serialize(() => {
      db.run(DELETE_DATA_COHORT, function(err) {
        if (err) {
          console.log('err');
        } else {
          console.log(DELETE_DATA_COHORT, 'DELETE DATA COHORT SUKSES!');
        }
      });
    })
  }

  static findById(db, data) {
    let FIND_DATA_COHORT = `SELECT * FROM cohorts WHERE id = ${data.id}`;
    db.serialize(() => {
      db.run(FIND_DATA_COHORT, function(err) {
        if (err) {
          console.log('err');
        } else {
          console.log(FIND_DATA_COHORT, 'DATA COHORT TELAH DITEMUKAN!');
        }
      })
    })
  }

  static findAll(db, callback) {
    let READ_DATA_COHORT = `SELECT * FROM cohorts`;
    db.serialize(() => {
      db.each(READ_DATA_COHORT, function(err, data) {
        callback(data)
      })
    })
  }

  static where(db, param, callback) {
    let WHERE_DATA_COHORT = `SELECT * FROM cohorts WHERE ${param}`;
    db.serialize(() => {
      db.all(WHERE_DATA_COHORT, function(err, data) {
        callback(data)
      })
    })
  }

}

export default Cohort
