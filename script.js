//complete this code
class Person {
	// #name = '';
	// #age;
	
	constructor (name, age){
		this.name = name;
		this.age = age;
	}

	get name(){
		return this.name;
	}

	set age(x){
		this.age = x;
	}
}

class Student extends Person {
	super(name, age);

	study(){
		console.log(this.name + ' is studying');
	}
}

class Teacher extends Person {
	super(name, age);

	teach(){
		console.log( this.name + 'is teaching')
	}
}
	
// Do not change the code below this line
window.Person = Person;
window.Student = Student;
window.Teacher = Teacher;



