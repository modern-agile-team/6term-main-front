import { selector } from "recoil";
import { UserPostsAtom } from "../atoms/UserPostsAtom";
import { db } from "@/apis/dammyDate";

const UserPostSelector = selector({
    key: "UserPostSelect",
    get: ({get}) => {
        const UserPost = get(UserPostsAtom);
        return db;
    }
})