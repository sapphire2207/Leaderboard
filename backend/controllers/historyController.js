import ClaimHistory from "../models/claimModel.js"

const getClaimHistory = async (req, res) => {
  const history = await ClaimHistory.find().sort({ timestamp: -1 }).populate('userId');
  res.json(history);
};

export {getClaimHistory};