"use client";

import { useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Particles } from "./magicui/particles";
import { TextAnimate } from "./magicui/text-animate";
import { AnimatedShinyText } from "./magicui/animated-shiny-text";

export function HeroSection() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const handleScrollClick = () => {
    window.scrollTo({
      top: window.innerHeight,
      behavior: "smooth",
    });
  };

  return (
    <section className="relative min-h-screen flex flex-col justify-center items-center pt-16 pb-8 overflow-hidden">
      {/* Full background DotPattern */ }
      <Particles
        className="absolute inset-0 z-0"
        quantity={ 100 }
        ease={ 80 }
        color={ '#737373' }
        refresh
      />


      {/* Optional grid overlay */ }
      <div className="absolute inset-0 bg-grid-pattern opacity-5 dark:opacity-10 z-0" />

      {/* Main container content (z-10 ensures it sits above background) */ }
      <div className="container px-4 mx-auto z-10">
        <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-16 overflow-hidden">
          {/* Text Content */ }
          <motion.div
            className="flex-1 text-center lg:text-left"
            initial={ { opacity: 0, y: 30 } }
            animate={ { opacity: 1, y: 0 } }
            transition={ { duration: 0.6 } }
          >

            <TextAnimate className="font-bold text-3xl md:text-4xl lg:text-5xl mb-4 whitespace-normal dark:text-white " animation="blurInUp" by="word" delay={ 0 } duration={ 1 } >
              Hello, I&apos;m Marvel,
              Frontend Developer
            </TextAnimate>
            <motion.p
              className="text-muted-foreground text-lg md:text-xl max-w-xl mx-auto lg:mx-0 mb-8"
              initial={ { opacity: 0 } }
              animate={ { opacity: 1 } }
              transition={ { delay: 0.3, duration: 0.6 } }
            >
              <AnimatedShinyText
                shimmerWidth={ 100 }
                className="inline-flex items-center justify-center px-4 py-1 transition ease-out hover:text-neutral-600 hover:duration-300 hover:dark:text-neutral-400" >
                I build exceptional, high-performing websites and applications with clean, elegant code and pixel-perfect designs.
              </AnimatedShinyText>
            </motion.p>
            <motion.div
              className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start"
              initial={ { opacity: 0, y: 20 } }
              animate={ { opacity: 1, y: 0 } }
              transition={ { delay: 0.6, duration: 0.6 } }
            >
              <Button size="lg" asChild>
                <Link href="/projects">
                  View My Work
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button className="dark:text-white" variant="outline" size="lg" asChild>
                <Link href="/contact">Contact Me</Link>
              </Button>
            </motion.div>
          </motion.div>

          {/* Image */ }
          <motion.div
            className="flex-1 flex justify-center items-center"
            initial={ { opacity: 0, scale: 0.8 } }
            animate={ { opacity: 1, scale: 1 } }
            transition={ { delay: 0.3, duration: 0.6 } }
          >
            <div className="relative w-64 h-64 md:w-80 md:h-80 lg:w-96 lg:h-96 rounded-3xl overflow-hidden border-4 border-primary/10">
              <Image
                src="/photo.png"
                alt="Professional"
                className="object-cover"
                fill
                priority
              />
            </div>
          </motion.div>
        </div>
      </div>

      {/* Scroll down icon */ }
      <motion.div
        className="absolute bottom-8 left-1/2 -translate-x-1/2 cursor-pointer z-10"
        initial={ { opacity: 0, y: -10 } }
        animate={ { opacity: 1, y: 0 } }
        transition={ { delay: 1, duration: 0.6 } }
        onClick={ handleScrollClick }
        ref={ scrollRef }
      >
        <ChevronDown className="h-10 w-10 text-primary animate-bounce" />
      </motion.div>
    </section>

  );
}