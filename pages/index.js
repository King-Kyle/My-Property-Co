import Head from "next/head";
import Layout from "../components/layout";
import Hero from "../components/sections/Hero";
import CTA from "../components/sections/CTA";
import Slider from "../components/sections/Slider";
import Cards from "../components/sections/Cards";

export default function Home() {
  return (
    <Layout>
      <Head>
        <title>My Property Co.</title>
      </Head>
      <Hero />
      <CTA />
      <Slider />
      <Cards />
    </Layout>
  );
}
