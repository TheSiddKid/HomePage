import { motion } from "framer-motion";

interface ProjectCardProps {
  title: string;
  description: string;
  imageSrc?: string;
  href?: string;
}

export default function ProjectCard({ title, description, imageSrc, href }: ProjectCardProps) {
  return (
    <motion.div
      className="cursor-pointer"
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
    >
      <div className="overflow-hidden rounded-2xl bg-gray-800 text-gray-200 shadow-xl group">
        {imageSrc && (
          <div className="relative">
            <img
              src={imageSrc}
              alt={title}
              className="h-48 w-full object-cover transition-transform duration-500 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
          </div>
        )}
        <div className="p-6">
          <h3 className="text-xl font-semibold">{title}</h3>
          <p className="mt-2 text-gray-300 text-sm">{description}</p>
          {href && (
            <a
              href={href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block mt-4 text-sm text-blue-400 hover:underline"
            >
              View Project →
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
}
