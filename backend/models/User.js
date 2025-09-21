import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  username: { type: String, required: true, unique: true },
  password: { type: String, required: true },
  role: {
    type: String,
    enum: ["superadmin", "client", "driver"], // restrict values
    default: "client", // if nothing is provided
  },
});

const User = mongoose.model("User", userSchema);

export default User;
