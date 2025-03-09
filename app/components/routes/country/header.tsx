import Navbar from "../../global/nav";
import Background from "./background";

interface Props {
  flag: string;
  nameCommon: string;
  nameOfficial: string;
}

export default function CountryHeader({
  flag,
  nameCommon,
  nameOfficial,
}: Props) {
  return (
    <header id="hero" className="h-[50vh] md:h-[35vh]">
      <Navbar customClass="absolute top-0 w-full z-50 text-white" />
      <div className="h-full relative">
        <Background />
        <div className="md:px-8 px-4 flex flex-row justify-center items-center h-full w-full absolute z-40 text-white">
          <div className="flex flex-col md:flex-row md:gap-x-8 gap-y-4 justify-center items-center md:items-start max-w-4xl w-full">
            <img src={flag} className="h-24 aspect-auto w-fit my-auto" />
            <div className="flex flex-col gap-y-2 text-center md:text-left">
              <h1 className="text-6xl font-bold">{nameCommon}</h1>
              <span className="opacity-75 text-lg">{nameOfficial}</span>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
}
