import pkg from 'mongoose';
const {Schema, model} = pkg;

const UserSchema = new Schema({
    email: {type: String, unique: true, required: true},
    password: {type: String, required: true},
    isActivated: {type: String, default: false},
    activationLink: {type: String},
});

export let userModel = model('User', UserSchema);
