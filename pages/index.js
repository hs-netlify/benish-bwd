import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Box with Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Box with Daniel" />
        <p className="description">
          Checkout Yelp here{" "}
          <code>https://www.yelp.com/biz/box-with-daniel-san-francisco</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
