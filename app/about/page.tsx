import { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { FileDown, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Timeline } from "@/components/timeline";

export const metadata: Metadata = {
  title: "About | Frontend Developer Portfolio",
  description: "Learn more about my background, experience, and journey as a frontend developer.",
};

export default function AboutPage() {
  return (
    <div className="container px-4 mx-auto py-24 md:py-32">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 mb-16">
        <div>
          <h1 className="text-3xl md:text-4xl font-bold mb-6">About Me</h1>
          
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none">
            <p>
              Hello, I'm a passionate frontend developer with over 6 years of experience crafting exceptional digital experiences for the web. I specialize in building high-performance, responsive applications that solve real-world problems.
            </p>
            
            <p>
              My journey in web development began with a fascination for creating visually appealing and interactive interfaces. Over the years, I've developed expertise in modern JavaScript frameworks, particularly React and Next.js, while maintaining a strong foundation in core web technologies.
            </p>
            
            <p>
              What sets me apart is my commitment to writing clean, maintainable code and my meticulous attention to detail. I believe that great software is not just about solving problems, but doing so in a way that's elegant, efficient, and future-proof.
            </p>
            
            <p>
              When I'm not coding, you can find me exploring new web technologies, contributing to open-source projects, or sharing my knowledge through blog posts and community engagement. I'm constantly learning and evolving as a developer, staying up-to-date with the latest industry trends and best practices.
            </p>
            
            <p>
              I'm currently open to new opportunities where I can leverage my skills to create impactful digital experiences. If you're looking for a developer who combines technical expertise with a passion for user-centered design, I'd love to connect.
            </p>
          </div>
          
          <div className="flex flex-col sm:flex-row gap-4 mt-8">
            <Button asChild>
              <a href="/assets/resume.pdf" download>
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
              src="https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2"
              alt="Professional portrait"
              className="object-cover"
              fill
              priority
            />
          </div>
        </div>
      </div>
      
      <div className="mb-16">
        <h2 className="text-2xl md:text-3xl font-bold mb-8 text-center">My Journey</h2>
        <Timeline />
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <InfoCard 
          title="Education" 
          items={[
            "Computer Science, B.S., Stanford University",
            "Web Development Bootcamp, Full Stack Academy",
            "UI/UX Design Certificate, Interaction Design Foundation"
          ]} 
        />
        
        <InfoCard 
          title="Certifications" 
          items={[
            "AWS Certified Developer Associate",
            "Google Professional Web Developer",
            "React Advanced Concepts Certification"
          ]} 
        />
        
        <InfoCard 
          title="Interests" 
          items={[
            "Open Source Contribution",
            "UI/UX Design Principles",
            "Web Performance Optimization",
            "Technical Writing & Documentation"
          ]} 
        />
      </div>
    </div>
  );
}

function InfoCard({ title, items }: { title: string; items: string[] }) {
  return (
    <div className="bg-card border rounded-lg p-6">
      <h3 className="text-xl font-semibold mb-4">{title}</h3>
      <ul className="space-y-2">
        {items.map((item, index) => (
          <li key={index} className="flex items-start">
            <span className="mr-2 text-primary">•</span>
            <span className="text-muted-foreground">{item}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}