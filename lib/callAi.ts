import { GoogleGenerativeAI } from "@google/generative-ai";

// 1. Initialize the API with your Key from Vercel/Local Env
const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY!);

export async function callAI(systemPrompt: string, userPrompt: string) {
  try {
    // 2. بنستخدم موديل Gemini 1.5 Flash عشان سريع ومناسب للـ Automation
    const model = genAI.getGenerativeModel({ 
      model: "gemini-1.5-flash",
      // هنا بنحقن الـ System Instructions عشان يلتزم باللغة والـ Tone
      systemInstruction: systemPrompt,
    });

    const generationConfig = {
      temperature: 0.7, // عشان يطلع كود "مبدع" بس مش متهور
      topP: 0.95,
      topK: 64,
      maxOutputTokens: 2048, // كافي جداً لبوست LinkedIn طويل
      responseMimeType: "text/plain",
    };

    const result = await model.generateContent({
      contents: [{ role: "user", parts: [{ text: userPrompt }] }],
      generationConfig,
    });

    const response = result.response;
    const text = response.text();

    if (!text) {
      throw new Error("Gemini returned an empty response.");
    }

    return text;

  } catch (error: any) {
    console.error("AI Generation Error:", error.message);
    // Edge Case
    return null;
  }
}