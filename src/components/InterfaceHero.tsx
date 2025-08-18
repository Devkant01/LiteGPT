import { useRecoilState } from "recoil";
import { messages } from "../store/atom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

function Hero() {
  const [chatHistory, setMessage] = useRecoilState(messages);

  return (
    <div className="w-xl md:w-3xl m-auto flex-1 overflow-y-auto no-scrollbar p-4">
      {chatHistory.length === 0 ? (
        <div className="w-fit m-auto relative top-2/5 text-3xl font-extrabold font-mono text-black opacity-60">
          Ask me anything..
        </div>
      ) : (
        <div className="flex flex-col gap-3">
          {chatHistory.map((m, idx) => (
            <div key={idx} className="flex flex-col gap-2">
              <div
                id="request"
                className="self-end max-w-[60%] border rounded-lg bg-white shadow px-3 py-2 font-mono"
              >
                {m.request}
              </div>
              {(m.response === "")
                ? <div className="animate-pulse text-gray-500">Loading...</div>
                : <div id="response" className="self-start max-w-[80%] px-3 py-2 text-start font-sans ">
                  <ReactMarkdown remarkPlugins={[remarkGfm]}>
                    {m.response}
                  </ReactMarkdown>
                </div>
              }
            </div>
          ))}
          <button className="mt-5 font-mono text-black opacity-60 hover:underline cursor-pointer transition-all " onClick={() => setMessage([])}>clean up..</button>
        </div>
      )}
    </div>
  );
}

export default Hero;
