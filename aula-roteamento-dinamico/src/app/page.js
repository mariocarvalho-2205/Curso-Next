import Image from "next/image";
import styles from "./page.module.css";

export default function Home() {
  return (
    <div className={styles.page}>
      <h1>Home</h1>
      <p>Product 1</p>
      <p>Product 2</p>
      <p>Product 3</p>
    </div>
  );
}
