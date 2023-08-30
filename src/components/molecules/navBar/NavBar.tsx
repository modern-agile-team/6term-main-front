import Link from "next/link";

export default function NavBar() {
    return (
        <div>
            <Link href="/">HOME</Link>
            <Link href="/login">로그인페이지로</Link>
        </div>
    );
};