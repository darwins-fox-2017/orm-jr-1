"use strict"
const sqlite = require('sqlite3').verbose()

var CREATE_STUDENTS = "CREATE TABLE IF NOT EXISTS students (id INTEGER PRIMARY KEY AUTOINCREMENT, firstName TEXT NOT NULL, lastName TEXT, phone INTEGER, cohortId INTEGER, FOREIGN KEY (cohortId) REFERENCES cohorts (id))"
var CREATE_COHORTS = "CREATE TABLE IF NOT EXISTS cohorts (id INTEGER PRIMARY KEY AUTOINCREMENT, name TEXT NOT NULL)"


class DBModel {
    constructor(file) {
        this.connection = new sqlite.Database(file)
    }

    setup() {
        let db = this.connection

        db.serialize(function() {
            db.run(CREATE_STUDENTS, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('TABLE STUDENTS CREATED');
                }
            });
        });

        db.serialize(function() {
            db.run(CREATE_COHORTS, function(err) {
                if (err) {
                    console.log(err);
                } else {
                    console.log('TABLE COHORTS CREATED');
                }
            });
        });
    }



}

export default DBModel
