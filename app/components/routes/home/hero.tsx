import Navbar from "../../global/nav";
import Background from "./background";

export default function HomeHero() {
  return (
    <header id="hero" className="h-screen">
      <Navbar customClass="absolute top-0 w-full z-50 text-white" />
      <div className="h-full relative">
        <Background />
        <div className="md:px-8 px-4 flex flex-row justify-center items-center h-full w-full absolute z-40 text-white">
          <div className="flex flex-col gap-y-8 items-center">
            <h1 className="text-6xl md:text-8xl font-bold text-center">
              Explore the world
              <br />
              with ease.
            </h1>
            <p className=" text-center opacity-75 text-xl">
              Spend more time learning about the world, rather than fussing with
              sources.
            </p>
          </div>
        </div>
      </div>
    </header>
  );
}
