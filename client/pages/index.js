import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./hero";
import Show from "./show";
import About from "./about";

export default function Home() {
  return (
    <>
      <Hero/>
      <Show/>
      <About/>
    </>
      );
}
