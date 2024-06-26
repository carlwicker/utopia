import { NextResponse, NextRequest } from "next/server";
import OpenAI from "openai";

export async function POST(req: NextRequest, res: NextResponse) {
  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY as string,
  });

  const chatCompletion = await openai.chat.completions.create({
    messages: [{ role: "user", content: "help save the world" }],
    model: "gpt-3.5-turbo",
  });

  return NextResponse.json({
    content: chatCompletion.choices[0].message.content,
  });
}
