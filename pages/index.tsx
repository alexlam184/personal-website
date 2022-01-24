import type { NextPage } from 'next';
import Head from 'next/head';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { Navbar } from '../components/navbar/navbar';
import { Home } from '../components/home/home';
const Index: NextPage = () => {
  return (
    <>
      <Head>
        <title>Alex Lam - real life story writer</title>
        <link
          rel='icon'
          type='image/png'
          href='data:image/svg+xml,<svg xmlns=%22http://www.w3.org/2000/svg%22 viewBox=%220 0 100 100%22><text y=%22.9em%22 font-size=%2290%22>🤯</text></svg>'
          sizes='16x16'
        />
        {/* <!-- Primary Meta Tags --> */}
        <title>Alex Lam - Real Life Story Writer</title>
        <meta name='title' content='Alex Lam - Real Life Story Writer' />
        <meta
          name='description'
          content="'Never Gonna Give You Up ' - Rick Astley. That's my song. My journey in happy and fun"
        />

        {/* <!-- Open Graph / Facebook --> */}
        <meta property='og:type' content='website' />
        <meta property='og:url' content='' />
        <meta property='og:title' content='Alex Lam - Real Life Story Writer' />
        <meta
          property='og:description'
          content="'Never Gonna Give You Up ' - Rick Astley. That's my song. My journey in happy and fun"
        />
        <meta property='og:image' content='' />

        {/* <!-- Twitter --> */}
        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='' />
        <meta
          property='twitter:title'
          content='Alex Lam - Real Life Story Writer'
        />
        <meta
          property='twitter:description'
          content="'Never Gonna Give You Up ' - Rick Astley. That's my song. My journey in happy and fun"
        />
        <meta property='twitter:image' content='' />
      </Head>
      <main>
        <Navbar />
        <Home />
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header', 'home'])),
  },
});

export default Index;
