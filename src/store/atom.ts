import { atom } from "recoil";

export const input = atom<string>({
    key: "input",
    default: "",
});

export const messages = atom<{ request: string; response: string }[]>({
    key: "messages",
    default: [],
});
