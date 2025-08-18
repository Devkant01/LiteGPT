import { useEffect, useRef, useState } from "react";
import useFetchResponse from "../services/useFetchResponse";
import { useSetRecoilState } from "recoil";
import { input, messages } from "../store/atom";
import { FiSend } from "react-icons/fi";

export default function Composer() {
    const [ip, setIp] = useState("");
    const setInput = useSetRecoilState(input);
    const setMessages = useSetRecoilState(messages);
    const textareaRef = useRef<HTMLTextAreaElement>(null);

    useEffect(() => {
        if (textareaRef.current) {
            textareaRef.current.style.height = "auto";
            textareaRef.current.style.height =
                textareaRef.current.scrollHeight + "px";
        }
    }, [ip]);

    async function handleSubmit() {
        if (ip.trim() === "") return;

        setInput(ip);
        setIp("");
        setMessages((prev) => [
            ...prev,
            { request: ip, response: "" },
        ]);

        // Fetch response
        const data = await useFetchResponse(ip);

        setMessages((prev) => {
            const updated = [...prev];
            updated.pop();
            return [
            ...updated,
            { request: ip, response: data }
            ];
        });

    }

    return (
        <div className="p-4 min-w-sm md:w-3xl m-auto">
            <div className="border rounded-full py-2 px-4 flex items-center">
                <textarea
                    ref={textareaRef}
                    rows={1}
                    value={ip}
                    onChange={(e) => setIp(e.target.value)}
                    onKeyDown={(e) => {
                        if (e.key === "Enter" && !e.shiftKey && ip.trim() !== "") {
                            e.preventDefault();
                            handleSubmit();
                        }
                    }}
                    placeholder="Type your message..."
                    className="flex-1 resize-none overflow-hidden bg-transparent outline-none px-2 py-1"
                />
                <button
                    disabled={ip.trim() === ""}
                    className={`ml-2 text-lg ${ip.trim() === ""
                        ? "cursor-no-drop opacity-50"
                        : "cursor-pointer text-blue-500"
                        }`}
                    onClick={handleSubmit}
                >
                    <FiSend className="w-6 h-6" />
                </button>
            </div>
        </div>
    );
}
