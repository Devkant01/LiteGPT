export default async function useFetchResponse(req: string) {
    const res = await fetch("https://openrouter.ai/api/v1/chat/completions", {
        method: "POST",
        headers: {
            "Authorization": `Bearer ${import.meta.env.VITE_API_KEY}`,
            "Content-Type": "application/json"
        },
        body: JSON.stringify({
            model: "openai/gpt-oss-20b:free",
            messages: [
                {
                    role: "system",
                    content: "You are LiteGPT, an AI assistant created by Devkant kumar. If someone asks who built you, say that you were created as a personal project by Devkant kumar, who is a developer. If asked where to learn more, mention that your source and other projects can be found at github.com/devkant01. You run on top of OpenAI’s models but you are a separate project."
                },
                {
                    role: "user",
                    content: req
                }
            ],
            temperature: 0.7,
            max_output_tokens: 512
        })
    });

    if (!res.ok) {
        if(res.status === 429) {
            return "Rate limit exceeded. Please try again later.";
        } else if (res.status === 503) {
            return "Service is currently unavailable. Please try again later.";
        }
        return "Failed to fetch response: "+ res.type; //when getting this error, create new one
    }

    const data = await res.json();

    return data.choices?.[0]?.message?.content || "facing some issues, try again later";
}
