import Link from "next/link";

const Nav = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="/about">Popular</Link>
        </li>
        <li>
          <Link href="/">New Product</Link>
        </li>
      </ul>
    </nav>
  );
};

export default Nav;
