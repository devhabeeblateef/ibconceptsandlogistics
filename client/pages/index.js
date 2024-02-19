import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./hero";
import Show from "./show";
import About from "./about";
import Why from "./why";
import ProductDisplay from "./productdisplay";

export default function Home() {
  return (
    <>
      <Hero/>
      <Show/>
      <About/>
      <Why/>
      <ProductDisplay/>
    </>
      );
}
