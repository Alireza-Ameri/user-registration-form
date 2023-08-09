export default function Home() {
  return (
    <div className="w-screen h-screen flex flex-col justify-center items-center">
      <h2 className="text-xl text-gray-600 pb-2">Welcome</h2>
      <a href="/signupstep1">
        <button className="w-96 bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
          Registration
        </button>
      </a>
    </div>
  );
}
