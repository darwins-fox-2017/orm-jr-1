# orm-jr-1

Student.create(dbModel.connection,new Student(‘Danang’, ‘Aji Tamtomo’,1))
Student.update(dbModel.connection,new Student(‘Danang’, ‘Ajoy’,1),1)
Student.findAll(dbModel.connection, {limit: 2, offset: 1}, function(err, data) {
	if(!err) {
		for(let i=0;i<data.length;i++) {
			console.log(data[i])
		}
	} else {
		console.log('Error')
	}
})

Student.where(dbModel.connection, "firstname = 'Danang'", function(err, data) {
	if(!err) {
		for(let i=0;i<data.length;i++) {
			console.log(data[i])
		}
	} else {
		console.log('Error')
	}
})

Cohort.findAll(dbModel.connection, {limit: 2, offset: 1}, function(err, data) {
	if(!err) {
		for(let i=0;i<data.length;i++) {
			console.log(data[i])
		}
	} else {
		console.log('Error')
	}
})
