import styles from "../styles/Home.module.css";

import Head from "next/head";

export default function MedicalInsurance() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Emergency - The Money Box</title>
        <meta name="description" content="Emergency Cell - The Money Box" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className={styles.main}>
        <h1>Medical Insurance</h1>
	  <ul>
	  <li>Need either a really good financial planner who will choose for you or</li>
	  <li>You need some kind of help to <a  rel="noreferrer" target="_blank" href="https://www.policybazaar.com/health-insurance/health-insurance-india/">compare policies</a> so that you can choose the right one.</li>
	  <li>Take the help of <a  rel="noreferrer" target="_blank" href="https://www.insurancedekho.com/health-insurance/companies">league tables</a> put out by 3rd party entities such as news papers.</li>
	  </ul>
      </main>
    </div>
  );
}
