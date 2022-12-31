import Head from "next/head";
import HomePage from "../src/components/home/home-page";
import styles from "../styles/Home.module.css";
import Header from "../src/components/header/header";
import Footer from "../src/components/footer/footer";

export default function Home({ data }) {
  return (
    <div className={styles.container}>
      <Head>
        <title>Events App | Next JS | Rimon</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />

      <HomePage data={data} />

      <Footer />
    </div>
  );
}

export async function getServerSideProps() {
  const { events_categories } = await import("/data/data.json");
  // console.log(events_categories);
  return {
    props: {
      data: events_categories,
    },
  };
}
