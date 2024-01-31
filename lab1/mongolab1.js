//Q1
use FacultySystemDB
//Q2
db.createCollection("student")
//Q3
db.student.insertOne({

    firstName: "mahmoud",

    lastName: "ibrahim",

    age: 21,

    faculty: {

        name: "Engineering",

        address: "cairo"

    },

    grades: [

        {

            courseName: "C",

            grade: "A+",

            pass: true

        },

        {

            courseName: "C++",

            grade: "A+",

            pass: true

        },

    ],

    isFired: false

})

db.student.insertMany([

{firstName :"ahmed",

    lastName :"mohammed",

    age:25,

    faculty:{

        name:"Science",

        address:"Cairo"},

        grades:[{

            courseName: "C",

            grade: "A+",

            pass: true

        },

        {

            courseName: "C++",

            grade: "A+",

            pass: true

        },

    ],

    isFired: false

},{firstName :"ali",

lastName :"mohammed",

age:29,

faculty:{

    name:"Science",

    address:"Cairo"},

    grades:[{

        courseName: "C",

        grade: "A+",

        pass: true

    },

    {

        courseName: "C++",

        grade: "A+",

        pass: true

    }],

isFired: false

}]);

//Q4.1

db.student.find({})

//4.2

db.student.find({firstName:"ahmed"})

//4.3

db.student.find({ $or: [{ firstName: "ahmed" }, { lastName: "ahmed" }] })

//4.4

db.student.find({ firstName: { $ne: "ahmed" } })

//4.5

db.student.find({ 

  age: { $gte: 21 },

  faculty: { $ne: null }

})

//4.6

var specificFirstName = "ahmed"; 
var student = db.student.findOne({ firstName: specificFirstName });

if (student) {

  print("First Name: " + student.firstName);

  print("Last Name: " + student.lastName);

  print("Is Fired: " + student.isFired);

} else {

  print("Student with first name " + specificFirstName + " not found.");

}

//Q5

var specificFirstName = "ahmed"; 

var newLastName = "yasser"; 



var result = db.student.updateOne(

  { firstName: specificFirstName },

  { $set: { lastName: newLastName } }

);

if (result.modifiedCount > 0) {

  print("Student updated successfully!");

} else {

  print("No student found with the specified first name.");

}

//Q6

var result = db.student.deleteMany({ isFired: true });
print(result.deletedCount + " students deleted.");

//Q7

var result = db.student.deleteMany({});
print(result.deletedCount + " documents deleted.");

//Q8
db.dropDatabase();











        

        