import Player from "@/components/player/Player";
import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center bg-[#fff] justify-center">
      <div className=" min-w-[900px] max-w-screen-md grid place-content-center py-12 relative bg-white h-full min-h-screen">
        <div className="h-[500px] bg-yellow-300 w-full absolute z-0"></div>

        <div className="flex flex-col mb-8">
          <h1 className="text-4xl font-bold text-center mb-4 relative z-10">
            Welcome to{" "}
            <a
              className="text-blue-600 hover:underline"
              href="https://nextjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Fantasy Mini
            </a>
          </h1>

          <h3 className="text-2xl font-mono text-[#4a4a4a] text-center relative z-10">
            Gameweek 4 (Select Before 24/09/2023 19:00)
          </h3>
        </div>

        <div className="w-[500px] z-10 bg-white border-[0.5px] border-[#E1E1E1] rounded-md overflow-hidden relative shadow-sm m-auto">
          <div className="flex justify-between gap-6 w-[80%] m-auto mt-4 relative z-10 p-6 pb-0">
            <Player />
            <Player />
            <Player />
          </div>

          <div className="flex justify-between gap-6 w-[85%] m-auto mt-4 relative z-10 p-6 pb-0">
            <Player />
            <Player />
            <Player />
          </div>

          <div className="flex justify-between gap-6 w-[95%] m-auto mt-4 relative z-10 p-6 pb-0">
            <Player />
            <Player />
            <Player />
            <Player />
          </div>

          <div className="flex justify-center gap-6 w-[100%] m-auto mt-4 relative z-10 p-6 pb-0">
            <Player />
          </div>

          <div className="glass py-6 mt-6 w-full bg-yellow-300 z-10 relative">
            <div className="flex justify-between gap-6 m-auto relative z-10 pb-0 w-[90%]">
              <Player />
              <Player />
              <Player />
              <Player />
            </div>
          </div>

          <div
            className="h-[220px] w-[220px] border-[0.5px] border-[#E1E1E1] absolute rounded-full z-[8]"
            style={{
              top: "15%",
              left: "50%",
              transform: "translate(-50%, 0)",
            }}
          ></div>

          <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[25%] z-0"></div>

          <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[50%] z-0"></div>

          <div className="bg-[#E1E1E1] h-full w-[0.1px] absolute bottom-0 left-[75%] z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[15%] left-0 z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[30%] left-0 z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[45%] left-0 z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[60%] left-0 z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[75%] left-0 z-0"></div>

          <div className="bg-[#E1E1E1] w-full h-[0.1px] absolute top-[90%] left-0 z-0"></div>
        </div>

        <div className="mt-6">
          <h3 className="text-3xl font-bold text-center text-blue-600 font-sans">
            0 Points
          </h3>
        </div>
      </div>
    </main>
  );
}
