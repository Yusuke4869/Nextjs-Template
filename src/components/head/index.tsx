import type { FC } from "react";

interface Information {
  pageTitle: string;
  pageDescription: string;
  pageImage: string;
}

type Props = {
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
    <meta property="og:image:alt" content={pageDescription} />
    <meta property="og:site_name" content={pageTitle} />
  </>
);

const TwitterMetas: FC<Information> = ({ pageTitle, pageDescription, pageImage }) => (
  <>
    <meta name="twitter:card" content="summary_large_image" />
    <meta name="twitter:title" content={pageTitle} />
    <meta name="twitter:description" content={pageDescription} />
    <meta name="twitter:image" content={pageImage} />
  </>
);

const HeadComponent: FC<Props> = ({ pageTitle, pageDescription = DefaultDescription, pageImage = DefaultImage }) => (
  <>
    <title>{pageTitle}</title>
    <Metas />
    <SeoMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
    <OgpMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
    <TwitterMetas pageTitle={pageTitle} pageDescription={pageDescription} pageImage={pageImage} />
  </>
);

export default HeadComponent;
