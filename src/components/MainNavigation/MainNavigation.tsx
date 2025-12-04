"use client";

import { useRouter } from "next/navigation";
import style from "./MainNavigation.module.scss";
import { Button } from "antd";

export default function MainNavigation() {
  const router = useRouter();

  return (
    <div className={style.container}>
      <button
        onClick={() => {
          router.push("/homework");
        }}
      >
        숙제기록
      </button>
      <button>장비도감</button>
    </div>
  );
}
