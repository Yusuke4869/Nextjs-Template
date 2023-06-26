import type { Metadata, NextPage } from "next";

export const metadata: Metadata = {
  title: "Hello World!",
};

const Home: NextPage = () => (
  <div>
    <h1>Hello World</h1>
  </div>
);

export default Home;
