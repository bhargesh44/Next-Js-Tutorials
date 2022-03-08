import Head from "next/head";
import Home from "../components/Home";
const index = () => {
  return (
    <>
      <Head>
        <title>Home Page </title>
        <meta name="description" content="Free Web youtube tutorials" />
        <meta name="keywords" content="HTML, CSS, JavaScript, next.js" />
        <meta name="author" content="FlyOnTech Solutions" />
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1.0"
        ></meta>
      </Head>
      <Home />
    </>
  );
};
export default index;
