import Link from 'next/link';

export default function NavBar(): JSX.Element {
  return (
    <div>
      <Link href="/">HOME</Link>
      <Link href="/login">로그인페이지로</Link>
    </div>
  );
}
