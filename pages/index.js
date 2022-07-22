import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";
import bwd from "../public/bwd.svg";

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Box with Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Box with Daniel" />
        <body>
          <p>
            <b>Phone number: 415-309-5378</b>
          </p>
          <p>
            <b>Email: info@boxwithdaniel.com</b>
          </p>
          <code>Website: www.boxwithdaniel.com</code>
        </body>

        <p className="description">
          Yelp{" "}
          <code>https://www.yelp.com/biz/box-with-daniel-san-francisco</code>
        </p>
        <p className="description">
          Instagram
          <code>https://www.instagram.com/boxwithdaniel/</code>
        </p>
        <p className="description">
          TikTok <code>https://www.tiktok.com/@boxwithdaniel</code>
        </p>
        <p className="description">
          Book Time with me: <code>https://calendly.com/boxwithdaniel</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
