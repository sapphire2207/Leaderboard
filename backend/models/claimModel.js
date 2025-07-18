import mongoose from "mongoose";

const claimSchema = new mongoose.Schema({
  userId: mongoose.Schema.Types.ObjectId,
  pointsClaimed: Number,
  timestamp: { type: Date, default: Date.now },
});

const ClaimHistory = mongoose.model('ClaimHistory', claimSchema);

export default ClaimHistory;