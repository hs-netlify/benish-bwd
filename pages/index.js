import Head from "next/head";
import Header from "@components/Header";
import Footer from "@components/Footer";

export default function Home() {
  return (
    <div className="flex flex-col justify-between h-screen w-full">
      <Head>
        <title>Box with Daniel</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div></div>
      <div className="flex flex-col justify-center items-center w-full">
        <div className="w-full h-1"></div>

        <img className="w-72" src="/bwd.svg" />
        <div className="flex flex-col items-center mt-10">
          <code className="p-2">
            <b>Phone number: 415-309-5378</b>
          </code>
          <code className="p-2">
            <b>
              mail:
              <a
                className="cursor-pointer hover:text-blue-700 underline"
                href="mailto:info@boxwithdaniel.com"
              >
                info@boxwithdaniel.com
              </a>
            </b>
          </code>
          <code className="p-2">
            Website:
            <a
              className="cursor-pointer hover:text-blue-700 underline"
              target="blank"
              href="www.boxwithdaniel.com"
            >
              www.boxwithdaniel.com
            </a>
          </code>
        </div>
        <div className="flex mt-10">
          <div className="p-2">
            <a href="https://www.yelp.com/biz/box-with-daniel-san-francisco">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/yelp.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.instagram.com/boxwithdaniel/">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/instagram.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://www.tiktok.com/@boxwithdaniel">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/tiktok.svg"
              />
            </a>
          </div>
          <div className="p-2">
            <a href="https://calendly.com/boxwithdaniel">
              <img
                className="hover:scale-110 duration-200 ease-in-out transition-all w-8"
                src="/icons/clock.svg"
              />
            </a>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
}
