"use client";

import Link from "next/link";
import styles from "./FlexibleHeader.module.scss";
import Image from "next/image";
import { Button } from "antd";

const NAV_ITEMS = [
  { label: "숙제관리", href: "/homework" },
  { label: "도감", href: "/wiki" },
];

export default function FlexibleHeader() {
  return (
    <header className={styles.header}>
      <div className={styles.container}>
        <Link href="/" className={styles.mainLogo}>
          {/* <Image
            src="./"
            alt="메인 로고"
            priority
            className={styles.logoImage}
          /> */}
          <span className={styles.logoText}>마모인벤</span>
        </Link>
        <nav className={styles.nav}>
          {NAV_ITEMS.map((item, index) => (
            <Link href={item.href} className={styles.navItem} key={index}>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* <Link href="/loign">로그인</Link> */}
        <div className={styles.menuButtonWrapper}>
          <Button classNames={styles.menuButton} aria-label="메뉴 열기">
            ☰
          </Button>
        </div>
      </div>
    </header>
  );
}
