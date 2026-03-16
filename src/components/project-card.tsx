import Image from "next/image";
import Link from "next/link";

interface ProjectCardProps {
  img: string;
  title: string;
  desc: string;
  href?: string;
}

export function ProjectCard({ img, title, desc, href = "#" }: ProjectCardProps) {
  return (
    <div className="rounded-2xl bg-white shadow-lg shadow-gray-200/70 overflow-hidden transition-transform transition-shadow duration-300 hover:-translate-y-1 hover:shadow-xl">
      <div className="h-56 w-full overflow-hidden">
        <Image
          src={img}
          alt={title}
          width={768}
          height={768}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <Link
          href={href}
          className="text-blue-gray-900 transition-colors hover:text-gray-800"
        >
          <h5 className="mb-2 text-xl font-semibold leading-snug text-blue-gray-900 line-clamp-2">
            {title}
          </h5>
        </Link>
        <p className="mb-6 text-sm leading-relaxed text-gray-500 line-clamp-4">
          {desc}
        </p>
        <Link href={href}>
          <button className="rounded-full bg-gray-900 px-5 py-2.5 text-xs font-bold uppercase text-white transition-colors hover:bg-gray-800">
            see details
          </button>
        </Link>
      </div>
    </div>
  );
}

export default ProjectCard;
