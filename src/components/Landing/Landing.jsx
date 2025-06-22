

export default function Landing() {
  return (
    <div className="landing min-h-screen flex flex-col items-center justify-center bg-gradient-to-br from-pink-500 via-yellow-300 to-blue-500">
      <h1 className="text-5xl font-extrabold text-white bg-black p-8 rounded-2xl shadow-2xl mb-8 border-8 border-dashed border-yellow-400">
        Welcome to Our Store
      </h1>
      <p className="text-2xl text-black bg-white px-6 py-3 rounded-full mb-4 shadow-lg">
        Discover a wide range of products tailored just for you.
      </p>
      <p className="text-xl text-white bg-blue-700 px-8 py-4 rounded-lg shadow-lg">
        Explore our categories and find what you love!
      </p>
    </div>
  );
}