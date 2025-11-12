"use client";

import { useSession } from "next-auth/react";
import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { toast } from "sonner";

import { SidebarInset, SidebarProvider } from "@/components/ui/sidebar";
import { Button } from "@/components/ui/button";
import DialogConfirmSubmit from "@/components/atoms/dialog/DialogConfirmSubmitPreTest";
import BreadcrumbWorkScreeningASBHDAVF from "@/components/atoms/breadcrumb/BreadcrumbWorkScreeningASBHDAVF";
import { useSubmitScreeningASBHDAVF } from "@/http/screening-asbhd-avf/submit-screening-asbhd-avf";
import { SubmitScreeningASBHDAVFValidatorType } from "@/validators/screening-asbhd-avf/submit-screening-asbhd-avf-validator";

const staticQuestions = [
  {
    id: 1,
    question_text: "Saya memberi tahu perawat ketika mengalami kram saat hemodialisis.",
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
    question_text: "Saya melakukan penekanan dengan jari, pada area bekas tusukan (kurang dari 20 menit) setelah hemodialisis selesai.",
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
    question_text: "Saya memberi tahu perawat ketika mengalami sakit kepala atau nyeri dada saat hemodialisis.",
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
    question_text: "Saya mengoleskan salep jika muncul memar (hematoma).",
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
    question_text: "Saya merasakan adanya thrill (getaran/bunyi) di area fistula (cimino) dua kali sehari.",
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
    question_text: "Saya menekan area tusukan fistula (cimino) dengan jari, jika terjadi perdarahan di rumah.",
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
    question_text: "Saya memeriksa setiap hari kondisi tangan pada lengan area fistula (cimino) apakah terasa dingin.",
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
    question_text: "Saya mengamati tanda-tanda kemerahan dan pembengkakan di area tusukan fistula (cimino).",
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
    question_text: "Saya melindungi lengan fistula (cimino) dari goresan, luka, dan cedera.",
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
    question_text: "Saya memeriksa setiap hari perubahan warna tangan pada lengan area fistula (cimino).",
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
    question_text: "Saya melindungi lengan area fistula (cimino) dari benturan dan guncangan.",
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
    question_text: "Saya mengizinkan pengambilan sampel darah pada lengan fistula (cimino).",
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
    question_text: "Saya memberi tahu perawat jika tangan pada lengan area fistula (cimino) mulai terasa sakit).",
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
    question_text: "Saya menghindari masuk ke tempat dengan perbedaan suhu ekstrem.",
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
    question_text: "Saya segera pergi ke rumah sakit jika tidak merasakan thrill (getaran/bunyi) di area fistula (cimino).",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
      {
    id: 16,
    question_text: "Saya memberi tahu perawat jika tangan pada lengan area fistula (cimino) tampak mengalami luka.",
    options: [
      { id: 1, option_text: "Tidak Pernah", score: 1 },
      { id: 2, option_text: "Jarang", score: 2 },
      { id: 3, option_text: "Kadang - Kadang", score: 3 },
      { id: 4, option_text: "Sering", score: 4 },
      { id: 5, option_text: "Selalu", score: 5 },
    ],
  },
];


export default function WorkScreeningASBHDAVFWrapper() {
  const { data: session } = useSession();
  const router = useRouter();

  const [selectedQuestionIndex, setSelectedQuestionIndex] = useState(0);
  const [answers, setAnswers] = useState<number[]>(
    Array(staticQuestions.length).fill(-1)
  );
  const [isConfirmDialogOpen, setConfirmDialogOpen] = useState(false);

  const isAllAnswered = answers.every((val) => val !== -1);

  const mutation = useSubmitScreeningASBHDAVF({
    onSuccess: (res) => {
      toast.success("Berhasil mengirim jawaban kuisioner ASBHD-AVF!");
      router.replace(`/dashboard/history/screening-asbhd-avf/${res.data.id}`);
    },
    onError: () => {
      toast.error("Gagal mengirim jawaban kuisioner ASBHD-AVF.");
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

    const answerPayload: SubmitScreeningASBHDAVFValidatorType = {
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
          <BreadcrumbWorkScreeningASBHDAVF
            onBack={() => {
              if (selectedQuestionIndex > 0) {
                setSelectedQuestionIndex((prev) => prev - 1);
              } else {
                router.push("/dashboard/vascular-access");
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
