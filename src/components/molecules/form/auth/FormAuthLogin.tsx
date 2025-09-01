"use client";

import { signIn } from "next-auth/react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { LoginType, loginSchema } from "@/validators/auth/login-validator";

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
import { useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";
import { toast } from "sonner";
import { Eye, EyeOff } from "lucide-react";
import Image from "next/image";
import { motion } from "framer-motion";

export default function FormAuthLogin() {
  const [isLoading, setIsLoading] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const form = useForm<LoginType>({
    resolver: zodResolver(loginSchema),
    defaultValues: { login: "", password: "" },
    mode: "onChange",
  });

  const router = useRouter();
  const searchParams = useSearchParams();
  const callbackUrl = searchParams.get("callbackUrl") || "/dashboard";

  const onSubmit = async (body: LoginType) => {
    setIsLoading(true);
    const res = await signIn("credentials", { ...body, redirect: false });
    setIsLoading(false);

    if (!res || res.error) {
      toast.error("Login Gagal", {
        description:
          res?.error === "CredentialsSignin"
            ? "Email atau password salah."
            : "Terjadi kesalahan, silakan coba lagi.",
      });
      return;
    }

    toast.success("Login Berhasil", {
      description: "Anda akan diarahkan menuju halaman dashboard",
    });

    router.push(callbackUrl);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full">
      {/* Logo + Nama Website */}
      <motion.div
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.05 }}
        className="mb-6 flex flex-col items-center gap-2"
      >
        <Link
          href="/"
          className="flex items-center gap-3 transition-all duration-300 hover:opacity-90"
        >
          <Image
            src="/images/assets/bg-about-us.png"
            alt="Dialisis Connect Edu"
            width={56}
            height={56}
            className="h-14 w-14 object-contain transition-transform duration-300 hover:scale-105"
          />
          <motion.span
            whileHover={{ scale: 1.05 }}
            className="text-lg sm:text-xl font-semibold text-black dark:text-white transition-all duration-300 hover:bg-gradient-to-r hover:from-primary hover:to-secondary hover:bg-clip-text hover:text-transparent"
          >
            Dialisis Connect Edu
          </motion.span>
        </Link>
      </motion.div>

      {/* Card Login */}
      <Card className="w-full max-w-sm sm:max-w-md lg:max-w-lg rounded-xl border-0 shadow-2xl">
        <CardHeader className="text-center py-5 px-4 sm:px-6">
          <CardTitle className="text-xl sm:text-2xl font-bold tracking-tight">
            Masuk
          </CardTitle>
          <CardDescription className="mt-1 text-sm">
            Selamat Datang! Masukkan email dan password anda.
          </CardDescription>
        </CardHeader>

        <CardContent className="px-5 sm:px-8 md:px-10 py-6">
          <Form {...form}>
            <form className="space-y-4" onSubmit={form.handleSubmit(onSubmit)}>
              {/* Email / Login */}
              <FormField
                control={form.control}
                name="login"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className="text-sm font-medium">
                      Email / Username / Nomor Telepon
                    </FormLabel>
                    <FormControl>
                      <Input
                        type="text"
                        id="email"
                        placeholder="m@example.com"
                        {...field}
                        className="text-sm py-2"
                      />
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
                    <FormLabel className="text-sm font-medium">
                      Password
                    </FormLabel>
                    <FormControl>
                      <div className="relative">
                        <Input
                          type={showPassword ? "text" : "password"}
                          id="password"
                          placeholder="Masukkan password"
                          {...field}
                          className="pr-10 text-sm py-2"
                        />
                        <Button
                          type="button"
                          variant="ghost"
                          size="icon"
                          className="absolute top-1/2 right-2 -translate-y-1/2 text-muted-foreground"
                          onClick={() => setShowPassword((prev) => !prev)}
                          tabIndex={-1}
                        >
                          {showPassword ? (
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

              {/* Submit Button */}
              <motion.div whileHover={{ scale: 1.02 }} whileTap={{ scale: 0.98 }}>
                <Button
                  type="submit"
                  className="w-full py-3 text-sm font-medium"
                  disabled={isLoading}
                >
                  {isLoading ? "Loading..." : "Masuk"}
                </Button>
              </motion.div>
            </form>
          </Form>

          {/* Link Register */}
          <div className="mt-6 text-center text-sm">
            Belum punya akun?{" "}
            <motion.span whileHover={{ scale: 1.03 }} whileTap={{ scale: 0.95 }}>
              <Link
                href="/register"
                className="font-medium text-primary underline underline-offset-4"
              >
                Daftar Sekarang
              </Link>
            </motion.span>
          </div>
        </CardContent>
      </Card>
    </div>
  );
}
