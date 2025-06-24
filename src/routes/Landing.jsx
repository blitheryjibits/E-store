import AnimatedType from "../components/AnimatedTyping/AnimatedTyping";

export default function Landing() {
  return (
    <div className="landing pt-40 flex flex-col items-center justify-center">
      <h1 className="text-5xl font-extrabold text-white bg-black p-8 rounded-2xl shadow-2xl mb-8 ">
        Welcome to Our Store
      </h1>
      <p className="text-2xl text-black bg-white px-6 py-3 rounded-full mb-4 shadow-lg">
        <AnimatedType />
      </p>
      <p className="text-xl text-white bg-[#3b82f6] px-8 py-4 rounded-lg shadow-lg">
        Explore our categories and find what you love!
      </p>  
    </div>
  );
}