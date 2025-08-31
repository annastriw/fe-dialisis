import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

interface CardIntroductionProps {
  title: string;
  description: string;
  href: string;
  src: string;
}

export default function CardIntroduction({
  title,
  description,
  href,
  src,
}: CardIntroductionProps) {
  return (
    <Link href={href} className="block h-full">
      <div className="relative group flex h-full flex-col overflow-hidden rounded-2xl shadow-lg bg-card transition hover:scale-[1.02] hover:shadow-xl">
        {/* Background Image */}
        <div className="relative h-48 w-full overflow-hidden">
          <Image
            src={src}
            alt={title}
            fill
            className="object-cover transition-transform duration-700 group-hover:scale-110"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/40 to-transparent" />
          <h3 className="absolute bottom-4 left-4 text-lg md:text-xl font-bold text-white drop-shadow-lg">
            {title}
          </h3>
        </div>

        {/* Content */}
        <div
          className="flex flex-1 flex-col justify-between p-6 space-y-4"
          // Stop propagation biar klik button nggak trigger card link
          onClick={(e) => e.stopPropagation()}
        >
          <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
            {description}
          </p>
          <Link href={href} className="w-full">
            <Button size="lg" className="w-full rounded-md font-semibold">
              Baca Selengkapnya
            </Button>
          </Link>
        </div>
      </div>
    </Link>
  );
}
