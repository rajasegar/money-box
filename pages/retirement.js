import styles from "../styles/Home.module.css";

import Head from "next/head";
import { useState } from 'react';

export default function Emergency() {
    const [ monthlySpending, setMonthlySpending] = useState(10000);
    const [minRetirement, setMinRetirement] = useState(18 * 12 * monthlySpending);
    const [maxRetirement, setMaxRetirement] = useState(35 * 12 * monthlySpending);

    function updateRetirement(ev) {
	setMinRetirement(18 * 12 * ev.target.value);
	setMaxRetirement(35 * 12 * ev.target.value);
	setMonthlySpending(ev.target.value);
    }

    function formatRupee(amt) {
	return new Intl.NumberFormat('en-IN', { maximumSignificantDigits: 3 }).format(amt);
    }

  return (
    <div className={styles.container}>
      <Head>
        <title>Emergency - The Money Box</title>
        <meta name="description" content="Emergency Cell - The Money Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Retirement</h1>
	  <h2>How much do you need</h2>
	  <form>
	  <p><label>Monthly spending:</label>
	  <input type="number" value={monthlySpending} onChange={(ev) => updateRetirement(ev)}/>
	  </p>
	  <p><label>18-35x of Annual spending:</label>
	  <span>&#8377; {formatRupee(minRetirement)}</span> - 
	  <span>{formatRupee(maxRetirement)}</span>
	  </p>
	  </form>
	  <h2>Financially Free</h2>
	  <ul>
	  <li>We need to create a retirement corpus so that by age 60 we are financially free.</li>
	  <li>You are financially free when you don't need to work to pay your bills. You have enough assets that generate enough income today and for the rest of your life.</li>
	  </ul>
	  <h2>Save Your Age</h2>
	  <ul>
	  <li>Choose a fund that is conservative and not aggressive.</li>
<li>Check that the top holdings of your debt fund is in AAA-rated bonds.</li>
<li>You may even move your emergency money to a conservative balanced fund.</li>
	  </ul>
	  <h2>Multiply Your Spend</h2>

      </main>
    </div>
  );
}
