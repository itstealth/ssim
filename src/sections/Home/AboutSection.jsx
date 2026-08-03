"use client";

import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import {
  GraduationCap,
  Calendar,
  Award,
  ArrowRight,
  BookCheck,
  Handshake,
  BrainCircuit,
  ChevronDown,
  ChevronUp,
} from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import { useIsMobile } from "@/hooks/use-mobile";
import { useState, useEffect, useRef } from "react";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import Image from "next/image";

const AboutSSIM = "/about_ssim/About.webp";

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 },
};

// Counter Animation Hook
const useCountAnimation = (end, duration = 2000, shouldStart = false) => {
  const [count, setCount] = useState(0);
  const countRef = useRef(0);

  useEffect(() => {
    if (!shouldStart) {
      setCount(0);
      return;
    }

    const startTime = Date.now();
    const startValue = 0;

    const animate = () => {
      const now = Date.now();
      const progress = Math.min((now - startTime) / duration, 1);

      // Easing function for smooth animation
      const easeOutExpo = 1 - Math.pow(2, -10 * progress);
      const currentCount = Math.floor(
        startValue + (end - startValue) * easeOutExpo,
      );

      countRef.current = currentCount;
      setCount(currentCount);

      if (progress < 1) {
        requestAnimationFrame(animate);
      } else {
        setCount(end);
      }
    };

    animate();
  }, [end, duration, shouldStart]);

  return count;
};

// Extract numeric value from stat value
const extractNumber = (value) => {
  const numericString = value.replace(/[^0-9]/g, "");
  return parseInt(numericString) || 0;
};

// Format the display value with prefix/suffix
const formatValue = (originalValue, animatedNumber) => {
  if (originalValue.includes("₹")) {
    return `₹${animatedNumber.toLocaleString()}`;
  }
  if (originalValue.includes("+")) {
    return `${animatedNumber.toLocaleString()}+`;
  }
  return animatedNumber.toLocaleString();
};

// Animated Counter Component
const AnimatedCounter = ({ value, shouldStart, delay = 0 }) => {
  const numericValue = extractNumber(value);
  const animatedValue = useCountAnimation(
    numericValue,
    2000 + delay,
    shouldStart,
  );

  return (
    <span className="text-3xl font-bold text-mainBlue">
      {formatValue(value, animatedValue)}
    </span>
  );
};

const stats = [
  {
    icon: <Calendar className="w-6 h-6" />,
    value: "34+",
    label: "Years of Excellence",
    description: "Academic excellence since 1992",
  },
  {
    icon: <Handshake className="w-6 h-6" />,
    value: "350+",
    label: "Corporate",
    description: "Partners",
  },
  {
    icon: <GraduationCap className="w-6 h-6" />,
    value: "6500+",
    label: "Alumni",
    description: "Network",
  },
  {
    icon: <Award className="w-6 h-6" />,
    value: "Up to ₹1L",
    label: "Merit",
    description: "Scholarship",
  },
  {
    icon: <BrainCircuit className="w-6 h-6" />,
    value: "50+",
    label: "New-Age",
    description: "Specialisations",
  },
  {
    icon: <BookCheck className="w-6 h-6" />,
    value: "9",
    label: "Value Added",
    description: "Certification Programs",
  },
];

