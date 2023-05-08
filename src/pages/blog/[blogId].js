import Head from "next/head";

function Blog({ title, description }) {
  return (
    <>
      <Head>
        <title>{title}</title>
        <meta name="description" content={description} />
      </Head>
      <h1 className="content">Article</h1>
      <p>Analytics ID: {process.env.NEXT_PUBLIC_ANALYTICS_ID}</p>
    </>
  );
}

export default Blog;

export async function getStaticPaths() {
  return {
    paths: [{ params: { blogId: "1" } }],
    fallback: false,
  };
}

export async function getStaticProps() {
  const user = process.env.DB_USER;
  const password = process.env.DB_PASSWORD;
  console.log(
    `Connecting to database with username ${user} and password ${password}`
  );

  return {
    props: {
      title: "Article title",
      description: "Article description",
    },
  };
}
