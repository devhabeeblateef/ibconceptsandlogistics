import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./hero";
import Show from "./show";
const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <>
      <Hero/>
      <Show/>
    </>
      );
}
