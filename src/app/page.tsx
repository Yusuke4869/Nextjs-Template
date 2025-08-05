import type { Metadata } from "next";
import type { FC } from "react";

export const metadata: Metadata = {
  title: "Hello World!",
};

const Home: FC = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default Home;
