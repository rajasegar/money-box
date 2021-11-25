import Link from "next/link";
import styles from "./Navbar.module.css";

export default function Navbar() {
  return (
    <ul className={styles.navbar}>
      <li>
        <Link href="/">
          <a>Home</a>
        </Link>
      </li>
      <li>
        <Link href="/emergency">
          <a>Emergency</a>
        </Link>
      </li>
      <li>
        <Link href="/medical-insurance">
          <a>Medical Insurance</a>
        </Link>
      </li>
      <li>
        <Link href="/life-insurance">
          <a>Life Insurance</a>
        </Link>
      </li>
      <li>
        <Link href="/almost-there">
          <a>Almost There</a>
        </Link>
      </li>
      <li>
        <Link href="/in-some-time">
          <a>In Some time</a>
        </Link>
      </li>
      <li>
        <Link href="/far-away">
          <a>Far away</a>
        </Link>
      </li>
      <li>
        <Link href="/retirement">
          <a>Retirement</a>
        </Link>
      </li>
      <li>
        <Link href="/medical-insurance">
          <a>Medical Insurance</a>
        </Link>
      </li>
      <li>
        <Link href="/medical-insurance">
          <a>Medical Insurance</a>
        </Link>
      </li>
    </ul>
  );
}
