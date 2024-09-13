"use client"

import Card from "@/components/Card/Card";
import CardCarousel from "@/components/Card/CardCarousel.jsx";
import ImageCarousel from "@/components/Carousel/Carousel";
import Navbar from "@/components/Navbar/Navbar";
import SearchBox from "@/components/SearchBox/SearchBox";
import ServiveCard from "@/components/ServiceCard/ServiceCard"; 
import servicecard_1 from "@/app/assets/ServiceCard_1.jpg";
import servicecard_2 from "@/app/assets/ServiceCard_2.jpg";
import Annual_Trade from "@/app/assets/Annual_Trade.jpg";
import Footer_img from "@/app/assets/Footer_img.jpg";
import Link from "next/link";



export default function Home() {
  
  const images = [
    "https://images.unsplash.com/photo-1579818277109-ad8de2e7cf80?q=80&w=2960&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1465146344425-f00d5f5c8f07?q=80&w=2952&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1574169208507-84376144848b?q=80&w=2958&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ]

  const cardImages = [
    "https://images.unsplash.com/photo-1482938289607-e9573fc25ebb?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1433086966358-54859d0ed716?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1509316975850-ff9c5deb0cd9?q=80&w=3072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1518495973542-4542c06a5843?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1513836279014-a89f7a76ae86?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1504893524553-b855bce32c67?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1500375592092-40eb2168fd21?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1498462440456-0dba182e775b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1505118380757-91f5f5632de0?q=80&w=2902&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    "https://images.unsplash.com/photo-1491378630646-3440efa57c3b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
  ];

  const cards = cardImages.map((image) => ({
    image,
    title: 'Rudram Market Development',
    subtitle: 'Rudram Market Development',
  }));

  const bgImage = "https://images.unsplash.com/photo-1552377047-a42fd8b1341b?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";


  return (
    <main className="w-screen min-h-screen bg-white">
      <div className="">
        <Navbar />
        <SearchBox />
        <ImageCarousel images={images} interval={3000} />
      </div>
      <div className="w-[90vw] mx-auto flex flex-col justify-center py-8">
        <div className="flex justify-between items-center">
          <h2 className="text-black text-3xl">{"Top Vendors"}</h2>
          <Link href="/card" className="cursor-pointer">See All</Link>
        </div>
        <div className="flex justify-center items-center w-full">
          <CardCarousel cards={cards} />
        </div>
      </div>
      <div className="w-[90vw] mx-auto flex flex-col justify-center py-8">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-black text-3xl">{"Services"}</h2>
          <h2 className="cursor-pointer">See All</h2>
        </div>
        <div className="flex gap-2 justify-bwetween items-center w-full">
          <ServiveCard 
            url="https://images.unsplash.com/photo-1503756234508-e32369269deb?q=80&w=2232&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Anything and Everything from Planning to Execution"
            buttonText="Explore"
            height="450px"
            image = {servicecard_1}
          />
          <ServiveCard 
            url="https://images.unsplash.com/photo-1491378630646-3440efa57c3b?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Looking to draw cutomers to your exhibition booth?"
            buttonText="Schedule a call"
            height="450px"
            image = {servicecard_2}
          />
        </div>
      </div>
      <div className="py-16 h-86 grid mx-auto grid-cols-3 gap-16 w-[90vw]">
        <div className="col-span-1 flex flex-col justify-center h-full">
          <h2 className="text-black text-4xl font-medium">
            {"Let's design your annual trade show"}
          </h2>
          <h2 className="text-gray-600 font-medium">
            {"A one stop 360 platform to find the best vendors for your needs"}
          </h2>
          <button className="px-4 w-fit py-3 bg-black text-white mt-8 rounded-lg">
            Get Started
          </button>
        </div>
        <div className="col-span-2">
          <ServiveCard 
            url="https://images.unsplash.com/photo-1502433393943-3d9f527de311?q=80&w=3087&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            text="Anything and Everything from Planning to Execution"
            buttonText="Explore"
            height="300px"
            image = {Annual_Trade}
          />
        </div>
      </div>
      <div className="w-[90vw] mx-auto py-16">
        <ServiveCard 
          url="https://images.unsplash.com/photo-1500285426772-410d8f2243d0?q=80&w=3088&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          text="Know more about Constro India 2025"
          buttonText="Enroll now"
          height="400px"
          image = {Footer_img}
        />
      </div>
    </main>
  );
}
