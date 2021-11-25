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
        <h1>Far Away</h1>
	  <h2>Fixed Deposits</h2>
	  <ul>
	  <li>At times, 3 year FD gives more than 5 year FD</li>
	  <li>Cost of about 0.5 % of interest for an early exit from FD</li>
	  <li>It is worth to pay that and keep the money in an FD rather than a savings deposit that gives you
      an interest of 2.75 %, as in July 2020.</li>
	  </ul>
	  <h2>Mutual Funds</h2>
	  <ul>
	  <li>Choose a fund that is conservative and not aggressive.</li>
	  <li>You should not buy a product for your emergency cell based on just high returns it has given in the past.</li>
<li>Check that the top holdings of your debt fund is in AAA-rated bonds.</li>
<li>You may even move your emergency money to a conservative balanced fund.</li>
	  </ul>
<blockquote>Finance is not just about numbers, it should work for all the people in the house
and must look after individual preferences, fears and goals.</blockquote>

      </main>
    </div>
  );
}
