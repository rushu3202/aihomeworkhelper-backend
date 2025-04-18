import express from "express";
import OpenAI from "openai";

const router = express.Router();

const openai = new OpenAI({
  apiKey: process.env.OPENROUTER_API_KEY || process.env.OPENAI_API_KEY,
  baseURL: "https://openrouter.ai/api/v1", // optional if using OpenRouter
});

router.post("/", async (req, res) => {
  const { message } = req.body;

  try {
    const response = await openai.chat.completions.create({
      model: "openchat/openchat-3.5", // Or any other model
      messages: [{ role: "user", content: message }],
    });

    const aiReply = response.choices[0]?.message?.content || "🤖 AI gave no reply.";
    res.json({ reply: aiReply });
  } catch (err) {
    console.error("❌ AI Error:", err.message);
    res.status(500).json({ reply: "❌ AI error. Please try again later." });
  }
});

export default router;
