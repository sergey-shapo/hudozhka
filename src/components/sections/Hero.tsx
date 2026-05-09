import Image from "next/image";
import { SectionProps } from "@/types";

export default function Hero({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-t from-pink/20 via-white to-light-blue overflow-x-hidden"
      style={{
        backgroundColor: "#fefefe",
        backgroundImage:
          "linear-gradient(to top, rgba(237, 70, 218, 0.1), rgba(255, 255, 255, 1), rgba(214, 231, 239, 1))",
      }}
    >
      {/* Fondo decorativo (descomentado y seguro) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-pink/20 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-pink/30 rounded-full opacity-40 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            {/* <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight break-words font-nunito">
              Раскройте творческий потенциал вашего ребёнка
            </h1> */}
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight break-words font-nunito">
              Детская художественная школа в Барселоне
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0">
              Раскройте творческий потенциал вашего ребёнка в пространстве, где
              каждый урок становится увлекательным путешествием. Мы помогаем
              найти уникальный стиль, развивая воображение, художественный вкус
              и уверенность в себе.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-light-blue text-black font-bold rounded-full hover:bg-pink transition-all duration-200 shadow-lg hover:shadow-xl"
              >
                Выбрать курс
              </a>
              <a
                href="https://wa.me/34652485194"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-violet-50 text-black font-bold rounded-full border-2 border-pink hover:border-pink hover:bg-yellow transition-all shadow-lg duration-200"
              >
                Записаться
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8 justify-center lg:justify-start text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-pink">300+</span>
                <span>учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-pink">10 лет</span>
                <span>опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-pink">10+</span>
                <span>курсов</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/hero-art.webp"
                alt="Дети рисуют в студии Hudozhka Барселона"
                fill
                className="object-cover rounded-2xl shadow-2xl"
                sizes="(max-width: 1024px) 100vw, 500px"
                priority={true}
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
