import Head from "next/head";
import Footer from "@/components/Footer";

function About() {
  return (
    <>
      <Head>
        <title>About Code Evolution</title>
        <meta name="description" content="Free tutorial on Next.js" />
      </Head>
      <h1 className="content">About</h1>
    </>
  );
}

export default About;

About.getLayout = function (page) {
  return (
    <>
      {page}
      <Footer />
    </>
  );
};
