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
      <div className="grid min-h-screen gap-0 font-rubik bg-white dark:bg-[#0e1212] grid-rows-pancake">
        <Header />
        <div className="z-0 flex flex-col items-center justify-start gap-4 overflow-x-hidden min-h-[calc(100vh-12rem)]">
          <section className="w-auto h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="mb-4 text-4xl font-bold">I can add the video to the queue but it won't download </h2>
            <section className="text-xl font-normal indent-4">
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If you haven't already, install the <b>mandatory</b> dependency <a href="https://download.microsoft.com/download/1/6/5/165255E7-1014-4D0A-B094-B6A430A6BFFC/vcredist_x86.exe" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Microsoft Visual C++ 2010 Redistributable Package (x86)</a>, the program won't work without it.
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                <b>Make sure you have a valid download path set</b>, do this by going to the settings and changing the path to a valid one.
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Try changing the title of the video to a different one, we might have missed some windows invalid characters.
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If the problem persists create a <a href="https://github.com/Timber1900/WebDL/issues/new?assignees=timber1900&labels=bug+report&template=bug_report.md&title=" className="font-bold text-indigo-800 transition-colors duration-300 inline-bloc indent-0k hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Bug Report</a> where you include the link of the video you tried to download and a screenshot of the <b>developer console</b> (you can open this by pressing ctrl-shift-i).
              </p>
            </section>
          </section>
          <section className="w-auto h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="mb-4 text-4xl font-bold">The video doesnt appear in the queue when the extension is used</h2>
            <section className="text-xl font-normal indent-4">
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Make sure the <b>chrome server port</b>, set by right clicking somewhere in the a chrome tab, and the application port, set in the application settings, are the same <b>number</b>, the default value is <b>3003</b>
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Make sure you don't have another instance of WebDL running
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Make sure you don't have another application using the same port as WebDL
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If the problem persists create a <a href="https://github.com/Timber1900/WebDL/issues/new?assignees=timber1900&labels=bug+report&template=bug_report.md&title=" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Bug Report</a> where you include the link of the video you tried to download and a screenshot of the <b>developer console</b> (you can open this by pressing ctrl-shift-i).
              </p>
            </section>
          </section>
          <section className="w-auto h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="mb-4 text-4xl font-bold">The video download speed is very low</h2>
            <section className="text-xl font-normal indent-4">
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If the download speed is a lot lower then your regular internet speed, YouTube may be rate limiting your device because you downloaded alot of videos
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If this ins't the case, your computer may be struggling to process your downloaded videos, make sure that you aren't running any computation heavy tasks in the background and downloading many videos at once, we don't reccomend any more then 5
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If the problem persists create a <a href="https://github.com/Timber1900/WebDL/issues/new?assignees=timber1900&labels=bug+report&template=bug_report.md&title=" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Bug Report</a> where you include the link of the video you tried to download and a screenshot of the <b>developer console</b> (you can open this by pressing ctrl-shift-i).
              </p>
            </section>
          </section>
          <section className="w-full h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="mb-4 text-4xl font-bold">How can I download private or age restricted videos?</h2>
            <section className="text-xl font-normal indent-4">
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                First you need to extract the cookies from YouTube, to do this use an extension such as <a href="https://chrome.google.com/webstore/detail/get-cookiestxt/bgaddhkoddajcdgocldbbfleckgcbcid" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">this one</a>.
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Once you have the cookies.txt file upload it to WebDL in the settings page
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                Now you should be able to download private videos!
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If you ever want to delete the cookies from WebDL you can do so in the settings page.
              </p>
            </section>
          </section>
          <section className="w-auto h-auto max-w-screen-xl m-4 text-black rounded-xl dark:text-white">
            <h2 className="mb-4 text-4xl font-bold">My issue isn't on this list</h2>
            <section className="text-xl font-normal indent-4">
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If the problem you have isn't documented in this list checkout our <a href="https://github.com/Timber1900/WebDL/issues?q=is%3Aissue+is%3Aclosed" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">issues.</a>
              </p>
              <p aria-label="•" className="before:content-[attr(aria-label)] before:pr-2">
                If it also isn't there, create a <a href="https://github.com/Timber1900/WebDL/issues/new?assignees=timber1900&labels=bug+report&template=bug_report.md&title=" className="inline-block font-bold text-indigo-800 transition-colors duration-300 indent-0 hover:text-indigo-600 dark:hover:text-blue-200 dark:text-blue-400">Bug Report</a> where you include the link of the video you tried to download and a screenshot of the <b>developer console</b> (you can open this by pressing ctrl-shift-i).
              </p>
            </section>
          </section>
        </div>
        <Footer/>
      </div>
    </div>
  )
}

export default WebDLFAQ;
