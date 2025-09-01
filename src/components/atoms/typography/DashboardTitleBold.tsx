interface DashboardTitleBoldProps {
  head: string;
}

export default function DashboardTitleBold({ head }: DashboardTitleBoldProps) {
  return (
    <div className="mb-7 w-full max-w-xl">
      <h1 className="font-sans text-3xl capitalize">{head}</h1>
    </div>
  );
}
