import Link from "next/link";

const Nav: React.FC = () => {

  return (
    <>
      <nav>
        <ul>
          <li>
            <Link href="/">
              Home
            </Link>
          </li>
          <li>
            <Link href="/about">
              Pages
            </Link>
          </li>
          <li>
            <Link href="/jyotirlinga">
              Jyotirlinga
            </Link>
          </li>
          <li>
            <Link href="/code">
              Code
            </Link>
          </li>
          <li>
            <Link href="/develop">
              Develop
            </Link>
          </li>
          <li>
            <Link  href="/events">
              Events
            </Link>
          </li>
          <li>
            <Link href="/gallery">
              Gallery
            </Link>
          </li>
          <li>
            <Link href="/contact">
              Contact
            </Link>
          </li>
          <li>
            <Link href="/blog">
              Blog
            </Link>
          </li>
        </ul>
      </nav>
    </>
  );
};

export default Nav;
