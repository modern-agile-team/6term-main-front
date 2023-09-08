import { atom } from "recoil";
import { db } from "@/apis/dammyDate";
import { db2 } from "@/apis/apiData";

export const UserPostsAtom = atom ({
    key: "UserPosts",
    default: db, 
});

export const UnitPostAtom = atom ({
    key: "UnitPosts",
    default: db2, 
});