interface SectionTitleSecondaryProps {
  title: string;
}

export default function SectionTitleSecondary({
  title,
}: SectionTitleSecondaryProps) {
  return (
    <div className="mb-7 w-full">
      <h1 className="font-sans text-3xl capitalize">{title}</h1>
    </div>
  );
}
