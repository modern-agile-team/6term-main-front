import { atom } from "recoil";
import { db } from "@/apis/dammyDate";

export const UserPostsAtom = atom ({
    key: "UserPosts",
    default: db, 
})