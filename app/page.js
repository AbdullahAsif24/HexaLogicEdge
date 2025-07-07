import AnimatedHoverText from "@/components/AnimatedTextHover";
import HomeSec from "../components/HomeSec";

export default function Page() {
  return (
    <>
      <AnimatedHoverText className="text-black font-bold text-2xl" startColor="black" midColor="white" endColor="blue">
        Nasha Hack
      </AnimatedHoverText>
      <HomeSec />
    </>

  );
}

