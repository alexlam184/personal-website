import type { NextPage } from 'next';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';

const Home: NextPage = () => {
  const router = useRouter();
  const { t } = useTranslation('home');

  return (
    <>
      <main>
        <div>
          <Link href='/' locale={router.locale === 'en' ? 'hk' : 'en'} passHref>
            <button>{t('change-locale')}</button>
          </Link>
        </div>
        {t('description')}
      </main>
    </>
  );
};

export const getStaticProps = async ({ locale }: any) => ({
  props: {
    ...(await serverSideTranslations(locale, ['header', 'home'])),
  },
});

export default Home;
