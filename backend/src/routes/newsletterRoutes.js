import express from "express";

const router = express.Router();

router.post("/subscribe", async (req, res) => {
  try {
    const { email } = req.body || {};

    if (!email || typeof email !== "string" || !email.trim()) {
      return res.status(400).json({ message: "Please provide a valid email address." });
    }

    return res.status(200).json({
      success: true,
      message: "You're on the CELEBHUB waitlist!",
      email: email.trim(),
    });
  } catch (error) {
    console.error("Newsletter subscribe error:", error);
    return res.status(500).json({ message: "Something went wrong." });
  }
});

router.get("/subscribers", (req, res) => {
  return res.status(200).json({
    subscribers: [],
  });
});

export default router;
