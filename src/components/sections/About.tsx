import Image from "next/image";
import { SectionProps, Value } from "@/types";

const values: Value[] = [
  {
    icon: "🎨",
    title: "Индивидуальный подход",
    description: "Каждый ребёнок уникален. Мы учитываем возраст, интересы и темп развития каждого ученика.",
  },
  {
    icon: "🌟",
    title: "Безопасная среда",
    description: "Создаем пространство, где дети чувствуют себя комфортно и могут свободно творить.",
  },
  {
    icon: "📚",
    title: "Профессиональные педагоги",
    description: "Наши наставники — действующие художники и педагоги с художественным образованием.",
  },
];

export default function About({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 bg-white">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="relative">
            <div className="aspect-[4/3] relative">
              <Image
                src="/images/about-studio.jpg"
                alt="Мастерская школы искусств"
                fill
                className="object-cover rounded-2xl"
                sizes="(max-width: 1024px) 100vw, 500px"
              />
            </div>
            <div className="absolute -bottom-6 -right-6 bg-violet-600 text-white p-6 rounded-xl shadow-lg">
              <p className="text-3xl font-bold">8 лет</p>
              <p className="text-sm opacity-90">успешной работы</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">О школе</h2>
            <p className="mt-4 text-lg text-zinc-600">
              Hudozhka — детская художественная школа в Барселоне. Мы верим, что каждый ребёнок обладает врождённым творческим потенциалом, который нужно лишь раскрыть.
            </p>
            <p className="mt-4 text-zinc-600">
              Наша миссия — создать пространство для развития художественных способностей, воображения и уверенности в себе у детей от 4 до 14 лет в Барселоне.
            </p>

            <div className="mt-8 grid sm:grid-cols-3 gap-6">
              {values.map((value) => (
                <div key={value.title} className="text-center p-4">
                  <div className="text-3xl">{value.icon}</div>
                  <h3 className="mt-2 font-semibold text-zinc-900 text-sm">{value.title}</h3>
                  <p className="mt-1 text-xs text-zinc-500">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}