export default function AboutSection() {
  const isMobile = useIsMobile();
  const [isExpanded, setIsExpanded] = useState(false);

  // Intersection observer for stats animation
  const [statsRef, statsInView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  const paragraphs = [
    <p className="text-lg leading-relaxed" key="1">
      Located in the heart of Hyderabad and Secunderabad, Siva Sivani Institute
      of Management (SSIM) is a{" "}
      <strong>premier institution with over three decades of excellence</strong>{" "}
      in management education. Renowned for its{" "}
      <strong>strong ethical foundation</strong>, this{" "}
      <strong>
        AICTE accredited, NAAC, NBA for PGDM, AIU, SAQS and AACSB Member
        institution
      </strong>{" "}
      delivers industry-relevant learning through an{" "}
      <strong>
        innovative curriculum and experienced faculty blending academic and
        corporate insights
      </strong>
      .
    </p>,
    <p className="text-lg leading-relaxed" key="2">
      Recognized as an{" "}
      <strong>
        A<sup>+++</sup> B-School by Business India (2024)
      </strong>
      , SSIM ranks{" "}
      <strong>
        21st among private standalone B-Schools in India (Outlook 2025) and 2nd
        in Telangana
      </strong>{" "}
      (Outlook, CSR, and GHRDC Times 2025). Its{" "}
      <strong>
        vibrant, extremely qualified, and talented alumni network spans across
        the globe
      </strong>
      , fostering valuable professional connections and success stories across
      industries, domains, and profiles.
    </p>,
    <p className="text-lg leading-relaxed" key="3">
      With a focus on <strong>holistic development of individuals</strong> with
      special inclination towards{" "}
      <strong>
        critical decision-making bordering on creativity, innovation,
        sustainability, ethics, and practical applicability
      </strong>
      , SSIM continues to shape future-ready leaders year-on-year.
    </p>,
    <p className="text-lg leading-relaxed" key="4">
      Embark on your transformative journey with SSIM today and unlock limitless
      opportunities of growth and success ready to embrace you!!!
    </p>,
  ];

  const contentToShow =
    isMobile && !isExpanded ? paragraphs.slice(0, 2) : paragraphs;

  return (
    <section className="relative py-16 bg-white md:py-24">
      {/* <div className="absolute inset-0 bg-grid-gray-100/50 [mask-image:radial-gradient(white,transparent_85%)] -z-10" /> */}

      <div className="container md:px-6 mx-auto">
        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Image */}
          <div className="lg:sticky lg:top-20 hidden lg:block h-fit">
            <motion.div
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <Card className="overflow-hidden border-0 shadow-2xl rounded-none">
                <CardContent className="p-0">
                  <div className="relative aspect-square">
                    <img
                      alt="SSIM Campus Life"
                      src={AboutSSIM}
                      className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" /> */}
                    <Badge className="absolute top-4 left-4 bg-red-600 animate-pulse text-white  backdrop-blur">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Excellence in Education
                    </Badge>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          </div>

          {/* Right Column - Content */}
          <div className="lg:min-h-screen">
            <motion.div
              className="space-y-8"
              initial="initial"
              whileInView="animate"
              viewport={{ once: true }}
              variants={fadeIn}
            >
              <div className="space-y-4">
                <h3 className="text-xl md:text-2xl font-medium text-mainBlue mb-2 border-0">
                  About SSIM
                </h3>
                <WordPullUp
                  words="Top Management Institute in Hyderabad"
                  tag="h1"
                  className="text-4xl md:text-5xl font-bold tracking-tight text-red-600 text-left mt-8 mb-0 md:mb-6"
                />
                <div className="w-32 h-1.5 bg-red-600/80 rounded-none" />
              </div>
              <Card className="overflow-hidden block lg:hidden mt-8 border-0 shadow-2xl rounded-none">
                <CardContent className="p-0">
                  <div className="relative w-full aspect-square">
                    <Image
                      src={AboutSSIM}
                      alt="SSIM Campus Life"
                      fill
                      priority
                      className="object-cover w-full h-full transform transition-transform hover:scale-105 duration-700"
                      sizes="(max-width: 768px) 100vw, (max-width: 1024px) 100vw, 100vw"
                    />
                    {/* <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/20 to-transparent" /> */}
                    <Badge className="absolute top-4 left-4 bg-red-600 animate-pulse text-white  backdrop-blur">
                      <GraduationCap className="w-4 h-4 mr-2" />
                      Excellence in Education
                    </Badge>
                  </div>
                </CardContent>
              </Card>

              <div className="space-y-6 text-gray-600">
                {contentToShow}
                {isMobile && (
                  <Button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="group gap-0 px-0 py-0 h-0 pt-5 bg-transparent rounded-none hover:bg-transparent"
                    size="lg"
                  >
                    <div className="bg-red-600 h-11 flex items-center pl-6 pr-4 hover:bg-red-700 text-white">
                      {isExpanded ? "Read Less" : "Read More"}
                    </div>
                    <div className="bg-mainBlue h-11 flex items-center px-4 text-white">
                      {isExpanded ? (
                        <ChevronUp className="h-4 w-4" />
                      ) : (
                        <ChevronDown className="h-4 w-4 transition-transform group-hover:translate-y-0.5" />
                      )}
                    </div>
                  </Button>
                )}
              </div>

              {/* Stats Grid */}
              <div
                ref={statsRef}
                className="grid grid-cols-2 md:grid-cols-3 gap-2 sm:gap-6 mt-8"
              >
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    className={`p-6 rounded-sm bg-white shadow-lg hover:shadow-xl transition-shadow`}
                    whileHover={{ y: -5 }}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                  >
                    <div className="flex flex-col space-y-2">
                      <div className="p-2 bg-red-600 w-fit rounded-lg text-white">
                        {stat.icon}
                      </div>
                      <AnimatedCounter
                        value={stat.value}
                        shouldStart={statsInView}
                        delay={index * 200}
                      />
                      <div className="text-sm font-medium text-gray-600">
                        {stat.label}
                      </div>
                      <div className="text-xs text-gray-500">
                        {stat.description}
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* CTA Button */}
              <Link
                href="/about/vision-mission"
                onClick={() => {
                  window.scrollTo({
                    top: 0,
                    behavior: "smooth",
                  });
                }}
              >
                <Button
                  className="group text-white gap-0 px-0 py-0 h-0 rounded-none mt-8"
                  size="lg"
                >
                  <div className="bg-red-600 mt-8 h-11 flex items-center pl-8 pr-4 hover:bg-red-700">
                    Learn More About SSIM
                  </div>
                  <div className="bg-mainBlue mt-8 h-11 flex items-center px-4">
                    <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Button>
              </Link>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
}
