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
        <h1>Life Insurance</h1>
	  <h2>Term plan - 8-10x of Annual income</h2>
	  <ul>
	  <li>No ULIP, money-back, endowment and whole-life policies</li>
	  <li><strong>Term plan</strong> is the only way to build security for the family against your untimely death.</li>
	  <li>Life insurance bundled with investments are <strong>very high cost products that benefit the agents, banks and life
      insurance firms more</strong> than they benefit you.</li>
	  <li>Shut you ears to the hard sell, or cut the loss and <strong>stop funding these policies.</strong></li>
	  <li>You need a term plan to cover just the risk of you having an untimely death.</li>
	  <li><a  rel="noreferrer" href="https://www.policybazaar.com/life-insurance/term-insurance/" target="_blank">Look for</a> a combination of a low premium and a claims experience of over 95 %</li>
	  <li>You don&apos;t want a cheapest plan that comes from a firm that rejects a lot of claims.</li>
	  <li>Try and <strong><a  rel="noreferrer" target="_blank" href="https://www.policybazaar.com/life-insurance/term-insurance/">buy online</a></strong> to cut out the agent commission</li>
	  </ul>

      </main>
    </div>
  );
}
