var express = require('express');
var router = express.Router();
var Departments = require("../../models/department.model");

router.route('/')
    .get(function(req, res, next){
        Departments.finds('n', 0,function(err, departments){
            if (err){
                console.log('Loi roi');
            } else{
                res.render('pages/infoFindDepartment', {departments: departments});
            }
        })
        // var data = 'n';
        // Departments.find(
		// 	{
		// 		$or: [
		// 			{_id: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{name: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{description: {$regex: '.*' + data + '.*', $options: 'i'}},
		// 			{address: {$regex: '.*' + data + '.*', $options: 'i'}}
		// 		]
		// 	},
		//     (err, departments) => {
        //         if (err){
        //             console.log('Loi roi');
        //         }
        //         res.render('pages/infoFindDepartment', {departments: departments});
                
        //     }
		// );
    })
    .post(function(req, res, next){

    })

// router('/update')

module.exports = router;