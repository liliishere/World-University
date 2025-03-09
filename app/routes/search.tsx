import type { Route } from "./+types/search";
import Navbar from "../components/global/nav";
import Skeleton from "../components/routes/search/skeleton";

import { NavLink } from "react-router";

import {
  Field,
  Input,
  Label,
  Listbox,
  ListboxButton,
  ListboxOption,
  ListboxOptions,
} from "@headlessui/react";
import {
  GlobeAmericasIcon,
  GlobeAsiaAustraliaIcon,
  GlobeEuropeAfricaIcon,
  LanguageIcon,
  MapPinIcon,
  UserGroupIcon,
  CheckIcon,
  ChevronDownIcon,
} from "@heroicons/react/16/solid";

import { useState, useEffect } from "react";

import type { Country } from "~/types/country";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Search - WorldUniversity" },
    { name: "description", content: "Welcome to WorldUniversity!" },
  ];
}

export default function SearchPage() {
  const [results, setResults] = useState([]);
  const [query, setQuery] = useState("");
  const [dependance, setDependance] = useState("Any Dependance");
  const [region, setRegion] = useState("Any Region");
  const [language, setLanguage] = useState("");

  useEffect(() => {
    fetch("https://restcountries.com/v3.1/all")
      .then((response) => response.json())
      .then((data) => {
        setResults(data);
      })
      .catch((err) => {
        console.log(err.message);
      });
  }, []);

  let queryHandler = (e: { target: { value: string } }) => {
    setQuery(e.target.value.toLowerCase());
  };

  let languageHandler = (e: { target: { value: string } }) => {
    setLanguage(e.target.value.toLowerCase());
  };

  const filteredQuery = results.filter((el: Country) => {
    if (query === "") {
      return el;
    } else {
      return el.name.common.toLowerCase().includes(query);
    }
  });

  const filteredDependance = filteredQuery.filter((el: Country) => {
    switch (dependance) {
      case "Independant":
        return String(el.independent).includes("true");
      case "Colony":
        return String(el.independent).includes("false");
      default:
        return el;
    }
  });

  const filteredRegion = filteredDependance.filter((el: Country) => {
    switch (region) {
      case "Africa":
        return el.region.includes("Africa");
      case "Americas":
        return el.region.includes("Americas");
      case "Antarctic":
        return el.region.includes("Antarctic");
      case "Asia":
        return el.region.includes("Asia");
      case "Europe":
        return el.region.includes("Europe");
      case "Oceania":
        return el.region.includes("Oceania");
      default:
        return el;
    }
  });

  const filteredLanguage = filteredRegion.filter((el: Country) => {
    if (language === "") {
      return el;
    } else {
      return Object.values(el.languages || [])
        .join(", ")
        .toLowerCase()
        .includes(language);
    }
  });

  const filtered = filteredLanguage;

  return (
    <main>
      <Navbar />
      <div className="md:px-8 px-4 mx-auto flex flex-col gap-y-8 items-center py-16 h-full max-w-5xl w-full">
        <div className="flex flex-col gap-y-6 w-full">
          <div className="w-full px-4">
            <Field>
              <Label className="text font-medium text-gray-900 dark:text-white">
                Search the world and more...
              </Label>
              <Input
                onChange={queryHandler}
                className="mt-3 block w-full rounded-lg bg-transparent border-2 border-gray-900/20 dark:bg-white/5 transition-all duration-250 py-1.5 px-3 text-sm/6 text-gray-900 dark:text-white"
              />
            </Field>
          </div>
          <div className="w-full px-4">
            <p className="font-medium text-gray-900 dark:text-white">
              Or add some filters...
            </p>
            <div className="gap-x-3 md:grid grid-cols-3">
              <Listbox value={dependance} onChange={setDependance}>
                <ListboxButton className="mt-3 w-full flex flex-row justify-between rounded-lg h-fit py-1.5 bg-transparent border-2 border-gray-900/20 dark:bg-white/5 px-3 text-left text-sm/6 dark:text-white">
                  {dependance}
                  <ChevronDownIcon
                    className="group pointer-events-none my-auto size-5 fill-dark-900/40 dark:fill-white/60"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  transition
                  className="origin-top w-[var(--button-width)] mt-3 rounded-xl  bg-gray-900/5 border-2 border-gray-900/20 dark:border dark:border-white/5  dark:bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] backdrop-blur-md focus:outline-none transition duration-125 ease-in data-[enter]:data-[open]:opacity-100 data-[enter]:data-[open]:scale-100 data-[leave]:data-[closed]:opacity-0 data-[leave]:data-[closed]:scale-95"
                >
                  <ListboxOption
                    value="Any Dependance"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Any Dependance
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Independant"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10"
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Independant
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Colony"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Colony
                    </div>
                  </ListboxOption>
                </ListboxOptions>
              </Listbox>
              <Listbox value={region} onChange={setRegion}>
                <ListboxButton className="mt-3 w-full flex flex-row justify-between rounded-lg h-fit py-1.5 bg-transparent border-2 border-gray-900/20 dark:bg-white/5 px-3 text-left text-sm/6 dark:text-white">
                  {region}
                  <ChevronDownIcon
                    className="group pointer-events-none my-auto size-5 fill-dark-900/40 dark:fill-white/60"
                    aria-hidden="true"
                  />
                </ListboxButton>
                <ListboxOptions
                  anchor="bottom"
                  transition
                  className="origin-top w-[var(--button-width)] mt-3 rounded-xl bg-gray-900/5 border-2 border-gray-900/20 dark:border dark:border-white/5  dark:bg-white/5 p-1 [--anchor-gap:var(--spacing-1)] backdrop-blur-md focus:outline-none transition duration-125 ease-in data-[enter]:data-[open]:opacity-100 data-[enter]:data-[open]:scale-100 data-[leave]:data-[closed]:opacity-0 data-[leave]:data-[closed]:scale-95"
                >
                  <ListboxOption
                    value="Any Region"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Any Region
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Africa"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Africa
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Americas"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Americas
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Antarctic"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Antarctic
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Asia"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Asia
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Europe"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Europe
                    </div>
                  </ListboxOption>
                  <ListboxOption
                    value="Oceania"
                    className="group flex cursor-default items-center gap-2 rounded-lg py-1 px-3 select-none dark:data-[focus]:bg-white/10 data-[focus]:bg-gray-900/10 "
                  >
                    <CheckIcon className="invisible size-4 fill-gray-900 dark:fill-white group-data-[selected]:visible" />
                    <div className="text-sm/6 text-gray-900 dark:text-white">
                      Oceania
                    </div>
                  </ListboxOption>
                </ListboxOptions>
              </Listbox>
              <Field>
                <Input
                  onChange={languageHandler}
                  placeholder="Any Language"
                  className="mt-3 block w-full rounded-lg bg-transparent border-2 border-gray-900/20 dark:bg-white/5 transition-all duration-250 py-1.5 px-3 text-sm/6 text-gray-900 dark:text-white"
                />
              </Field>
            </div>
          </div>
        </div>
        <div
          className={
            results.length
              ? "w-full px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4"
              : "hidden"
          }
        >
          {filtered.map((country: Country) => {
            return (
              <NavLink
                to={`/country?id=${country.cca3.toLowerCase()}`}
                key={country.cca3}
                id={country.cca3}
                className="block w-full rounded-lg  overflow-hidden text-ellipsis bg-transparent border-2 border-gray-900/20 dark:bg-white/5 hover:bg-gray-900/5 hover:dark:bg-white/10 transition-all duration-250 py-3 px-6 text-gray-900 dark:text-white"
              >
                <h1 className="text-lg font-semibold">
                  {country.flag} {country.name.common}
                </h1>
                <span className="text-sm opacity-50 whitespace-nowrap overflow-hidden text-ellipsis text-pretty">
                  {country.name.official}
                </span>
                <div className="grid grid-cols-2 grid-rows-2 mt-3 gap-y-3 gap-x-3 mb-1">
                  <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row gap-x-1">
                      {country.region === "Europe" ||
                      country.region === "Africa" ? (
                        <GlobeEuropeAfricaIcon className="inline-block size-4 my-auto opacity-75" />
                      ) : country.region === "Asia" ||
                        country.region === "Oceania" ? (
                        <GlobeAsiaAustraliaIcon className="inline-block size-4 my-auto opacity-75" />
                      ) : (
                        <GlobeAmericasIcon className="inline-block size-4 my-auto opacity-75" />
                      )}
                      <span className="text-sm opacity-75 my-auto">Region</span>
                    </div>
                    <p>{country.region}</p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row gap-x-1">
                      <MapPinIcon className="inline-block size-4 my-auto opacity-75" />
                      <span className="text-sm opacity-75 my-auto">
                        Capital
                      </span>
                    </div>
                    <p className="truncate">
                      {country.capital ? country.capital.join(", ") : "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row gap-x-1">
                      <LanguageIcon className="inline-block size-4 my-auto opacity-75" />
                      <span className="text-sm opacity-75 my-auto">
                        Language
                      </span>
                    </div>
                    <p className="truncate">
                      {Object.values(country.languages || {}).join(", ")
                        ? Object.values(country.languages || {}).join(", ")
                        : "N/A"}
                    </p>
                  </div>
                  <div className="flex flex-col gap-y-1">
                    <div className="flex flex-row gap-x-1">
                      <UserGroupIcon className="inline-block size-4 my-auto opacity-75" />
                      <span className="text-sm opacity-75 my-auto">
                        Population
                      </span>
                    </div>
                    <p className="truncate">
                      {country.population.toLocaleString("en-ID")}
                    </p>
                  </div>
                </div>
              </NavLink>
            );
          })}
        </div>
        <div
          className={
            results.length
              ? "hidden"
              : "w-full px-4 grid md:grid-cols-2 lg:grid-cols-3 gap-x-4 gap-y-4 animate-pulse"
          }
        >
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
          <Skeleton />
        </div>
      </div>
    </main>
  );
}
