import type { Route } from "./+types/home";
import Hero from "../components/routes/home/hero";
import Features from "../components/routes/home/features";

export function meta({}: Route.MetaArgs) {
  return [
    { title: "Home - WorldUniversity" },
    { name: "description", content: "Welcome to WorldUniversity!" },
  ];
}

export default function HomePage() {
  return (
    <main>
      <Hero />
      <Features />
    </main>
  );
}
