"use client";
import PageWrapper from "@/components/layout/PageWrapper";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Send } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { motion } from "framer-motion";

const contactSchema = z.object({
  name: z.string().min(2, "Ad en az 2 karakter olmalıdır"),
  email: z.string().email("Geçerli bir email adresi giriniz"),
  subject: z.string().min(5, "Konu en az 5 karakter olmalıdır"),
  message: z.string().min(10, "Mesaj en az 10 karakter olmalıdır"),
});

type ContactFormValues = z.infer<typeof contactSchema>;

export default function ContactPage() {
  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<ContactFormValues>({
    resolver: zodResolver(contactSchema),
  });

  const onSubmit = async (data: ContactFormValues) => {
    try {
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: "Adres",
      detail: "Örnek Mahallesi, Örnek Sokak No:1, 34000 İstanbul",
    },
    {
      icon: Phone,
      title: "Telefon",
      detail: "+90 (212) 123 45 67",
    },
    {
      icon: Mail,
      title: "E-posta",
      detail: "info@anketcim.com",
    },
  ];

  return (
    <PageWrapper>
      <div className="max-w-5xl mx-auto px-4 py-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center max-w-xl mx-auto mb-12"
        >
          <h1 className="text-3xl font-bold mb-3">Bize Ulaşın</h1>
          <p className="text-muted-foreground">
            Sorularınız için form doldurabilir veya iletişim bilgilerimizden
            bize ulaşabilirsiniz
          </p>
        </motion.div>

        <div className="mt-8">
          <Card className="p-6">
            <div className="grid md:grid-cols-3 gap-8">
              <div className="space-y-6">
                {contactInfo.map((item, index) => (
                  <div key={index} className="flex gap-3 items-start">
                    <div className="bg-primary/10 p-2 rounded-lg">
                      <item.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div>
                      <h3 className="font-medium">{item.title}</h3>
                      <p className="text-sm text-muted-foreground mt-1">
                        {item.detail}
                      </p>
                    </div>
                  </div>
                ))}
              </div>

              <div className="md:col-span-2">
                <form onSubmit={handleSubmit(onSubmit)} className="space-y-4">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <Input placeholder="Adınız" {...register("name")} />
                      {errors.name && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.name.message}
                        </p>
                      )}
                    </div>

                    <div>
                      <Input
                        type="email"
                        placeholder="E-posta Adresiniz"
                        {...register("email")}
                      />
                      {errors.email && (
                        <p className="text-sm text-red-500 mt-1">
                          {errors.email.message}
                        </p>
                      )}
                    </div>
                  </div>

                  <div>
                    <Input placeholder="Konu" {...register("subject")} />
                    {errors.subject && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.subject.message}
                      </p>
                    )}
                  </div>

                  <div>
                    <Textarea
                      placeholder="Mesajınız"
                      className="min-h-[120px]"
                      {...register("message")}
                    />
                    {errors.message && (
                      <p className="text-sm text-red-500 mt-1">
                        {errors.message.message}
                      </p>
                    )}
                  </div>

                  <div className="text-right">
                    <Button
                      type="submit"
                      className="gap-2"
                      disabled={isSubmitting}
                    >
                      {isSubmitting ? "Gönderiliyor..." : "Mesaj Gönder"}
                      <Send className="h-4 w-4" />
                    </Button>
                  </div>
                </form>
              </div>
            </div>
          </Card>
        </div>
      </div>
    </PageWrapper>
  );
}
