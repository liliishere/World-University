export default function CountryBackground() {
  return (
    <div className="absolute w-full h-full selection:bg-transparent">
      <img
        src="https://images.unsplash.com/photo-1551986782-9fa82053c9b9?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-full object-cover object-center absolute brightness-50"
      />
      <div className="w-full h-full absolute z-10 bg-gradient-to-t from-gray-950 to-transparent dark:block hidden bg-blend-multiply" />
    </div>
  );
}
