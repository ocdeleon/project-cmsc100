const User = require('mongoose').model('User')

//find by name
exports.findByName = (req, res) => {
    User.findAll( {name: req.params.name}, (err, users) => {
        // if(!err) {res.json(users)}
        if(!err) {res.send(users)}
        else{
            res.send("error")
        }
    })
}

//update the user based on params
exports.editUser = (req, res, next) =>{
    User.updateOne({name: req.params.name}, {$set: {name: req.body.name, email: req.body.email, about: req.body.about, birthday: req.body.birthday}}, (err, user) => {
        if(!err){
            res.send(user)
        } else{
            res.send("error found, could not update")
        }
    })
}

// exports.addFriend = (req, res) => {
    
// }

//add new user
// exports.addUser = (req, res, next) => {
// 	const newUser = new User({
//         const email: req.body.email,
//         const name: req.body.name,
//         const password: req.body.password,
//         const birthday: req.body.birthday
//     })
    
//     newUser.save((err,user) => {
// 		if(!err) {
//             // res.json(user);
//             // res.send(user);
//             res.send("Success")             
//         }
// 		else {
//             res.send("could not save new user");
// 		}
// 	});
// }