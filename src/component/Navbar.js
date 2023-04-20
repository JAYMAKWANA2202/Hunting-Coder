import Link from "next/link";

function Navbar() {
  return (
    <>
      <style jsx>{`
        .navbar {
          color: pink;
          align-items: center;
          text-align: center;
        }

        .navbar ul li {
          display: inline-block;
          margin-right: 20px;
          padding: 12px;
        }
        .navbar ul li:hover {
          color: blue;
          text-decoration: underline;
        }
      `}</style>

      <nav className="navbar">
        <ul>
          <li>
            <Link href="/">Home</Link>
          </li>
          <li>
            <Link href="/about">About</Link>
          </li>
          <li>
            <Link href="/contact">Contact</Link>
          </li>
          <li>
            <Link href="/post">Post</Link>
          </li>
        </ul>
      </nav>
    </>
  );
}

export default Navbar;
