/* eslint-disable react/prop-types */
"use client";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { cn } from "@/lib/utils";

export default function WordPullUp({
  words,
  tag = "div", // Default to div, can be overridden to h1, h2, etc.

  wrapperFramerProps = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.2, // Stagger the animation for each word
        delayChildren: 0.2, // Delay before starting to stagger the words
      },
    },
  },

  framerProps = {
    hidden: { y: 20, opacity: 0 },
    show: { y: 0, opacity: 1 },
  },

  className,
  ...props
}) {
  // Detect when the component is near the center of the viewport
  const { ref, inView } = useInView({
    threshold: 0.5, // Trigger when 50% of the component is visible
    rootMargin: "-5% 0px -20% 0px", // Start animation when component is 20% above the center
    triggerOnce: false, // Animate every time the component enters the viewport
  });

  // Create a dynamic motion component based on the tag prop
  const MotionComponent = motion[tag];

  return (
    <MotionComponent
      ref={ref} // Attach ref to the element to track its visibility
      data-site-heading="true"
      data-word-pull-up="true"
      variants={wrapperFramerProps}
      initial="hidden"
      animate={inView ? "show" : "hidden"} // Animate only when the component is in view
      className={cn(
        "site-heading-theme font-playfair text-center text-4xl font-bold leading-[5rem] tracking-normal drop-shadow-sm",
        className
      )}
      {...props}
    >
      {words.split(" ").map((word, i) => (
        <motion.span
          key={i}
          variants={framerProps} // Animate each word separately
          style={{ display: "inline-block", paddingRight: "8px" }}
        >
          {word === "" ? <span>&nbsp;</span> : word}{" "}
        </motion.span>
      ))}
    </MotionComponent>
  );
}
