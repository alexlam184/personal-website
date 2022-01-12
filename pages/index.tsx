import type { NextPage } from "next";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Home.module.css";
import { useTranslation } from "next-i18next";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";

const Home: NextPage = () => {
  const { t } = useTranslation("home");

  return (
    <div className={styles.container}>
      <h1 className="text-3xl font-bold underline">{t("description")}</h1>
    </div>
  );
};

export const getServerSideProps = async ({ locale }) => ({
  // This is an async function that you need to include on your page-level components, via either getStaticProps or getServerSideProps (depending on your use case):
  props: {
    ...(await serverSideTranslations(locale, ["home"])),
    // Will be passed to the page component as props
  },
});

export default Home;
