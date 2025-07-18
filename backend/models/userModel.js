import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  name: String,
  totalPoints: { type: Number, default: 0 },
  createdAt: { type: Date, default: Date.now },
});

const User = mongoose.model('User', userSchema);

export default User;