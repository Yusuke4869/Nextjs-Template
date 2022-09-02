import Head from "next/head";
import type { FC, ReactNode } from "react";
import Footer from "~/components/layout/footer";
import Header from "~/components/layout/header";

interface Information {
  pageTitle: string;
  pageDescription: string;
  pageImage: string;
}

type Props = {
  children: ReactNode;
  pageTitle: string;
  pageDescription?: string;
  pageImage?: string;
};

const DefaultDescription = "";
const DefaultImage = "";

const Metas: FC = () => (
  <>
    <meta charSet="utf-8" />
    <meta name="viewport" content="initial-scale=1.0, width=device-width" />
    <meta name="theme-color" content="#ffffff" />
  </>
);

const SeoMetas: FC<Information> = ({ pageTitle, pageDescription, pageImage }) => (
  <>
    <meta name="name" content={pageTitle} />
    <meta name="image" content={pageImage} />
    <meta name="description" content={pageDescription} />
  </>
);

const OgpMetas: FC<Information> = ({ pageTitle, pageDescription, pageImage }) => (
  <>
    <meta property="og:title" content={pageTitle} />
    <meta property="og:description" content={pageDescription} />
    <meta property="og:image" content={pageImage} />
    <meta property="og:image:alt" content="" />
    <meta property="og:site_name" content="" />
  </>
);

const TwitterMetas: FC<Information> = ({ pageTitle, pageDescription, pageImage }) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:site" content="" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={pageImage} />
  </>
);

const Layout: FC<Props> = ({ children, pageTitle, pageDescription = DefaultDescription, pageImage = DefaultImage }) => (
  <>
    <Head>
      <title>{pageTitle}</title>
      <Metas />
      <SeoMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
      <OgpMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
      <TwitterMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
    </Head>
    <main>
      <div>
        <Header />
        {children}
      </div>
      <Footer />
    </main>
  </>
);

export default Layout;
