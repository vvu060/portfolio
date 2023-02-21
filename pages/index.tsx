import Head from "next/head";
import Image from "next/image";
import { Inter, Montserrat } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";

const inter = Montserrat({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="h-screen w-screen bg-primary font-montserrat">
        <Header />
      </main>
    </>
  );
}
