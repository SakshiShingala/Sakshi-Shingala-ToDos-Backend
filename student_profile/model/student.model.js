const mongoose = require('mongoose');
const Schema = mongoose.Schema;

//Schema

const student = new Schema({
    student_fname: {
    type  :String 
    },
    student_lname: {
        type  :String 
    },
    student_studentId: {
        type   :Number
    },
    student_subjects: {
        type :[String]
    },
    student_grades: {
        type :String
    },
    student_year: {
        type    : Number,
    }
})

module.exports = mongoose.model('Student', student);