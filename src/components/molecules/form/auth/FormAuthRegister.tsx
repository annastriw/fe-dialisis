"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useRouter } from "next/navigation";
import { registerSchema, RegisterType } from "@/validators/auth/register-validator";
import { useRegister } from "@/http/auth/register";
import { toast } from "sonner";
import { useState } from "react";
import DialogAgreementRegister from "@/components/atoms/dialog/DialogAgreementRegister";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FormAuthRegister() {
  const form = useForm<RegisterType>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      name: "",
      email: "",
      username: "",
      phone_number: "",
      password: "",
      password_confirmation: "",
    },
    mode: "onChange",
  });

  const [isDialogAgreementOpen, setIsDialogAgreementOpen] = useState(false);
  const [formData, setFormData] = useState<RegisterType | null>(null);
  const [showPassword, setShowPassword] = useState({ main: false, confirm: false });
  const router = useRouter();

  const errorMessages: Record<string, string> = {
    email: "Email sudah digunakan.",
    username: "Username sudah digunakan.",
    phone_number: "Nomor telepon sudah digunakan.",
  };

  const { mutate: registerRequestHandler, isPending } = useRegister({
    onError: (error) => {
      const errors = error.response?.data?.errors;
      if (errors && typeof errors === "object") {
        Object.entries(errors).forEach(([key, value]) => {
          if (Array.isArray(value)) {
            const translatedMessage = errorMessages[key] || value[0];
            form.setError(key as keyof RegisterType, {
              type: "manual",
              message: translatedMessage,
            });
          }
        });
      } else {
        toast.error("Pendaftaran Gagal", {
          description: "Terjadi kesalahan, silakan periksa kembali data Anda.",
        });
      }
    },
    onSuccess: async () => {
      const res = await signIn("credentials", {
        login: form.getValues("email"),
        password: form.getValues("password"),
        redirect: false,
      });

      if (!res || res.error) {
        toast.error("Login Failed", {
          description: "An error occurred, please try again.",
        });
        return;
      }

      toast.success("Berhasil Mendaftar", {
        description: "Anda akan otomatis masuk ke halaman dashboard",
      });
      return router.push("/dashboard");
    },
  });

  const onSubmit = (body: RegisterType) => {
    setFormData(body);
    setIsDialogAgreementOpen(true);
  };

  const handleConfirmAgreement = () => {
    if (formData) {
      registerRequestHandler(formData);
      setIsDialogAgreementOpen(false);
    }
  };

  return (
    <div className="flex h-full items-center justify-center">
      <Card className="w-full max-w-md rounded-xl border-0 shadow-2xl">
        <CardHeader className="text-center space-y-3">
          {/* Logo + Nama Website */}
          <motion.div
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            whileHover={{ scale: 1.05 }}
            className="flex flex-col items-center gap-2"
          >
            <Link
              href="/"
              className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
            >
              <Image
                src="/images/assets/bg-about-us.png"
                alt="Dialisis Connect Edu"
                width={60}
                height={60}
                className="h-14 w-14 object-contain transition-transform duration-300 hover:scale-105"
              />
              <motion.span
                whileHover={{ scale: 1.05 }}
                className="text-xl font-semibold text-black dark:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent"
              >
                Dialisis Connect Edu
              </motion.span>
            </Link>
          </motion.div>

          {/* Judul + Deskripsi */}
          <CardTitle className="text-2xl font-bold tracking-tight">Daftar</CardTitle>
          <CardDescription className="text-sm">
            Selamat datang! Silahkan daftar menggunakan akun anda.
          </CardDescription>
        </CardHeader>

        <CardContent>
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Nama */}
              <FormField
                control={form.control}
                name="name"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nama</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nama" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Email */}
              <FormField
                control={form.control}
                name="email"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan email" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Username */}
              <FormField
                control={form.control}
                name="username"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Username</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan username" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Nomor Telepon */}
              <FormField
                control={form.control}
                name="phone_number"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Nomor Telepon</FormLabel>
                    <FormControl>
                      <Input placeholder="Masukkan nomor telepon" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Password */}
              <FormField
                control={form.control}
                name="password"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword.main ? "text" : "password"}
                          placeholder="Masukkan password"
                          {...field}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                          onClick={() =>
                            setShowPassword((prev) => ({ ...prev, main: !prev.main }))
                          }
                          tabIndex={-1}
                        >
                          {showPassword.main ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Konfirmasi Password */}
              <FormField
                control={form.control}
                name="password_confirmation"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Konfirmasi Password</FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword.confirm ? "text" : "password"}
                          placeholder="Masukkan konfirmasi password"
                          {...field}
                          className="pr-10"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute right-2 top-1/2 -translate-y-1/2 text-muted-foreground"
                          onClick={() =>
                            setShowPassword((prev) => ({
                              ...prev,
                              confirm: !prev.confirm,
                            }))
                          }
                          tabIndex={-1}
                        >
                          {showPassword.confirm ? (
                            <EyeOff className="h-4 w-4" />
                          ) : (
                            <Eye className="h-4 w-4" />
                          )}
                        </Button>
                      </div>
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              {/* Submit */}
              <div>
                <Button type="submit" className="w-full" disabled={isPending}>
                  {isPending ? "Loading..." : "Daftar"}
                </Button>
              </div>
            </form>
          </Form>

          {/* Link ke Login */}
          <div className="mt-6 text-center text-sm">
            Sudah punya akun?{" "}
            <Link href="/login" className="text-primary underline underline-offset-4">
              Masuk Sekarang
            </Link>
          </div>
        </CardContent>
      </Card>

      <DialogAgreementRegister
        open={isDialogAgreementOpen}
        onConfirm={handleConfirmAgreement}
        setOpen={setIsDialogAgreementOpen}
      />
    </div>
  );
}
