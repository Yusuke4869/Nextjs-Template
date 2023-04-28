import { Roboto } from "next/font/google";
import type { FC, ReactNode } from "react";
import Footer from "~/components/footer";
import Header from "~/components/header";
import "~/styles/global.scss";

type Props = {
  children: ReactNode;
};

const roboto = Roboto({
  weight: "400",
  style: ["normal"],
  subsets: ["latin"],
  display: "swap",
});

const Layout: FC<Props> = ({ children }) => (
  <div className={roboto.className}>
    <Header />
    <main>{children}</main>
    <Footer />
  </div>
);

export default Layout;
