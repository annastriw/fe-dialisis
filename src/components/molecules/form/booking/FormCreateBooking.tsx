"use client";

import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";
import { useAddCreateBooking } from "@/http/booking/create-booking";
import {
  bookingSchema,
  BookingType,
} from "@/validators/booking/booking-validator";
import { zodResolver } from "@hookform/resolvers/zod";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { cn } from "@/lib/utils";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns";

export default function FormCreateBooking() {
  const router = useRouter();

  const form = useForm<BookingType>({
    resolver: zodResolver(bookingSchema),
    defaultValues: {
      title: "",
      description: "",
      booking_time: undefined,
    },
    mode: "onChange",
  });

  const { mutate: createBookingHandler, isPending } = useAddCreateBooking({
    onError: () => {
      toast.error("Gagal menambahkan booking baru!");
    },
    onSuccess: () => {
      toast.success("Berhasil menambahkan booking baru!");
      router.push("/dashboard/booking");
    },
  });

  const onSubmit = (body: BookingType) => {
    createBookingHandler(body);
  };

  return (
    <Card>
      <CardContent>
        <Form {...form}>
          <form
            className="space-y-5 pt-4"
            onSubmit={form.handleSubmit(onSubmit)}
          >
            <FormField
              control={form.control}
              name="title"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>
                    Judul <span className="text-red-500">*</span>
                  </FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Masukkan judul booking"
                      {...field}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="description"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Deskripsi</FormLabel>
                  <FormControl>
                    <Input
                      type="text"
                      placeholder="Masukkan deskripsi booking"
                      value={field.value || ""}
                      onChange={(e) => field.onChange(e.target.value || null)}
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />
            <FormField
              control={form.control}
              name="booking_time"
              render={({ field }) => {
                const dateTimeValue = field.value
                  ? new Date(field.value.replace(" ", "T"))
                  : null;

                const dateValue = dateTimeValue
                  ? format(dateTimeValue, "yyyy-MM-dd")
                  : "";

                const timeValue = dateTimeValue
                  ? format(dateTimeValue, "HH:mm")
                  : "";

                const setDate = (date: Date | undefined) => {
                  if (!date) return;
                  const time = timeValue || "00:00";
                  field.onChange(`${format(date, "yyyy-MM-dd")} ${time}`);
                };

                const setTime = (time: string) => {
                  const date = dateValue || format(new Date(), "yyyy-MM-dd");
                  field.onChange(`${date} ${time}`);
                };

                return (
                  <FormItem className="flex flex-col space-y-2">
                    <FormLabel>
                      Waktu Booking <span className="text-red-500">*</span>
                    </FormLabel>

                    <Popover>
                      <PopoverTrigger asChild>
                        <Button
                          variant="outline"
                          className={cn(
                            "pl-3 text-left font-normal",
                            !dateValue && "text-muted-foreground",
                          )}
                        >
                          {dateValue ? dateValue : "Pilih tanggal"}
                          <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
                        </Button>
                      </PopoverTrigger>

                      <PopoverContent className="p-0" align="start">
                        <Calendar
                          mode="single"
                          selected={dateTimeValue ?? undefined}
                          onSelect={setDate}
                          initialFocus
                        />
                      </PopoverContent>
                    </Popover>

                    <Input
                      type="time"
                      value={timeValue}
                      onChange={(e) => setTime(e.target.value)}
                    />

                    <FormMessage />
                  </FormItem>
                );
              }}
            />

            <div className="flex justify-end">
              <Button type="submit" disabled={isPending}>
                {isPending ? "Loading..." : "Tambahkan"}
              </Button>
            </div>
          </form>
        </Form>
      </CardContent>
    </Card>
  );
}
