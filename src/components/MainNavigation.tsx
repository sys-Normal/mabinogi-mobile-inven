"use client";

import { useRouter } from "next/navigation";

export default function MainNavigation () {
  const router = useRouter();

  return(
    <div>
      <button
        onClick={() => {
          router.push("/homework")
        }}
        >
      숙제기록

      </button>
      <button>
      장비도감
      </button>
    </div>
  )
}