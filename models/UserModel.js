import mongoose from 'mongoose';

const userFields = {
    firstName: {type: String, required: true},
    lastName: {type: String, default: 'Not provided'},
    email: {type: String, required: true},
    password: {type: String, required: true},
    location: {type: String, default: 'Not specified'},
    userRole: {type: String, enum: ['user', 'admin'], default: 'user'},
    avatarUrl: String,
    avatarPublicId: String,
};

const UserSchema = new mongoose.Schema(userFields);

UserSchema.methods.toJSON = () => {
    let obj = this.toObject();
    delete obj.password;
    return obj;
};

export default mongoose.model('User', UserSchema);
