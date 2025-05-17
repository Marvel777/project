import { Metadata } from "next";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/ui/timeline";
import { BackForwardButtons } from "@/components/back-forward-button";
import { VelocityScroll } from "@/components/magicui/scroll-based-velocity";

export const metadata: Metadata = {
  title: "About | Frontend Developer Portfolio",
  description: "Learn more about my background, experience, and journey as a frontend developer.",
};

export default function AboutPage() {
  const data = [
    {
      title: "2024 - Present",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Working on a CMS platform using Next.js, TypeScript, and Tailwind CSS. Responsible for developing scalable components, maintaining clean architecture, and mentoring junior developers on best practices.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/cms-1.png"
              alt="startup template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/cms-2.png"
              alt="startup template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-3.webp"
              alt="startup template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/templates/startup-4.webp"
              alt="startup template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "Early 2023",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            MERN Stack Developer
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Developed responsive web applications using MongoDB, Express.js, React, and Node.js. Collaborated with designers to create engaging user experiences.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/mern-1.png"
              alt="MERN stack development"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-md md:h-44 lg:h-60"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2022 - 2023",
      content: (
        <div>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Full Stack Developer
          </p>
          <p className="mb-4 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Built RESTful APIs and backend logic using Django. Designed and developed responsive frontend interfaces with HTML, CSS, and JavaScript for various client projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="https://assets.aceternity.com/pro/hero-sections.png"
              alt="hero template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dev-2.png"
              alt="feature template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="https://assets.aceternity.com/pro/bento-grids.png"
              alt="bento template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

          </div>
        </div>
      ),
    },
    {
      title: "2023 - 2024",
      content: (
        <div>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Information Technology Institute (ITI)
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Completed a one-month intensive MERN stack program covering MongoDB, Express.js, React, and Node.js.
            Built full-stack applications with RESTful APIs, user authentication, and frontend state management.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/iti.png"
              alt="hero template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
          </div>
        </div>
      ),
    },
    {
      title: "2020 - 2024",
      content: (
        <div>
          <p className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Computer Science Degree
          </p>
          <p className="mb-1 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            GPA: 3.42/4
          </p>
          <p className="mb-8 text-xs font-normal text-neutral-800 md:text-sm dark:text-neutral-200">
            Studied algorithms, data structures, software engineering principles, and completed various programming projects.
          </p>
          <div className="grid grid-cols-2 gap-4">
            <Image
              src="/dev-3.png"
              alt="hero template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />
            <Image
              src="/dev-4.png"
              alt="feature template"
              width={ 500 }
              height={ 500 }
              className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60"
            />

          </div>
        </div>
      ),
    },
  ];
  return (
    <div className="container px-4 mx-auto py-24 md:py-32">
      <BackForwardButtons />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">

        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>

          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <p>
              Hello, I&apos;m a passionate frontend developer with over 6 years of experience crafting exceptional digital experiences for the web. I specialize in building high-performance, responsive applications that solve real-world problems.
            </p>

            <p>
              My journey in web development began with a fascination for creating visually appealing and interactive interfaces. Over the years, I&apos;ve developed expertise in modern JavaScript frameworks, particularly React and Next.js, while maintaining a strong foundation in core web technologies.
            </p>

            <p>
              What sets me apart is my commitment to writing clean, maintainable code and my meticulous attention to detail. I believe that great software is not just about solving problems, but doing so in a way that&apos;s elegant, efficient, and future-proof.
            </p>

            <p>
              When I&apos;m not coding, you can find me exploring new web technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement. I&apos;m constantly learning and evolving as a developer, staying up-to-date with the latest industry trends and best practices.
            </p>

            <p>
              I&apos;m currently open to new opportunities where I can leverage my skills to create impactful digital experiences. If you&apos;re looking for a developer who combines technical expertise with a passion for user-centered design, I&apos;d love to connect.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild>
              <a href="https://drive.google.com/file/d/1p5wkAbYY0Hlk-o1vU5p9Gh5OXKMQ0MpF/view?usp=drive_link" download>
                <FileDown className="mr-2 h-4 w-4" />
                Download CV
              </a>
            </Button>
            <Button variant="outline" asChild>
              <Link href="/contact">
                <Mail className="mr-2 h-4 w-4" />
                Contact Me
              </Link>
            </Button>
          </div>
        </div>

        <div className="flex items-center justify-center">
          <div className="relative w-full max-w-md aspect-square rounded-2xl overflow-hidden border-8 border-muted">
            <Image
              src="/photo.png"
              alt="Professional "
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>

      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">My Journey</h2>
        <VelocityScroll defaultVelocity={ 2 }>
          Modern. Minimal. Powerful.
        </VelocityScroll>
        <div className="relative w-full overflow-clip">
          <Timeline data={ data } />
        </div>
      </div>

    </div>
  );
}
