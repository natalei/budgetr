import { model, Schema } from "mongoose"

const UserSchema = new Schema({
    name: {
        type: String,
        required: true,
    },
    displayName: {
        type: String,
        required: true,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
    }
}, {
    timestamps: true,
});

export default model("User", UserSchema);
