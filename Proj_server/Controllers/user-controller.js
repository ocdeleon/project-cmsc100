const User = require('mongoose').model('User')

//find by name
exports.findByName = (req, res) => {
    const name = req.body.name;
    User.findAll( {name}, (err, users) => {
        // if(!err) {res.json(users)}
        if(!err) {res.send(users)}
        else{
            res.send("error")
        }
    })
}

//update the user based on params
exports.editUser = (req, res) =>{
    User.updateOne({name: req.params.name}, {$set: {name: req.body.name, about: req.body.about, birthday: req.body.birthday}}, (err, user)=>{
        if(!err){
            res.send(user);
        } 
        else{
            res.send("error found, could not update")
        }
    })
}

// exports.addFriend = (req, res) => {
    
// }

//add new user
// exports.addUser = (req, res) => {
//     const email = req.body.email;
//     const name = req.body.name;
//     const password = req.body.password;
//     const birthday = req.body.birthday;

// 	const newUser = new User({name, email, password, birthday});
    
//     newUser.save((err,user) => {
// 		if(!err) {
//             res.json(user);
//             // res.send(user);             
//         }
// 		else {
//             res.send("could not save new user");
// 		}
// 	});
// }