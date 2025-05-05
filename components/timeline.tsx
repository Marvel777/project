"use client";

import { motion } from "framer-motion";
import { timelineItems } from "@/lib/constants";

export function Timeline() {
  return (
    <div className="relative py-8">
      {/* Vertical line */}
      <div className="absolute left-4 md:left-1/2 top-0 bottom-0 w-px bg-border -ml-px" />
      
      <div className="relative">
        {timelineItems.map((item, index) => (
          <TimelineItem 
            key={index}
            item={item}
            index={index}
            isLeft={index % 2 === 0}
          />
        ))}
      </div>
    </div>
  );
}

function TimelineItem({ 
  item, 
  index, 
  isLeft 
}: { 
  item: any; 
  index: number;
  isLeft: boolean;
}) {
  return (
    <motion.div 
      className={`mb-12 flex md:items-center ${isLeft ? 'md:flex-row-reverse' : 'md:flex-row'}`}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.1 }}
    >
      {/* Content Container */}
      <div className="md:w-[calc(50%-2rem)] px-0 md:px-8">
        <div className="bg-card border rounded-lg p-6 shadow-sm">
          <h3 className="font-bold text-lg mb-2">{item.title}</h3>
          <p className="text-primary font-medium text-sm mb-2">{item.date}</p>
          <p className="text-muted-foreground text-sm">{item.description}</p>
        </div>
      </div>
      
      {/* Timeline Node */}
      <div className="flex items-center w-8 md:w-16 relative z-10">
        <div className="h-8 w-8 bg-background border-4 border-primary rounded-full flex items-center justify-center">
          <item.icon className="h-4 w-4 text-primary" />
        </div>
      </div>
      
      {/* Empty space for alignment (mobile shows only content, desktop shows content on alternating sides) */}
      <div className="hidden md:block md:w-[calc(50%-2rem)]" />
    </motion.div>
  );
}