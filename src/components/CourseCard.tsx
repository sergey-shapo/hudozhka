import { Course } from "@/types";

export default function CourseCard({ course }: { course: Course }) {
  return (
    <article className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-shadow duration-300 border border-zinc-100">
      <h3 className="text-lg font-semibold text-zinc-900">{course.name}</h3>
      <p className="mt-1 text-sm text-pink font-medium">{course.category}</p>
      <p className="mt-3 text-sm text-zinc-600">{course.description}</p>
    </article>
  );
}
