const mongoose = require('mongoose')
const bcrypt = require('bcrypt')

const ObjectID = Schema.Types.ObjectID;

const UserSchema = new mongoose.Schema({
  email: { type: String, required: true },
  name: { type: String, required: true },
  password: { type: String, required: true },
  birthday: { type: Date, required: true },
  // friends: [{type: ObjectID}]
})

//authentication
UserSchema.methods.comparePassword = function(password, callback) {
  bcrypt.compare(password, this.password, callback);
}

UserSchema.pre('save', function(next) {
  const user = this;

  if (!user.isModified('password')) return next();

  return bcrypt.genSalt((saltError, salt) => {
    if (saltError) { return next(saltError) }

    return bcrypt.hash(user.password, salt, (hashError, hash) => {
      if (hashError) { return next(hashError) }
      user.password = hash;
      return next()
    })
  })
})

module.exports = mongoose.model('User', UserSchema);