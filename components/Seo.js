import Head from "next/head";

function Seo({ title }) {
  return (
    <Head>
      <title>{title} | Movies</title>
    </Head>
  );
}

export default Seo;
