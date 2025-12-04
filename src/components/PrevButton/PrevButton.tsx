"use client";

import { Button } from "antd";
import { useRouter } from "next/navigation";

interface Props {
  children?: React.ReactNode;
}

export default function PrevButton({ children }: Props) {
  const router = useRouter();

  const handleBack = () => {
    if (window.history.length > 1) {
      router.back();
    } else {
      router.push("/");
    }
  };

  return (
    <Button onClick={handleBack} type="link">
      {children}
    </Button>
  );
}
