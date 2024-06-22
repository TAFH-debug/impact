import {Express, Request, Response} from "express";
import OpenAI from "openai";


const openai = new OpenAI();

export function registerChat(app: Express) {
    app.post("gpt", gpt);
}

async function gpt(req: Request, res: Response): Promise<void> {
    const { text } = req.body;

    const completion = await openai.chat.completions.create({
        messages: [{
            role: "system",
            content: "You are a helpful assistant.",
        }, {
            role: "user",
            content: text,
        }],
        model: "gpt-3.5-turbo"
    });

    res.json({ response: completion.choices[0] });
}