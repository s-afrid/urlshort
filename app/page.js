import Image from "next/image";

export default function Home() {
  return (
    <main>
      <section className="grid grid-col-2 h-[50vh]">
        <div className="bg-green-200">
          <p>
          The best URL shortener in the Market
          </p>
          <p>
            We are the most straightforward URL in the world
          </p>
        </div>
        <div className="bg-red-500 flex justify-start relative">
        <Image alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>

      </section>
    </main>
  );
}
