import MainNavigation from "@/components/MainNavigation";
import styles from "./page.module.css";

export default function Main() {
  return (
    <div className={styles.page}>
      {/* 마비노기 모바일 숙제 관리 */}
      <main>
        <MainNavigation />
      </main>
    </div>
  );
}
