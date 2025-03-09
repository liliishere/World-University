export default function HomeBackground() {
  return (
    <div className="absolute w-full h-full selection:bg-transparent">
      <img
        src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        className="w-full h-full object-cover object-center absolute dark:brightness-50 brightness-75"
      />
      <div className="w-full h-full absolute z-10 bg-gradient-to-br from-indigo-900 to-pink-900 opacity-25 bg-blend-multiply" />
      <div className="w-full h-full absolute z-10 bg-gradient-to-t from-gray-950 to-transparent dark:block hidden bg-blend-multiply" />
    </div>
  );
}
