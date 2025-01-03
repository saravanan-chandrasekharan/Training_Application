export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start ">
        <p className="text-9xl text-red-400 font-semibold tracking-wide w-full">
          HI{" "}
          <span className="italic font-thin bg-gradient-to-b from-cyan-300 to-cyan-700 w-full text-transparent bg-clip-text p-2">
            SARAVANAN
          </span>
        </p>
      </main>
    </div>
  );
}
