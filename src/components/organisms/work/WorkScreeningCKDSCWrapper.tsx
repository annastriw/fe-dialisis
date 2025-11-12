"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import DialogConfirmSubmit from "@/components/atoms/dialog/DialogConfirmSubmitPreTest";
import BreadcrumbWorkScreeningCKDSC from "@/components/atoms/breadcrumb/BreadcrumbWorkScreeningCKDSC";
import { useSubmitScreeningCKDSC } from "@/http/screening-ckdsc/submit-screening-ckdsc";
import { SubmitScreeningCKDSCValidatorType } from "@/validators/screening-ckdsc/submit-screening-ckdsc-validator";

const staticQuestions = [
  {
    id: 1,
    question_text: "Saya sendiri mengubah waktu minum obat yang diresepkan.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
  {
    id: 2,
    question_text: "Saya sendiri menghentikan konsumsi obat.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
    {
    id: 3,
    question_text: "Saya tidak terus-menerus mengonsumsi obat.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 4,
    question_text: "Saya sendiri mengubah frekuensi konsumsi obat yang diresepkan.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 5,
    question_text: "Saya mengikuti prinsip diet penyakit ginjal saat makan.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 6,
    question_text: "Saya makan dengan jumlah yang cukup berdasarkan rekomendasi tenaga kesehatan.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 7,
    question_text: "Saya mengontrol asupan makanan dan nutrisi yang dikonsumsi.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 8,
    question_text: "Saya mengikuti prinsip diet penyakit ginjal bahkan saat liburan atau makan di luar.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 9,
    question_text: "Saya berolahraga secara teratur.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 10,
    question_text: "Saya tetap berusaha berolahraga untuk mengendalikan penyakit ginjal saya meskipun sedang tidak ingin berolahraga.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 11,
    question_text: "Saya tetap berusaha meluangkan waktu dari jadwal yang padat untuk berolahraga.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 12,
    question_text: "Saya merokok setiap hari.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 13,
    question_text: "Jika ada orang di sekitar yang merokok saya akan menghentikan atau menghindarinya.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 14,
    question_text: "Saya memantau tekanan darah saya.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 15,
    question_text: "Saya lebih sering mengukur tekanan darah saat tidak enak badan.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
];

export default function WorkScreeningCKDSCWrapper() {
  const { data: session } = useSession();
  const router = useRouter();

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(staticQuestions.length).fill(-1)
  );
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const isAllAnswered = answers.every((val) => val !== -1);

  const mutation = useSubmitScreeningCKDSC({
    onSuccess: (res) => {
      toast.success("Berhasil mengirim jawaban kuisioner CKDSC!");
      router.replace(`/dashboard/history/screening-ckdsc/${res.data.id}`);
    },
    onError: () => {
      toast.error("Gagal mengirim jawaban kuisioner CKDSC.");
    },
  });

  useEffect(() => {
    const warn = (e: BeforeUnloadEvent) => {
      e.preventDefault();
      e.returnValue = "Jawaban Anda akan hilang jika meninggalkan halaman ini.";
    };
    window.addEventListener("beforeunload", warn);
    return () => window.removeEventListener("beforeunload", warn);
  }, []);

  const handleAnswer = (score: number) => {
    const updated = [...answers];
    updated[selectedQuestionIndex] = score;
    setAnswers(updated);

    if (selectedQuestionIndex < staticQuestions.length - 1) {
      setSelectedQuestionIndex((prev) => prev + 1);
    }
  };

  const handleSubmit = () => {
    if (!session?.user?.id) {
      toast.error("User belum login.");
      return;
    }

    const answerPayload: SubmitScreeningCKDSCValidatorType = {
      user_id: session.user.id,
      answers: staticQuestions.map((q, index) => ({
        question_id: q.id,
        score: answers[index],
      })),
    };

    mutation.mutate(answerPayload);
  };

  return (
    <>
      <SidebarProvider>
        <SidebarInset>
          <BreadcrumbWorkScreeningCKDSC
            onBack={() => {
              if (selectedQuestionIndex > 0) {
                setSelectedQuestionIndex((prev) => prev - 1);
              } else {
                router.push("/dashboard/kidney-disease");
              }
            }}
            currentIndex={selectedQuestionIndex}
            totalQuestions={staticQuestions.length}
          />

          <div className="pad-x-xl pt-28 space-y-4">
            <p className="text-xl font-semibold capitalize">
              {staticQuestions[selectedQuestionIndex]?.question_text}
            </p>

            <ul className="space-y-3">
              {staticQuestions[selectedQuestionIndex]?.options.map((option) => {
                const isSelected =
                  answers[selectedQuestionIndex] === option.score;
                return (
                  <li
                    key={option.id}
                    className={`p-3 rounded-md cursor-pointer font-semibold ${
                      isSelected
                        ? "bg-primary/10 border border-primary text-black"
                        : "bg-muted text-muted-foreground hover:bg-primary/10"
                    }`}
                    onClick={() => handleAnswer(option.score)}
                  >
                    {option.option_text}
                  </li>
                );
              })}
            </ul>

            {selectedQuestionIndex === staticQuestions.length - 1 &&
              isAllAnswered && (
                <div className="pt-4">
                  <Button
                    onClick={() => setConfirmDialogOpen(true)}
                    className="w-full"
                    disabled={mutation.isPending}
                  >
                    Selesai
                  </Button>
                </div>
              )}
          </div>
        </SidebarInset>
      </SidebarProvider>

      <DialogConfirmSubmit
        open={isConfirmDialogOpen}
        onClose={() => setConfirmDialogOpen(false)}
        unansweredNumbers={answers
          .map((a, i) => ({ index: i + 1, answered: a !== -1 }))
          .filter((x) => !x.answered)
          .map((x) => x.index)}
        onConfirm={() => {
          handleSubmit();
          setConfirmDialogOpen(false);
        }}
      />
    </>
  );
}
