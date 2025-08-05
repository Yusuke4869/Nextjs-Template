import { Noto_Sans_JP } from "next/font/google";

import "../styles/globals.css";
import { ReactScan } from "./_components/ReactScan";

import type { FC, PropsWithChildren } from "react";

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const RootLayout: FC<PropsWithChildren> = ({ children }) => (
  <html lang="ja">
    {process.env.NODE_ENV !== "production" && process.env.REACT_SCAN === "true" && <ReactScan />}
    <body className={notoSansJp.className}>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
