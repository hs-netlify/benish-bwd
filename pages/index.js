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
          Yelp{" "}
          <code>https://www.yelp.com/biz/box-with-daniel-san-francisco</code>
        </p>
        <p className="description">
          Instagram 
          <body>
            <a href="https://www.instagram.com/boxwithdaniel/" target="_blank">
            <link type="image/png" sizes="16x16" rel="icon" href=".../icons8-instagram-16.png">
<link color="#26E07F" rel="mask-icon" href=".../icons8-instagram-48.svg"></link>
          </body>
          
        </p>
        <p className="description">
          TikTok <code>https://www.tiktok.com/@boxwithdaniel</code>
        </p>
        <p className="description">
          Calendly <code>https://calendly.com/boxwithdaniel</code>
        </p>
      </main>

      <Footer />
    </div>
  );
}
