import Navbar from "../components/global/nav";

import {
  MagnifyingGlassIcon,
  AdjustmentsHorizontalIcon,
  CloudArrowUpIcon,
  BoltIcon,
} from "@heroicons/react/24/outline";

const features = [
  {
    name: "Search anywhere",
    description:
      "Find and learn about countries with ease with our search engine.",
    icon: MagnifyingGlassIcon,
  },
  {
    name: "Filter this, filter that",
    description:
      "Filter a country by a specific criteria, like continent, language, or independence status.",
    icon: AdjustmentsHorizontalIcon,
  },
  {
    name: "Always up-to-date",
    description:
      "WorldUniversity always strives to provide with the most accurate and current information available.",
    icon: CloudArrowUpIcon,
  },
  {
    name: "Blazing fast",
    description:
      "We strive to make WorldUniversity a pleasant experience with fast response times.",
    icon: BoltIcon,
  },
];

export default function HomeFeatures() {
  return (
    <main>
      <Navbar customClass="" />
      <div className=" flex flex-col justify-center my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h1 className="mt-2 text-4xl font-semibold text-pretty dark:text-gray-100 text-gray-900 sm:text-5xl lg:text-balance">
              About WorldUniversity
            </h1>
            <p className="mt-6 text-lg/8 dark:text-gray-400 text-gray-600">
              WorldUniversity is an innovative platform developed by PT World
              University to help students gain in-depth information about
              various countries worldwide. With a user friendly interface, we
              provide comprehensive data on countries, including flags,
              locations, and other essential information.
            </p>
          </div>
          <div className="mx-auto max-w-7xl mt-6 gap-y-6 md:mt-12 flex flex-col md:flex-row gap-x-8 md:px-6 lg:px-8">
            <div className="mx-auto max-w-3xl lg:text-center">
              <h1 className="mt-2 text-2xl font-semibold text-pretty dark:text-gray-100 text-gray-900 sm:text-3xl lg:text-balance">
                Our Vision
              </h1>
              <p className="mt-3 text-base/8 dark:text-gray-400 text-gray-600">
                To become the leading global platform that facilitates education
                and knowledge about countries worldwide, simplifying information
                access and enhancing global awareness among students.
              </p>
            </div>
            <div className="mx-auto max-w-3xl lg:text-center">
              <h1 className="mt-2 text-2xl font-semibold text-pretty dark:text-gray-100 text-gray-900 sm:text-3xl lg:text-balance">
                Our Mission
              </h1>
              <p className="mt-3 text-base/8 dark:text-gray-400 text-gray-600">
                To provide accurate and up-to-date country data, enhance global
                understanding among students through easily accessible
                information, and encourage exploration and research on various
                countries and cultures.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className=" flex flex-col justify-center mt-32 my-16">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl lg:text-center">
            <h1 className="mt-2 text-4xl font-semibold text-pretty dark:text-gray-100 text-gray-900 sm:text-5xl lg:text-balance">
              Meet the Team
            </h1>
            <p className="mt-6 text-lg/8 dark:text-gray-400 text-gray-600">
              We’re a dynamic group of individuals who are passionate about what
              we do and dedicated to delivering the best results for our
              clients.
            </p>
          </div>
          <div className="mx-auto mt-6 gap-y-6 md:mt-12 flex flex-col md:grid grid-cols-3 gap-x-8 lg:px-8 max-w-4xl">
            <div className="border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-6 py-6 rounded-xl flex flex-row md:flex-col gap-y-4 gap-x-6">
              <img
                src="/peter.jpeg"
                className="aspect-square md:h-40 md:w-40 w-32 h-32 rounded-full md:mx-auto"
              />
              <div className="flex flex-col gap-y-1 my-auto md:my-0">
                <p className="font-semibold text-lg text-left md:text-center">
                  Oscar-Peter Jungdika
                </p>
                <p className="opacity-50 text-left md:text-center">cactus</p>
              </div>
            </div>
            <div className="border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-6 py-6 rounded-xl flex flex-row md:flex-col gap-y-4 gap-x-6">
              <img
                src="/peter.jpeg"
                className="aspect-square md:h-40 md:w-40 w-32 h-32 rounded-full md:mx-auto"
              />
              <div className="flex flex-col gap-y-1 my-auto md:my-0">
                <p className="font-semibold text-lg text-left md:text-center">
                  Rebecca Jielian
                </p>
                <p className="opacity-50 text-left md:text-center">
                  Lead Developer
                </p>
              </div>
            </div>
            <div className="border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-6 py-6 rounded-xl flex flex-row md:flex-col gap-y-4 gap-x-6">
              <img
                src="/felix.jpeg"
                className="aspect-square md:h-40 md:w-40 w-32 h-32 rounded-full md:mx-auto"
              />
              <div className="flex flex-col gap-y-1 my-auto md:my-0">
                <p className="font-semibold text-lg text-left md:text-center">
                  Felix Bamidele Modric Rodrigo Guglielmo Jungdika
                </p>
                <p className="opacity-50 text-left md:text-center">
                  Emotional Support
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
