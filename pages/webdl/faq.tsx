import Footer from '../../components/Footer';
import Header from '../../components/Header';
import Head from 'next/head';


const WebDLFAQ = () => {
  return (
    <div>
      <Head>
        <link rel="shortcut icon" href="/favicon.png" />
        <title>Hugo's Github Projects - WebDL FAQ</title>
      </Head>
      <div className="grid min-h-screen gap-0 font-sans bg-white dark:bg-gray-800 grid-rows-pancake">
        <Header />
        <div className="z-0 flex flex-col items-center justify-start gap-4 overflow-x-hidden min-h-[calc(100vh-12rem)]">
          <section className="w-auto h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="text-2xl font-bold">Title</h2>
            <p className="text-base font-normal">Test</p>
          </section>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default WebDLFAQ;
