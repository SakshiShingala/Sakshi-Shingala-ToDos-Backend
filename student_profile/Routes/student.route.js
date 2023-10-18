module.exports = ()=>{
    const studentModel = require("../model/student.model");

studentRoutes.route('/').get((req, res)=>{
    student.find({})
    .then(student=>res.json(student))
    .catch(err=>console.log(err));
});

studentRoutes.route('/:id').get((req, res)=>{
    const id = req.params.id;
    student.findById(id)
    .then(student=>res.jason(student))
    .catch(err=>console.log(err));
});

studentRoutes.route('/student').post((req, res)=>{
    let student = new student(req.body);

    student.save()
    .then(student=>{
        res.status(200).jason({'student':'Saved Successfully'})
    })
    .catch(err=>{
        res.status(400).jason({'error':err})
    })
})

studentRoutes.route('/student/:id').post((req, res)=>{
    let id = req.params.id;
    student.findById(id), (student, err)=>{
        if(err)
            res.status(400).json({'error':err})
        else
        student.student_fname = req.body.student_fname;
        student.student_lname = req.body.student_lname;
        student.student_studentId = req.body.student_studentId;
        student.student_subjects = req.body.student_subjects;
        student.student_grades = req.body.student_grades;
        student.student_year = req.body.student_year;

        student.save()
            .then(student=>{
            res.status(200).json({'student':'Updated Successfully'})
            })
            .catch(err=>{
            res.status(400).json({'error': err})
            })
}
})

studentRoutes.route('/:id').get((req, res)=>{
    const id = req.params.id;
    student.remove(id)
    .then(student=>res.jason(student))
    .catch(err=>console.log(err));
});

}