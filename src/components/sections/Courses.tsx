import { SectionProps, Course } from "@/types";

const courses: Course[] = [
  {
    id: "1",
    name: "Рисунок и живопись",
    category: "4-6 лет",
    description: "Основы работы с красками, кистью и цветом через игру и творчество.",
  },
  {
    id: "2",
    name: "Лепка и скульптура",
    category: "5-8 лет",
    description: "Развитие мелкой моторики и объёмного мышления с различными материалами.",
  },
  {
    id: "3",
    name: "Акварель",
    category: "7-10 лет",
    description: "Техники акварельной живописи, создание пейзажей и натюрмортов.",
  },
  {
    id: "4",
    name: "Графика",
    category: "8-12 лет",
    description: "Работа с карандашом, пером, тушью. Рисунок с натуры.",
  },
  {
    id: "5",
    name: "Декоративное искусство",
    category: "6-10 лет",
    description: "Орнаменты, узоры, народные промыслы и роспись.",
  },
  {
    id: "6",
    name: "Цифровой арт",
    category: "10-14 лет",
    description: "Основы цифровой живописи и работы в графических редакторах.",
  },
  {
    id: "7",
    name: "Композиция",
    category: "9-14 лет",
    description: "Законы построения изображения и цветовые сочетания.",
  },
  {
    id: "8",
    name: "История искусств",
    category: "8-14 лет",
    description: "Знакомство с шедеврами мировой живописи и великими мастерами.",
  },
];

export default function Courses({ id }: SectionProps) {
  return (
    <section id={id} className="py-20 bg-zinc-50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-zinc-900">Наши курсы</h2>
          <p className="mt-4 text-lg text-zinc-600 max-w-2xl mx-auto">
            Мы предлагаем разнообразные направления для детей разного возраста. Найдите идеальный курс для вашего ребёнка.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {courses.map((course) => (
            <article
              key={course.id}
              className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100"
            >
              <h3 className="text-lg font-semibold text-zinc-900">{course.name}</h3>
              <p className="mt-1 text-sm text-violet-600 font-medium">{course.category}</p>
              <p className="mt-3 text-sm text-zinc-600">{course.description}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}