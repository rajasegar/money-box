import styles from "../styles/Home.module.css";

import Head from "next/head";

export default function Emergency() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emergency - The Money Box</title>
        <meta name="description" content="Emergency Cell - The Money Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Almost There</h1>
	  <h2>2-3 years in future</h2>
	  <ul>
	  <li>Fixed Deposits</li>
	  <li>Ultra-short term debt funds</li>
	  <li>Conservative Hybrid mutual funds</li>
	  </ul>
	  <h2>Ultra-short-term Debt Funds</h2>
	  <ul>
	  </ul>
	  <h2>Conservative Hybrid mutual funds</h2>
	  <ul>
	  <li>Max equity exposure of 25%</li>
	  <li>Keep the rest in bonds</li>
	  </ul>

      </main>
    </div>
  );
}
