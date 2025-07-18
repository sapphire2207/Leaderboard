import User from "../models/userModel.js";

const getLeaderboard = async (req, res) => {
  try {
    const page = parseInt(req.query.page) || 1;     
    const limit = parseInt(req.query.limit) || 10; 

    const skip = (page - 1) * limit;

    const [users, total] = await Promise.all([
      User.find()
        .sort({ totalPoints: -1, _id: 1 })
        .skip(skip)
        .limit(limit),
      User.countDocuments()
    ]);

    res.json({
      users,
      total
    });
  } catch (error) {
    console.error("Error fetching leaderboard:", error);
    res.status(500).json({ message: "Server error" });
  }
};

export { getLeaderboard };
