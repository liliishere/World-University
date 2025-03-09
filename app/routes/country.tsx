import type { Route } from "./+types/search";
import Header from "../components/routes/country/header";

import { useState, useEffect } from "react";

import type { Country } from "~/types/country";
import { useSearchParams } from "react-router";

import {
  InformationCircleIcon,
  MapPinIcon,
  BuildingLibraryIcon,
  LanguageIcon,
  EllipsisHorizontalIcon,
} from "@heroicons/react/16/solid";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search - WorldUniversity" },
    { name: "description", content: "Welcome to WorldUniversity!" },
  ];
}

export default function CountryPage() {
  let [searchParams] = useSearchParams();

  //@ts-ignore
  const [results, setResults] = useState<Country>({});

  useEffect(() => {
    fetch(`https://restcountries.com/v3.1/alpha/${searchParams.get("id")}`)
      .then((response) => response.json())
      .then((data) => {
        setResults(data[0]);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  return (
    <main className="mb-24">
      <Header
        flag={results.flags?.svg}
        nameCommon={results.name?.common}
        nameOfficial={results.name?.official}
      />
      <div className="max-w-4xl mx-auto flex flex-col px-4 md:grid grid-cols-3 grid-rows-2 gap-x-4 gap-y-4 mt-16">
        <div className="bg-transparent flex flex-col gap-y-5 border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-4 py-5 rounded-lg row-span-2">
          <div className="flex flex-row gap-x-2">
            <InformationCircleIcon className="size-7 my-auto fill-gray-900 dark:fill-gray-100" />
            <span className="text-lg font-semibold my-auto dark:text-indigo-200 text-indigo-700">
              General Information
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Names</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.altSpellings?.join(", ")}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Male Demonyms</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.demonyms?.eng?.m}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Female Demonyms</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.demonyms?.eng?.f}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Start of Week</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.startOfWeek?.replace(
                  /\w\S*/g,
                  (text) =>
                    text.charAt(0).toUpperCase() +
                    text.substring(1).toLowerCase()
                )}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Region</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.region}
              </span>
            </div>
            <div
              className={
                results.subregion ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Sub-region</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.subregion}
              </span>
            </div>
            <div
              className={
                results.capital ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Capital City</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.capital}
              </span>
            </div>
            <div
              className={
                results.coatOfArms?.svg
                  ? "flex flex-row justify-between"
                  : "hidden"
              }
            >
              <span className="opacity-50">Coat of Arms</span>
              <img src={results.coatOfArms?.svg} className="w-1/3 mt-1" />
            </div>
          </div>
        </div>
        <div className="bg-transparent flex flex-col gap-y-5 border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-4 py-5 rounded-lg">
          <div className="flex flex-row gap-x-2">
            <MapPinIcon className="size-7 my-auto fill-gray-900 dark:fill-gray-100" />
            <span className="text-lg font-semibold my-auto dark:text-indigo-200 text-indigo-700">
              Geography
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Latitude & Longitude</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.latlng?.join(", ")}
              </span>
            </div>
            <div
              className={
                results.capitalInfo?.latlng
                  ? "flex flex-row justify-between"
                  : "hidden"
              }
            >
              <span className="opacity-50">Capital City</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.capitalInfo?.latlng?.join(", ")}
              </span>
            </div>
            <div
              className={
                results.borders ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Borders</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.borders?.join(", ")}
              </span>
            </div>
            <div
              className={
                results.landlocked != undefined
                  ? "flex flex-row justify-between"
                  : "hidden"
              }
            >
              <span className="opacity-50">Landlocked</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.landlocked == false
                  ? "No"
                  : results.landlocked == true
                  ? "Yes"
                  : "N/A"}
              </span>
            </div>
            <div
              className={
                results.area ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Area</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.area?.toLocaleString("en-ID")} km²
              </span>
            </div>
            <div
              className={
                results.area ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Timezones</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.timezones?.join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex flex-col gap-y-5 border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-4 py-5 rounded-lg">
          <div className="flex flex-row gap-x-2">
            <BuildingLibraryIcon className="size-7 my-auto fill-gray-900 dark:fill-gray-100" />
            <span className="text-lg font-semibold my-auto dark:text-indigo-200 text-indigo-700">
              Politics
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Dependance</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.independent == false
                  ? "Colony"
                  : results.independent == true
                  ? "Independant"
                  : "N/A"}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Status</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.status == "officially-assigned"
                  ? "Officially assigned"
                  : results.status == "user-assigned"
                  ? "User assigned"
                  : "N/A"}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">United Nations</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.unMember == false
                  ? "Non-member"
                  : results.unMember == true
                  ? "Member"
                  : "N/A"}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Population</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.population?.toLocaleString("en-ID")}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Currencies</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {Object.keys(results.currencies || {}).join(", ")}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex flex-col gap-y-5 border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-4 py-5 rounded-lg">
          <div className="flex flex-row gap-x-2">
            <LanguageIcon className="size-7 my-auto fill-gray-900 dark:fill-gray-100" />
            <span className="text-lg font-semibold my-auto dark:text-indigo-200 text-indigo-700">
              Localisation
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Languages</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {Object.values(results.languages || {}).join(", ")}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Top-Level Domains</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.tld?.join(", ")}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Country Codes</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.cca2}, {results.cca3}, {results.ccn3}, {results.cioc}
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Phone Code</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.idd?.root}
              </span>
            </div>
            <div
              className={
                results.postalCode ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">Postal Codes</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.postalCode?.format}
              </span>
            </div>
          </div>
        </div>
        <div className="bg-transparent flex flex-col gap-y-5 border-2 border-gray-900/20 dark:border-0 dark:bg-gray-900 px-4 py-5 rounded-lg">
          <div className="flex flex-row gap-x-2">
            <EllipsisHorizontalIcon className="size-7 my-auto fill-gray-900 dark:fill-gray-100" />
            <span className="text-lg font-semibold my-auto dark:text-indigo-200 text-indigo-700">
              Miscellaneous
            </span>
          </div>
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Driving</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.car?.side?.replace(
                  /\w\S*/g,
                  (text) =>
                    text.charAt(0).toUpperCase() +
                    text.substring(1).toLowerCase()
                )}
                -hand
              </span>
            </div>
            <div className="flex flex-row justify-between">
              <span className="opacity-50">Vehicle Codes</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.car?.signs?.join(", ")}
              </span>
            </div>
            <div
              className={
                results.fifa ? "flex flex-row justify-between" : "hidden"
              }
            >
              <span className="opacity-50">FIFA Code</span>
              <span className="font-medium max-w-1/2 text-right text-pretty">
                {results.fifa}
              </span>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
