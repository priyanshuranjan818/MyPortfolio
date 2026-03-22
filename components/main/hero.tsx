import { HeroContent } from "@/components/sub/hero-content";

const basePath = process.env.NEXT_PUBLIC_BASE_PATH ?? "";

export const Hero = () => {
  return (
    <div className="relative flex flex-col h-full w-full">
      <video
        autoPlay
        muted
        loop
        className="rotate-180 absolute top-[-340px] left-0 w-full h-full object-cover -z-20"
      >
        <source src={`${basePath}/videos/blackhole.webm`} type="video/webm" />
      </video>

      <HeroContent />
    </div>
  );
};
