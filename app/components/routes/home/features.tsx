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
    <div className="h-screen flex flex-col justify-center">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto max-w-3xl lg:text-center">
          <h2 className="text-base/7 font-semibold dark:text-indigo-300 text-indigo-600">
            Explore and learn
          </h2>
          <p className="mt-2 text-4xl font-semibold text-pretty dark:text-gray-100 text-gray-900 sm:text-5xl lg:text-balance">
            Everything you need to learn about a country.
          </p>
          <p className="mt-6 text-lg/8 dark:text-gray-400 text-gray-600">
            WorldUniversity features everything you need to learn and get the
            information of a country.
          </p>
        </div>
        <div className="mx-auto mt-16 max-w-2xl sm:mt-20 lg:mt-24 lg:max-w-4xl">
          <dl className="grid max-w-xl grid-cols-1 gap-x-8 gap-y-10 lg:max-w-none lg:grid-cols-2 lg:gap-y-16">
            {features.map((feature) => (
              <div key={feature.name} className="relative pl-16">
                <dt className="text-base/7 font-semibold dark:text-gray-100 text-gray-900">
                  <div className="absolute top-0 left-0 flex size-10 items-center justify-center rounded-lg dark:bg-indigo-500 bg-indigo-600">
                    <feature.icon
                      aria-hidden="true"
                      className="size-6 text-indigo-100"
                    />
                  </div>
                  {feature.name}
                </dt>
                <dd className="mt-2 text-base/7 dark:text-gray-400 text-gray-600">
                  {feature.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
