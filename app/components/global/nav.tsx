import { NavLink } from "react-router";

interface Props {
  customClass?: string;
}

export default function Nav({ customClass }: Props) {
  return (
    <nav
      className={
        "md:px-8 md:py-6 px-4 py-4 flex flex-row justify-between font-semibold " +
        customClass
      }
    >
      <h1>WorldUniversity</h1>
      <div className="gap-x-6 flex flex-row">
        <NavLink
          to="/"
          className="dark:hover:text-indigo-200 hover:text-indigo-700 dark:active:text-indigo-300 active:text-indigo-600 transition duration-250"
        >
          Home
        </NavLink>
        <NavLink
          to="/about"
          className="dark:hover:text-indigo-200 hover:text-indigo-700 dark:active:text-indigo-300 active:text-indigo-600 transition duration-250"
        >
          About
        </NavLink>
        <NavLink
          to="/search"
          className="dark:hover:text-indigo-200 hover:text-indigo-700 dark:active:text-indigo-300 active:text-indigo-600 transition duration-250"
        >
          Search
        </NavLink>
      </div>
    </nav>
  );
}
