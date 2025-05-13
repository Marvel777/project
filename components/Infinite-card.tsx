"use client";

import React from "react";
import { InfiniteMovingCards } from "./ui/infinite-moving-cards";

export function InfiniteCard() {
    return (
        <div className="h-auto rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
            <InfiniteMovingCards
                items={ testimonials }
                direction="left"
                speed="slow"
            />
        </div>
    );
}

const testimonials = [
    {
        quote: "Working with you was an absolute pleasure! Your attention to detail and clean code made our project seamless. The UI you built is stunning and user-friendly.",
        name: "Ahmed Hassan",
        title: "CEO, NileTech Solutions",
    },
    {
        quote: "You transformed our outdated website into a modern, responsive masterpiece. The performance improvements were incredible, and our users love the new experience!",
        name: "Mariam Abdelrahman",
        title: "Product Manager, CairoSoft",
    },
    {
        quote: "Your frontend skills are unmatched. You delivered our project ahead of schedule, and the animations you implemented made our app stand out. Highly recommend!",
        name: "Youssef Mahmoud",
        title: "CTO, Pharos Innovations",
    },
    {
        quote: "As a backend developer, I appreciate how well you structured the frontend. The APIs integrated smoothly, and your React components were perfectly optimized.",
        name: "Nadia El-Sayed",
        title: "Lead Developer, DeltaCode",
    },
    {
        quote: "You took our vague ideas and turned them into an intuitive, beautiful interface. Our conversion rates skyrocketed after your redesign!",
        name: "Karim Farouk",
        title: "Marketing Director, Luxor Digital",
    },
];