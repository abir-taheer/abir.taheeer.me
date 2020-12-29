import Head from "next/head";
import icon from "./../images/icon.png";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Abir Taheer</title>
        <link rel="icon" href={icon} />
      </Head>

      <main className={styles.main}>
        <h1>Hi I'm Abir</h1>
      </main>
    </div>
  );
}
