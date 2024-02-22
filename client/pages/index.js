import Image from "next/image";
import { Inter } from "next/font/google";
import Hero from "./hero";
import Show from "./show";
import About from "./about";
import Why from "./why";
import ProductDisplay from "./productdisplay";
import Footer from "./UI/Footer";
import Nav from "./UI/Nav";
export default function Home() {

  return (
    <>
      <Nav/>
      <Hero/>
      <Show/>
      <About/>
      <Why/>
      <Footer/>
    </>
      );
}
