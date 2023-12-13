import { Noto_Sans_JP } from "next/font/google";

import type { FC, ReactNode } from "react";

import "~/styles/globals.css";

type Props = {
  children: ReactNode;
};

const notoSansJp = Noto_Sans_JP({
  subsets: ["latin"],
  variable: "--font-noto-sans-jp",
});

const RootLayout: FC<Props> = ({ children }) => (
  <html lang="ja">
    <body className={notoSansJp.className}>
      <main>{children}</main>
    </body>
  </html>
);

export default RootLayout;
