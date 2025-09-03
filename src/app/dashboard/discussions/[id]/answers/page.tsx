import DashboardTitle from "@/components/atoms/typography/DashboardTitle";
import DashboardDiscussionCommentDetail from "@/components/organisms/dashboard/discussions/DashboardDiscussionCommentDetail";

interface DashboardDiscussionAnswerPageProps {
  params: Promise<{ id: string }>;
}

export default async function DashboardDiscussionAnswerPage({
  params,
}: DashboardDiscussionAnswerPageProps) {
  const { id } = await params;
  return (
    <section>
      <DashboardTitle
        head="Detail Pertanyaan"
        body="Menampilkan detail pertanyaan dari topik diskusi"
      />
      <DashboardDiscussionCommentDetail id={id} />
    </section>
  );
}
