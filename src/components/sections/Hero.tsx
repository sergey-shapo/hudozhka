import Image from "next/image";
import { SectionProps } from "@/types";

export default function Hero({ id }: SectionProps) {
  return (
    <section
      id={id}
      className="relative min-h-screen flex items-center pt-16 bg-gradient-to-br from-violet-50 via-white to-rose-50 overflow-x-hidden"
    >
      {/* Fondo decorativo (descomentado y seguro) */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-violet-200 rounded-full opacity-30 blur-3xl"></div>
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-rose-200 rounded-full opacity-30 blur-3xl"></div>
      </div>

      <div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="text-center lg:text-left">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight break-words">
              Раскройте творческий потенциал вашего ребёнка
            </h1>
            <p className="mt-6 text-lg sm:text-xl text-zinc-600 max-w-xl mx-auto lg:mx-0">
              Мы создаём пространство, где дети от 4 до 14 лет в Барселоне
              развивают художественные навыки, воображение и уверенность в себе
              через искусство.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="#courses"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-violet-600 text-white font-semibold rounded-full hover:bg-violet-700 transition-all duration-200 hover:scale-105 shadow-lg hover:shadow-xl"
              >
                Выбрать курс
              </a>
              <a
                href="#about"
                className="w-full sm:w-auto inline-flex items-center justify-center px-8 py-4 bg-white text-zinc-700 font-semibold rounded-full border-2 border-zinc-200 hover:border-violet-300 hover:bg-violet-50 transition-all duration-200"
              >
                Узнать больше
              </a>
            </div>
            <div className="mt-10 flex flex-wrap items-center gap-4 sm:gap-8 justify-center lg:justify-start text-sm text-zinc-500">
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-violet-600">500+</span>
                <span>учеников</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-violet-600">
                  8 лет
                </span>
                <span>опыта</span>
              </div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold text-violet-600">15+</span>
                <span>курсов</span>
              </div>
            </div>
          </div>

          <div className="relative hidden lg:block">
            <div className="relative w-full aspect-square max-w-lg mx-auto">
              <Image
                src="/images/hero-art.jpg"
                alt="Дети рисуют в студии"
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
