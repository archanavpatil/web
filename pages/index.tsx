import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";

const Home: NextPage = () => {
  return (
    <div>
      <Head>
        <title>HumanQind</title>
        <meta name="description" content="HumanQind School Application" />
      </Head>

      <main>
        <h1>
          Welcome to <a href="https://nextjs.org">HumanQind</a>
        </h1>
      </main>

      <footer>This is footer</footer>
    </div>
  );
};

export default Home;
