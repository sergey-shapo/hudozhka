import { Metadata } from "next";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/sections/Footer";

export const metadata: Metadata = {
  title: "Art and Wine — творческие вечера для взрослых в Барселоне",
  description: "Творческие вечера Art and Wine в Барселоне. Рисуем, дегустируем вино и наслаждаемся искусством в приятной компании. Идеальный формат для взрослых.",
  keywords: ["art and wine барселона", " творческие вечера", " рисование и вино", " мастер-класс для взрослых", " арт-вечер барселона"],
  openGraph: {
    title: "Art and Wine — творческие вечера для взрослых в Барселоне",
    description: "Творческие вечера Art and Wine в Барселоне. Рисуем, дегустируем вино и наслаждаемся искусством.",
    images: ["/art-and-wine.jpg"],
  },
};

export default function ArtAndWine() {
  return (
    <>
      <Navbar />
      <main>
        <section className="relative py-20 lg:py-32 bg-zinc-900">
          <div className="absolute inset-0 overflow-hidden">
            <Image
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/5f/Albert_Anker_-_The_Wine_Festival.jpg/1280px-Albert_Anker_-_The_Wine_Festival.jpg"
              alt="Art and Wine — праздник вина"
              fill
              className="object-cover opacity-30"
              priority
            />
          </div>
          <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-nunito">
              Art and Wine
            </h1>
            <p className="mt-6 text-xl sm:text-2xl text-zinc-300">
              Творческие вечера для взрослых
            </p>
            <p className="mt-4 text-lg text-zinc-400 max-w-2xl mx-auto">
              Рисуем, дегустируем испанские вина и создаём шедевры в приятной компании
            </p>
          </div>
        </section>

        <section className="py-20 bg-white">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900 text-center font-nunito">
              Что такое Art and Wine?
            </h2>
            <p className="mt-6 text-lg text-zinc-600 leading-relaxed">
              Art and Wine — это формат творческих вечеров для взрослых, где искусство
              встречается с хорошим вином. Мы проводим мастер-классы по живописи, где каждый
              участник создаёт свой собственный рисунок под руководством опытного преподавателя.
              Параллельно мы дегустируем лучшие испанские вина регионов Риоха, Рибера-дель-Дуэро
              и Каталунии.
            </p>
            <p className="mt-4 text-lg text-zinc-600 leading-relaxed">
              Это идеальный формат для тех, кто хочет провести вечер интересно и с пользой —
              независимо от уровня художественной подготовки. Никакого опыта рисования не требуется!
              Главное — желание творить и хорошее настроение.
            </p>
          </div>
        </section>

        <section className="py-20 bg-zinc-50">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-zinc-900 text-center font-nunito">
              Программа вечера
            </h2>
            <div className="mt-12 grid gap-8 sm:grid-cols-2">
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
                <div className="text-4xl">🎨</div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  Творческая часть
                </h3>
                <p className="mt-2 text-zinc-600">
                  Мастер-класс по живописи длится около 1,5 часов. Выберите тему — пейзаж, натюрморт,
                  абстракция или копия известного произведения. Все материалы включены.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
                <div className="text-4xl">🍷</div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  Дегустация вин
                </h3>
                <p className="mt-2 text-zinc-600">
                  Во время рисования мы дегустируем 3-4 вида испанских вин. Опытный сомелье
                  расскажет о каждом сорте, регионе и особенностях производства.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
                <div className="text-4xl">🍷</div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  Закуски
                </h3>
                <p className="mt-2 text-zinc-600">
                  К вину подаются традиционные испанские закуски — хамон, сыры, оливки,
                  хлеб и оливковое масло. Гастрономическое путешествие по Испании.
                </p>
              </div>
              <div className="bg-white rounded-xl p-6 shadow-sm border border-zinc-100">
                <div className="text-4xl">🎁</div>
                <h3 className="mt-4 text-xl font-semibold text-zinc-900">
                  Результат
                </h3>
                <p className="mt-2 text-zinc-600">
                  Каждый участник уносит домой свой готовый рисунок в рамке. Памятный
                  подарок, созданный своими руками!
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="py-20 bg-violet-600">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold text-white font-nunito">
              Запишитесь на Art and Wine
            </h2>
            <p className="mt-4 text-lg text-violet-100">
              Забронируйте место на ближайший мастер-класс. Количество мест ограничено.
            </p>
            <a
              href="#contact"
              className="inline-block mt-8 px-8 py-4 bg-white text-violet-700 font-semibold rounded-lg hover:bg-zinc-100 transition-colors"
            >
              Записаться на вечер
            </a>
          </div>
        </section>

        <section className="py-20 bg-zinc-900">
          <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-2xl font-bold text-white font-nunito">
              Часто задаваемые вопросы
            </h2>
            <div className="mt-8 text-left space-y-6">
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Нужно ли уметь рисовать?
                </h3>
                <p className="mt-2 text-zinc-400">
                  Нет! Мастер-класс подходит для начинающих. Преподаватель поможет каждому
                  участнику создать красивый рисунок, независимо от опыта.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Сколько длится мероприятие?
                </h3>
                <p className="mt-2 text-zinc-400">
                  Около 3 часов: 1,5 часа рисование, 1 час дегустация с закусками,
                  свободное общение.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Можно ли прийти без пары?
                </h3>
                <p className="mt-2 text-zinc-400">
                  Да! Многие участники приходят одни. Это отличный способ познакомиться
                  с новыми людьми в непринуждённой обстановке.
                </p>
              </div>
              <div>
                <h3 className="text-lg font-semibold text-white">
                  Какова стоимость?
                </h3>
                <p className="mt-2 text-zinc-400">
                  45€ с человека. Включено: все материалы, 4 бокала вина, закуски и готовый
                  рисунок в рамке.
                </p>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer id="contact" />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Event",
            name: "Art and Wine — творческие вечера для взрослых",
            description:
              "Творческие вечера Art and Wine в Барселоне: мастер-классы по живописи с дегустацией испанских вин.",
            eventStatus: "https://schema.org/EventScheduled",
            eventAttendanceMode: "https://schema.org/OfflineEventAttendanceMode",
            location: {
              "@type": "Place",
              name: "Hudozhka",
              address: {
                "@type": "PostalAddress",
                streetAddress: "C/ de la Escuela, 123",
                addressLocality: "Barcelona",
                postalCode: "08001",
                addressCountry: "ES",
              },
            },
            organizer: {
              "@type": "Organization",
              name: "Hudozhka",
              url: "https://hudozhka.com",
            },
            offers: {
              "@type": "Offer",
              price: "65",
              priceCurrency: "EUR",
              availability: "https://schema.org/InStock",
            },
          }),
        }}
      />
    </>
  );
}