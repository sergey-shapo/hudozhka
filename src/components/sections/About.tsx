import Image from "next/image";
import { SectionProps, Value } from "@/types";

const values: Value[] = [
  {
    icon: "🎨",
    title: "Индивидуальный подход",
    description:
      "Каждый ребёнок уникален. Мы учитываем возраст, интересы и темп развития каждого ученика.",
  },
  {
    icon: "🌟",
    title: "Безопасная среда",
    description:
      "Создаем пространство, где дети чувствуют себя комфортно и могут свободно творить.",
  },
  {
    icon: "📚",
    title: "Профессиональные педагоги",
    description:
      "Наши наставники — действующие художники и педагоги с художественным образованием.",
  },
];

export default function About({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className=" mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-zinc-900 leading-tight break-words font-nunito text-center">
              О школе
            </h2>
            <p className="mt-4 text-lg text-zinc-600 ">
              Hudozhka — детская художественная школа в Барселоне. Мы верим, что
              каждый ребёнок обладает врождённым творческим потенциалом, который
              нужно лишь раскрыть.
            </p>
            <p className="mt-4 text-lg text-zinc-600 ">
              Наша миссия — создать пространство для развития художественных
              способностей, воображения и уверенности в себе у детей от 4 до 17
              лет в Барселоне.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center p-4">
                  <div className="w-8 h-8 mx-auto relative">
                    <Image
                      src="/accept.png"
                      alt={value.title}
                      fill
                      className="object-contain"
                    />
                  </div>
                  <h3 className="mt-2 font-semibold text-zinc-900 text-sm">
                    {value.title}
                  </h3>
                  <p className="mt-1 text-sm text-zinc-500">
                    {value.description}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full">
            <div className="relative w-full aspect-[4/3]">
              <Image
                src="/images/about-studio.webp"
                alt="Мастерская школы искусств"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="absolute -bottom-6 -right-3 bg-yellow text-pink p-6 rounded-xl shadow-lg font-bold">
              <p className="text-3xl uppercase">10 лет</p>
              <p className="text-md ">успешной работы</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
