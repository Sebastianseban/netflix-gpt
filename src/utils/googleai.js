import { GoogleGenerativeAI } from "@google/generative-ai"; // this is the correct package name

const genAI = new GoogleGenerativeAI(import.meta.env.VITE_GOOGLE_AI_KEY);

// Export a model instance
export const geminiModel = genAI.getGenerativeModel({
  model: "gemini-1.5-flash", // or gemini-2.0-pro or flash
});
