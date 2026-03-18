import Image from "next/image";
import localFont from 'next/font/local';

const poppins = localFont(
  {
    src: './fonts/Poppins-ExtraBold.ttf',
    variable: '--font-poppins',
    weight: "100 900"
  }
)

export default function Home() {
  return (
    <main className="bg-purple-100">
      <section className="grid grid-cols-2 h-[50vh]">
        <div className="flex flex-col gap-4 items-center justify-center">
          <p className={`text-3xl font-bold ${poppins.className}`}>
          The best URL shortener in the Market
          </p>
          <p className="px-56">
            We are the most straightforward URL in the world. Most of the URL shorteners will track you or ask you give your details for login. We understand your needs and hence we have created this URL shortener
          </p>
        </div>
        <div className="flex justify-start relative">
        <Image className="mix-blend-darken" alt="an Image of a vector" src={"/vector.jpg"} fill={true} />
        </div>

      </section>
    </main>
  );
}
