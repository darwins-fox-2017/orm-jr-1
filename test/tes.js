dbmodel
dbmodel.connection
Student.create(dbmodel.connection, new Student("Windiana", "Krismayunar", 1))
Student.update(dbmodel.connection, new Student("Windi","Aje", 1, 1))
Student.delete(dbmodel.connection, new Student(1))
Student.findById(dbmodel.connection, new Student(1))

Student.findAll(dbmodel.connection, function(data, err) {
  if (!err) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i])
    }
  } else {
    console.log('Error')
  }
})

Student.where(dbmodel.connection, "firstname = 'bambang'", function(data, err) {
  if(!err) {
    for (let i = 0; i < data.length; i++) {
      console.log(data[i])
    } else {
      console.log('Error')
    }
  }
})
