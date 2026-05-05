import { SectionProps } from "@/types";
import Link from "next/link";
import Image from "next/image";

export default function Footer({ id }: SectionProps) {
  const currentYear = new Date().getFullYear();

  return (
    <footer id={id} className="py-12 bg-zinc-900 text-zinc-300">
      <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid sm:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 bg-violet-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">H</span>
              </div>
              <span className="text-xl font-semibold text-white">Hudozhka</span>
            </div>
            <p className="mt-4 text-sm ">
              Детская художественная школа в Барселоне. Раскрываем творческий
              потенциал каждого ребёнка.
            </p>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Контакты</h3>
            <ul className="space-y-2 text-sm">
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                  />
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                  />
                </svg>
                <span>Barcelona, Numancia 111 - 115</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z"
                  />
                </svg>
                <span>+34 652 485 194</span>
              </li>
              <li className="flex items-center gap-2">
                <svg
                  className="w-4 h-4"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
                  />
                </svg>
                <span>hudozhka.bcn@gmail.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="text-white font-semibold mb-4">Соцсети</h3>
            <div className="flex gap-4">
              <Link
                href="https://www.instagram.com/hudozhka.bcn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Instagram"
              >
                <Image
                  src="/instagram.png"
                  alt="Instagram"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href="https://www.facebook.com/hudozhka.bcn/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Facebook"
              >
                <Image
                  src="/facebook.png"
                  alt="Facebook"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
              <Link
                href="https://wa.me/34652485194"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="Whatsapp"
              >
                <Image
                  src="/whatsapp.png"
                  alt="Whatsapp"
                  width={32}
                  height={32}
                  priority
                />
              </Link>
            </div>
          </div>
        </div>

        <div className="mt-12 pt-8 border-t border-zinc-800 text-center text-sm text-zinc-400">
          <p>© {currentYear} Hudozhka. Все права защищены.</p>
        </div>
      </div>
    </footer>
  );
}
