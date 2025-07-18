import User from "../models/userModel.js"
import ClaimHistory from "../models/claimModel.js"

const claimPoints = async (req, res) => {
  const { userId } = req.body;
  const points = Math.floor(Math.random() * 10) + 1;
  const user = await User.findByIdAndUpdate(
    userId,
    { $inc: { totalPoints: points } },
    { new: true }
  );
  const history = new ClaimHistory({ userId, pointsClaimed: points });
  await history.save();
  const leaderboard = await User.find().sort({ totalPoints: -1 });
  res.json({ user, points, leaderboard });
};

export {claimPoints};