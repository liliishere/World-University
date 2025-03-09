import {
  GlobeAmericasIcon,
  LanguageIcon,
  MapPinIcon,
  UserGroupIcon,
} from "@heroicons/react/16/solid";

export default function SearchSkeleton() {
  return (
    <div className="block w-full rounded-lg  overflow-hidden text-ellipsis opacity-75 bg-gray-900/10 dark:bg-white/5 py-3 px-6 text-gray-900 dark:text-white">
      <div className="h-4 rounded bg-gray-400 dark:bg-gray-800"></div>
      <div className="h-3 rounded bg-gray-400 dark:bg-gray-800 mt-2"></div>
      <div className="grid grid-cols-2 grid-rows-2 mt-3 gap-y-3 gap-x-3 mb-1">
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row gap-x-1">
            <GlobeAmericasIcon className="inline-block size-4 my-auto opacity-75" />
            <span className="text-sm opacity-75 my-auto">Region</span>
          </div>
          <div className="h-4 rounded bg-gray-400 dark:bg-gray-800"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row gap-x-1">
            <MapPinIcon className="inline-block size-4 my-auto opacity-75" />
            <span className="text-sm opacity-75 my-auto">Capital</span>
          </div>
          <div className="h-4 rounded bg-gray-400 dark:bg-gray-800"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row gap-x-1">
            <LanguageIcon className="inline-block size-4 my-auto opacity-75" />
            <span className="text-sm opacity-75 my-auto">Language</span>
          </div>
          <div className="h-4 rounded bg-gray-400 dark:bg-gray-800"></div>
        </div>
        <div className="flex flex-col gap-y-1">
          <div className="flex flex-row gap-x-1">
            <UserGroupIcon className="inline-block size-4 my-auto opacity-75" />
            <span className="text-sm opacity-75 my-auto">Population</span>
          </div>
          <div className="h-4 rounded bg-gray-400 dark:bg-gray-800"></div>
        </div>
      </div>
    </div>
  );
}
