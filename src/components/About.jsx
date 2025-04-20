import React, { useEffect, useRef, useState } from "react";
import { HiArrowRight } from "react-icons/hi2";
import { Link } from "react-router";

const Features = [
  {
    id: "ai-1",
    title: "Generate styled content quickly",
    description:
      "Whether you're trying to build even faster or you're just new to codeTutor, you can use AI Assistant to generate new page sections using your site's existing design system.",
    link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
    linkText: "Explore documentation",
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design-assistant-ai.mp4",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
  },
  {
    id: "ai-2",
    title: "Generate text right within codetutor",
    description:
      "Quickly and easily create new content, natively within CodeTutor. From generating first-pass content to publishing at speed, the AI Assistant can help you develop variations with just a few clicks.",
    link: "https://help.webflow.com/hc/articles/34295931022099",
    linkText: "Explore documentation",
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/writing-assistant-square.mp4",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/67057031236cd506cd0ae632_writing-assistant.avif",
  },
  {
    id: "ai-3",
    title: "Life is hard but keep doing it.",
    description:
      "Whether you're trying to build even faster or you're just new to codeTutor, you can use AI Assistant to generate new page sections using your site's existing design system.",
    link: "https://help.webflow.com/hc/en-us/articles/34205154436243",
    linkText: "Explore documentation",
    video:
      "https://dhygzobemt712.cloudfront.net/Web/home/2024-wxp/features/design-assistant-ai.mp4",
    poster:
      "https://cdn.prod.website-files.com/66e88746834b80507cdf7933/6705703132e8c6c85119c96d_design-assistant.avif",
  }
];

const About = () => {
  const [activeFeature, setActiveFeature] = useState(0);
  const featuresRef = useRef(null);
  const observeRef = useRef(null);

  useEffect(() => {
    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.5,
    };
    observeRef.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          const id = entry.target.getAttribute("id");
          const index = Features.findIndex((feature) => feature.id === id);

          if (index !== -1) {
            setActiveFeature(index);
            const video = document.querySelector(`video[data-feature="${id}"]`);
            if(video) video.play();
          }
        }
      });
    }, options);

    const featureElement = document.querySelectorAll(".feature-item");
    featureElement.forEach((feature) => observeRef.current.observe(feature));

    return () => {
      if (observeRef.current) {
        observeRef.current.disconnect();
      }
    };
  }, []);

  return (
    <div className="bg-black text-white py-24">
      <div className="primary-container">
        {/* header section  */}

        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          <div className="md:mb-24">
            <h2 className="text-5xl md:text-7xl font-bold mask-b-to-red-800 max-w-[50rem]">
              Ai At CodeTuto
            </h2>
          </div>
          <div className="mb-24">
            <p className="text-xl text-gray-300 mb-8 max-w-[25rem]">
              Write, edit,and update content - or generate it with the help of
              AI - directly in CodeTutor, then publish with a click. Easily
              create page layouts by adding the elements you want and pulling in
              content from the CMS/ Plus crewate reusable templates for dynamic
              content - design the layout once and any new contetnt will
              automatically follow it.
            </p>
            <Link className="inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors">
              Discover AI at CodeTutor{" "}
              <HiArrowRight className="ml-2  w-5 h-5" />
            </Link>
          </div>
        </div>

        {/* image and content  */}
        <div className="grid grid-cols-1 lg:grid-cols-2 md:gap-32 gap-8">
          {/* image  */}
          <div>
            <div className="sticky top-24">
              <div className="aspect-square rounded-lg overflow-hidden border border-white/20">
                <video
                  src={Features[activeFeature].video}
                  key={Features[activeFeature].id}
                  poster={Features[activeFeature].poster}
                  className=" w-full h-full object-cover"
                  muted
                  playsInline
                  loop
                  autoPlay
                ></video>
              </div>
            </div>
          </div>

          {/* content  */}
          <div>
            {/* intro text  */}
            <div className="md:mb-28 mb-16 md:h-72 border-b border-white/10 pb-16">
              <div className="max-w-[35ch] mb-4">
                <h3 className="text-2xl font-semibold">
                  Generate styled content quickly
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-[35rem] ">
                Codetutor's AI tools elevate your web project through contextual
                deesign and writing help , machine-powered translation , and
                more.
              </p>
              <Link className="inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors">
                Discover AI at CodeTutor
                <HiArrowRight className="ml-2  w-5 h-5" />
              </Link>
            </div>

            {/* feature text  */}
            <div ref={featuresRef} className="space-y-24">
              {
                Features.map((feature, index) => (
                <div key={feature.id} id={feature.id} className="feature-item scroll-mt-24 md:h-72 border-b border-white/20 pb-16">
                   <div className="max-w-[35ch] mb-4">
                <h3 className="text-2xl font-semibold">
                 {feature.title}
                </h3>
              </div>
              <p className="text-xl text-gray-300 mb-8 max-w-[35rem] ">
               {feature.description}
              </p>
              <Link className="inline-flex items-center text-white hover:text-gray-300 text-lg font-medium transition-colors">
                {feature.linkText}
                <HiArrowRight className="ml-2  w-5 h-5" />
              </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
