import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div className="max-w-screen-xl h-screen p-3 flex items-center justify-center mx-auto">
        <h1 className="text-2xl text-center">
          This is Next Template Using{" "}
          <b className="font-semibold text-green-600">TailwindCSS</b>
        </h1>
      </div>
    </>
  );
}
