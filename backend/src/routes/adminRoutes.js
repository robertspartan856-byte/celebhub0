import express from "express";

const router = express.Router();

router.post("/login", (req, res) => {
  const { email, password } = req.body || {};

  if (email === process.env.ADMIN_EMAIL && password === process.env.ADMIN_PASSWORD) {
    return res.status(200).json({
      success: true,
      token: "demo-admin-token",
    });
  }

  return res.status(401).json({ message: "Invalid admin credentials." });
});

router.get("/stats", (req, res) => {
  return res.status(200).json({
    stats: {
      totalSubscribers: 0,
      todaySubscribers: 0,
      yesterdaySubscribers: 0,
    },
  });
});

export default router;
