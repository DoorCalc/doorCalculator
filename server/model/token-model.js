// import {Schema, model} from 'mongoose';
import pkg from 'mongoose';
const {Schema, model} = pkg;


const TokenSchema = new Schema({
    user: {type: Schema.Types.ObjectId, ref: 'User'},
    refreshToken: {type: String, required: true},
});

export let tokenModel = model('Token', TokenSchema);
