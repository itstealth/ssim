"use client";
import { useState, useEffect, useRef } from "react";
import { Users, GraduationCap, Landmark, LineChart, Play, Pause, FastForward, Rewind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import WordPullUp from "@/components/ui/word-pull-up";
import { Dialog, DialogContent, DialogClose } from "@/components/ui/dialog";
import Link from "next/link";
import { useRouter } from "next/navigation";
import Image from "next/image";

export default function AcademicPrograms() {
  const router = useRouter();
  const [activeVideo, setActiveVideo] = useState(0);
  const [videoOpen, setVideoOpen] = useState(false);
  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);
  const [localVideoOpen, setLocalVideoOpen] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);
  const [videoLoaded, setVideoLoaded] = useState(false);
  const [videoError, setVideoError] = useState(false);
  const [videoSrc, setVideoSrc] = useState("");
  const [forwardAnimating, setForwardAnimating] = useState(false);
  const [backwardAnimating, setBackwardAnimating] = useState(false);
  const [showControls, setShowControls] = useState(true);
  const controlsTimeoutRef = useRef(null);
  const videoRef = useRef(null);

  useEffect(() => {
    if (!isHovered && !videoOpen) {
      const timer = setInterval(() => {
        setIsAnimating(true);
        setTimeout(() => {
          setActiveVideo((prev) => (prev + 1) % features.length);
          setIsAnimating(false);
        }, 500);
      }, 3000);

      return () => clearInterval(timer);
    }
  }, [isHovered, videoOpen]);

  const features = [
    {
      title: "PGDM",
      subtitle: "Triple Specialisation",
      icon: <GraduationCap className="w-6 h-6" />,
      description: [
        <span key="1">
          SSIM's two-year Post-Graduation Diploma in Management (PGDM) program
          is <strong className="text-red-600">NBA accredited</strong> and
          uniquely designed to push our students to go beyond their boundaries
          to reach their aspirational careers.
        </span>,
        <span key="2">
          The two-year PGDM program will prepare our students with various{" "}
          <strong className="text-red-600">
            cross-functional skills and life skills
          </strong>
          : Communication skills, Decision making, Leadership Skills,
          Problem-solving, Teamwork, Experiential Learning and several
          industry-relevant skills to face this VUCA world.
        </span>,
        <span key="3">
          These skills will help our students to achieve their career
          aspirations and learn to exhibit their best selves.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=aurjFtjWkIc",
      link: "/programs/pgdm-triple-specialisation",
      link1: "https://apply.ssim.ac.in",
    },
    {
      title: "PGDM - BIFS",
      subtitle: "Banking, Insurance & Financial Services",
      icon: <Landmark className="w-6 h-6" />,
      description: [
        <span key="1">
          The Post-Graduation Diploma in Management – Banking, Insurance, and
          Financial Services (PGDM-BIFS) at Siva Sivani Institute of Management
          (SSIM) is designed to provide management graduates with{" "}
          <strong className="text-red-600">
            in-depth knowledge of the Banking, Financial Services, and Insurance
            (BFSI) sectors
          </strong>
          . These industries play a vital role in driving economic growth,
          offering risk coverage, and ensuring financial security.
        </span>,
        <span key="2">
          The BFSI sector, which is rapidly evolving with advancements in{" "}
          <strong className="text-red-600">
            AI, Blockchain, and robotic process automation
          </strong>
          , presents significant career opportunities. However, there is a
          shortage of qualified professionals to meet the sector's growing
          demand.
        </span>,
        <span key="3">
          To address this, SSIM offers an{" "}
          <strong className="text-red-600">
            integrated curriculum with elective options
          </strong>{" "}
          that allow students to specialize in areas like investment banking,
          risk management, FinTech, and wealth management. The program combines
          academic theory with practical learning, ensuring that students are
          well-equipped for successful careers in BFSI. The electives provide
          flexibility, enhancing employability and preparing students for
          specialized roles in the industry.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=beOxW30taGk",
      link: "/programs/pgdm-bifs",
      link1: "https://apply.ssim.ac.in",
    },
    {
      title: "PGDM - BA",
      subtitle: "Business Analytics",
      icon: <LineChart className="w-6 h-6" />,
      description: [
        <span key="1">
          Embark on a transformative journey with SSIMs Post Graduate Diploma in
          Management (PGDM – BA) in Business Analytics, meticulously crafted to
          mold{" "}
          <strong className="text-red-600">
            future-ready business leaders adept in data-driven decision-making
          </strong>
          . This program offers a harmonious blend of comprehensive business
          education and cutting-edge analytical skills, ensuring students stand
          out in today's competitive landscape.
        </span>,
        <span key="2">
          Our{" "}
          <strong className="text-red-600">industry-aligned curriculum</strong>,
          designed in collaboration with seasoned professionals, encompasses
          core subjects such as{" "}
          <strong className="text-red-600">
            Data Visualization, Machine Learning, Predictive Modelling, and Big
            Data Analytics
          </strong>
          . Gain proficiency in leading analytical tools, including R
          Programming, Python, SQL, and Tableau, through immersive, hands-on
          learning experiences.
        </span>,
        <span key="3">
          Beyond the classroom, engage in{" "}
          <strong className="text-red-600">
            real-world applications and internships
          </strong>
          , providing invaluable exposure to business challenges. Join us to
          unlock your potential and become a catalyst for strategic innovation
          in the dynamic realm of business analytics.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=-7EavtYSQrA",
      link: "/programs/pgdm-ba",
      link1: "https://apply.ssim.ac.in",
    },
    {
      title: "FPM / EFPM",
      subtitle: "Fellow Program In Management",
      icon: <Users className="w-6 h-6" />,
      description: [
        <span key="1">
          <strong className="text-red-600">Siva Sivani Institute of Management (SSIM)</strong> offers the <strong className="text-red-600">Fellow Program in Management (FPM)</strong>, approved by <strong className="text-red-600">AICTE</strong>. The FPM scholars of SSIM are required to undertake rigorous interdisciplinary research in contemporary areas of management having implications for the corporate world and society.
        </span>,
        <span key="2">
          FPM is launched with the objective of developing <strong className="text-red-600">outstanding scholars for careers in teaching and research</strong>. To achieve this, the program provides scholars with the knowledge and research skills that help them become <strong className="text-red-600">specialist researchers</strong>, with sufficient depth of knowledge in different domains of management.
        </span>,
        <span key="3">
          SSIM offers <strong className="text-red-600">Full time Fellow Program in Management (FPM)</strong>.
        </span>,
      ],
      video: "https://www.youtube.com/watch?v=y-GwG39jVZc",
      isLocalVideo: true,
      localVideoPath: "/vids/SSIM_Offers_Fellow_Program_in_Management_FPM_-_Dr._V._Annapurna_FPM_Program_Chair_2160P.mp4",
      link: "/programs/fpm-efpm",
      link1: "https://apply.ssim.ac.in/fellowship-program-application-form",
    },
  ];

  const getVideoId = (url) => {
    const regExp =
      /^.*(youtu.be\/|v\/|u\/\w\/|embed\/|watch\?v=|&v=)([^#&?]*).*/;
    const match = url.match(regExp);
    return match && match[2].length === 11 ? match[2] : null;
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  const handleKnowMoreClick = (link) => {
    scrollToTop();
    // Small delay to allow scroll to start before navigation
    setTimeout(() => {
      router.push(link);
    }, 100);
  };

  const handleVideoClick = () => {
    const currentFeature = features[activeVideo];
    if (currentFeature.isLocalVideo) {
      setLocalVideoOpen(true);
    } else {
      setVideoOpen(true);
    }
  };

  const handlePlayPause = async () => {
    if (videoRef.current) {
      try {
        if (isPlaying) {
          videoRef.current.pause();
        } else {
          // Unmute when user clicks play
          videoRef.current.muted = false;
          await videoRef.current.play();
        }
        showControlsTemporarily();
      } catch (error) {
        console.error("Error playing video:", error);
      }
    }
  };

  const handleSkipForward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime += 20;
      // Trigger animation
      setForwardAnimating(true);
      setTimeout(() => setForwardAnimating(false), 300);
      showControlsTemporarily();
    }
  };

  const handleSkipBackward = () => {
    if (videoRef.current) {
      videoRef.current.currentTime = Math.max(0, videoRef.current.currentTime - 20);
      // Trigger animation
      setBackwardAnimating(true);
      setTimeout(() => setBackwardAnimating(false), 300);
      showControlsTemporarily();
    }
  };

  const handleVideoLoad = async () => {
    setVideoLoaded(true);
    // Autoplay when video is loaded
    if (videoRef.current) {
      try {
        await videoRef.current.play();
        setIsPlaying(true);
      } catch (error) {
        console.error("Error autoplaying video:", error);
        // Some browsers may block autoplay, so we'll just set loaded state
      }
    }
  };

  const handleVideoEnd = () => {
    setIsPlaying(false);
  };

  const handleVideoPlay = () => {
    setIsPlaying(true);
  };

  const handleVideoPause = () => {
    setIsPlaying(false);
  };

  const showControlsTemporarily = () => {
    setShowControls(true);
    if (controlsTimeoutRef.current) {
      clearTimeout(controlsTimeoutRef.current);
    }
    controlsTimeoutRef.current = setTimeout(() => {
      if (isPlaying) {
        setShowControls(false);
      }
    }, 3000);
  };

  // Auto-hide controls when video is playing
  useEffect(() => {
    if (isPlaying && videoLoaded) {
      controlsTimeoutRef.current = setTimeout(() => {
        setShowControls(false);
      }, 3000);
    } else {
      setShowControls(true);
    }
    return () => {
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    };
  }, [isPlaying, videoLoaded]);

  // Load video when modal opens, reset when closes
  useEffect(() => {
    if (localVideoOpen) {
      // Set video source when modal opens
      const fpmFeature = features.find((f) => f.isLocalVideo);
      if (fpmFeature && fpmFeature.localVideoPath) {
        setVideoError(false);
        setVideoLoaded(false);
        setVideoSrc(fpmFeature.localVideoPath);
        // Load video after a small delay to ensure DOM is ready
        setTimeout(() => {
          if (videoRef.current) {
            videoRef.current.load().catch((error) => {
              console.error("Error loading video:", error);
              setVideoError(true);
              setVideoLoaded(false);
            });
          }
        }, 100);
      }
    } else {
      // Reset video when modal closes
      if (videoRef.current) {
        videoRef.current.pause();
        videoRef.current.currentTime = 0;
      }
      setIsPlaying(false);
      setVideoLoaded(false);
      setVideoError(false);
      setVideoSrc("");
      setShowControls(true);
      if (controlsTimeoutRef.current) {
        clearTimeout(controlsTimeoutRef.current);
      }
    }
  }, [localVideoOpen]);

  return (
    <div className="container mx-auto sm:pr-0 py-0 sm:pt-16 pb-20">
      <div className="relative grid lg:grid-cols-2 gap-10 sm:gap-20 items-start">
        <div className="space-y-10">
          <div className="ml-auto lg:max-w-[550px] space-y-8">
            <WordPullUp
              words="Academic Programs"
              className="text-4xl md:text-5xl font-bold tracking-tight text-red-600 text-left mb-0 md:mb-6"
            />
            <p className="mx-auto max-w-[700px] text-gray-500 md:text-xl/relaxed">
              We train our students to master both the technical & management
              aspects of the business.
            </p>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {features.map((feature, index) => (
                <div
                  key={index}
                  className={`flex gap-6 cursor-pointer group transition-all duration-300`}
                  onClick={() => {
                    setIsAnimating(true);
                    setTimeout(() => {
                      setActiveVideo(index);
                      setIsAnimating(false);
                    }, 500);
                  }}
                  onMouseEnter={() => setIsHovered(true)}
                  onMouseLeave={() => setIsHovered(false)}
                >
                  <div
                    className={`w-full min-h-[120px] space-y-[6px] flex flex-col items-center justify-center shadow-2xl text-white flex-shrink-0 transition-colors duration-300 ${
                      activeVideo === index ? "bg-red-600" : "bg-mainBlue"
                    }`}
                  >
                    <div className="flex items-center justify-center mb-1">
                      {feature.icon}
                    </div>
                    <h3 className="font-semibold text-xs">{feature.title}</h3>
                    <p className="text-[10px] text-white text-center">
                      {feature.subtitle}
                    </p>
                  </div>
                </div>
              ))}
            </div>
            <div
              className={`relative block lg:hidden cursor-pointer aspect-square bg-gray-900 overflow-hidden transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
              onClick={handleVideoClick}
              onMouseEnter={() => setIsHovered(true)}
              onMouseLeave={() => setIsHovered(false)}
            >
              <Image
                className="w-full h-full object-cover"
                alt="Academic Programs"
                unoptimized={true}
                src={`https://img.youtube.com/vi/${getVideoId(
                  features[activeVideo].video
                )}/maxresdefault.jpg`}
                fill
              />
              <div
                className="absolute cursor-pointer inset-0 w-full h-full flex lg:hidden items-center justify-center"
                onClick={handleVideoClick}
              >
                <div className="relative">
                  <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                    <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
                  </div>
                  <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
                  <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
                </div>
              </div>
            </div>
            <div
              className={`mt-4 text-gray-600 text-base leading-relaxed space-y-4 transition-opacity duration-500 ${
                isAnimating ? "opacity-0" : "opacity-100"
              }`}
            >
              {features[activeVideo].description.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
            </div>
            <Link
              href={features[activeVideo].link}
              className="group gap-0 px-0 py-0 h-0 rounded-none mt-8 inline-flex"
              onClick={scrollToTop}
            >
              <div className="bg-red-600 text-white mt-8 h-11 flex items-center px-4 hover:bg-red-700">
                Know More
              </div>
              <div className="bg-mainBlue text-white mt-8 h-11 flex items-center px-4">
                <ArrowRight className="w-4 bg-mainBlue h-4 transition-transform group-hover:translate-x-1" />
              </div>
            </Link>
            <a href={features[activeVideo].link1} target="_blank">
              <Button
                className="group gap-0 px-0 py-0 h-0 ml-5 sm:ml-8 rounded-none mt-8"
                size="lg"
              >
                <div className="bg-transparent text-black mt-8 h-11 flex items-center px-4 border border-black border-r-0">
                  Apply Now
                </div>
                <div className="bg-red-600 mt-8 h-11 flex items-center px-4">
                  <ArrowRight className="w-4 text-white bg-red-600 h-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Button>
            </a>
          </div>
        </div>

        <div
          className={`relative hidden lg:block cursor-pointer aspect-square bg-gray-900 overflow-hidden transition-opacity duration-500 ${
            isAnimating ? "opacity-0" : "opacity-100"
          }`}
          onClick={handleVideoClick}
          onMouseEnter={() => setIsHovered(true)}
          onMouseLeave={() => setIsHovered(false)}
        >
          <Image
            className="w-full h-full object-cover"
            alt="Academic Programs"
            unoptimized={true}
            src={`https://img.youtube.com/vi/${getVideoId(
              features[activeVideo].video
            )}/maxresdefault.jpg`}
            fill
          />
          <div
            className="absolute cursor-pointer inset-0 w-full h-full flex sm:hidden items-center justify-center"
            onClick={handleVideoClick}
          >
            <div className="relative">
              <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
                <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
              </div>
              <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
              <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
            </div>
          </div>
        </div>
        <div
          className="absolute cursor-pointer top-1/2 left-[53%] transform -translate-x-[53%] -translate-y-1/2 w-fit h-fit hidden lg:flex items-center justify-center"
          onClick={handleVideoClick}
        >
          <div className="relative">
            <div className="w-16 h-16 bg-[#C62B28] rounded-full flex items-center justify-center cursor-pointer hover:bg-[#B52522] transition-colors">
              <div className="w-0 h-0 border-t-[12px] border-t-transparent border-l-[20px] border-l-white border-b-[12px] border-b-transparent ml-1" />
            </div>
            <div className="absolute -inset-4 bg-[#C62B28]/20 rounded-full animate-ping" />
            <div className="absolute -inset-8 bg-[#C62B28]/10 rounded-full" />
          </div>
        </div>
      </div>

      <Dialog open={videoOpen} onOpenChange={setVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-0">
          <div className="aspect-video">
            <iframe
              width="100%"
              height="100%"
              src={`https://www.youtube-nocookie.com/embed/${getVideoId(
                features[activeVideo].video
              )}?rel=0&modestbranding=1&playsinline=1`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </DialogContent>
      </Dialog>

      {/* Custom Video Player Modal for FPM/EFPM */}
      <Dialog open={localVideoOpen} onOpenChange={setLocalVideoOpen}>
        <DialogContent className="sm:max-w-[900px] p-0 bg-black">
          <div 
            className="relative aspect-video bg-black"
            onMouseMove={showControlsTemporarily}
            onMouseLeave={() => {
              if (isPlaying) {
                setShowControls(false);
              }
            }}
          >
            <video
              ref={videoRef}
              className="w-full h-full"
              onLoadedData={handleVideoLoad}
              onPlay={handleVideoPlay}
              onPause={handleVideoPause}
              onEnded={handleVideoEnd}
              onError={(e) => {
                console.error("Video error:", e);
                setVideoError(true);
                setVideoLoaded(false);
              }}
              preload="none"
              playsInline
              muted
            >
              {videoSrc && (
                <source src={videoSrc} type="video/mp4" />
              )}
              Your browser does not support the video tag.
            </video>

            {/* Custom Controls */}
            {videoLoaded && !videoError && (
              <div 
                className={`absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4 transition-opacity duration-300 ${
                  showControls || !isPlaying ? "opacity-100" : "opacity-0"
                }`}
              >
                <div className="flex items-center justify-center gap-4">
                  {/* Skip Backward 20s */}
                  <button
                    onClick={handleSkipBackward}
                    className={`bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 ${
                      backwardAnimating ? "scale-125 rotate-12" : "scale-100"
                    }`}
                    aria-label="Skip backward 20 seconds"
                  >
                    <Rewind className={`w-5 h-5 transition-transform ${backwardAnimating ? "translate-x-1" : ""}`} />
                  </button>

                  {/* Play/Pause */}
                  <button
                    onClick={handlePlayPause}
                    className="bg-[#C62B28] hover:bg-[#B52522] text-white rounded-full p-4 transition-colors flex items-center justify-center"
                    aria-label={isPlaying ? "Pause" : "Play"}
                  >
                    {isPlaying ? (
                      <Pause className="w-6 h-6" />
                    ) : (
                      <Play className="w-6 h-6" />
                    )}
                  </button>

                  {/* Skip Forward 20s */}
                  <button
                    onClick={handleSkipForward}
                    className={`bg-white/20 hover:bg-white/30 text-white rounded-full p-3 transition-all duration-300 ${
                      forwardAnimating ? "scale-125 -rotate-12" : "scale-100"
                    }`}
                    aria-label="Skip forward 20 seconds"
                  >
                    <FastForward className={`w-5 h-5 transition-transform ${forwardAnimating ? "-translate-x-1" : ""}`} />
                  </button>
                </div>
              </div>
            )}

            {/* Loading indicator */}
            {!videoLoaded && !videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-white text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-white mx-auto mb-4"></div>
                  <p>Loading video...</p>
                </div>
              </div>
            )}

            {/* Error message */}
            {videoError && (
              <div className="absolute inset-0 flex items-center justify-center bg-black/50">
                <div className="text-white text-center">
                  <p className="text-lg mb-2">Failed to load video</p>
                  <p className="text-sm opacity-75">Please check if the video file exists at the specified path</p>
                </div>
              </div>
            )}
          </div>
        </DialogContent>
      </Dialog>
    </div>
  );
}
