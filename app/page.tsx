"use client";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Users,
  FileCheck,
  Award,
  ArrowUpRight,
} from "lucide-react";
import { Button } from "@/components/ui/button";
import CardContents from "@/components/home/CardContent";
import PageWrapper from "@/components/layout/PageWrapper";

const container = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.15 },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring",
      duration: 0.8,
    },
  },
};

export default function Home() {
  const stats = [
    {
      label: "Aktif Kullanıcı",
      value: "1,000+",
      icon: Users,
      color: "bg-blue-50 dark:bg-blue-950/30",
    },
    {
      label: "Tamamlanan Anket",
      value: "5,000+",
      icon: FileCheck,
      color: "bg-purple-50 dark:bg-purple-950/30",
    },
    {
      label: "Memnuniyet Oranı",
      value: "%98",
      icon: Award,
      color: "bg-green-50 dark:bg-green-950/30",
    },
  ];

  return (
    <PageWrapper>
      <div className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10">
          <div className="absolute inset-0 bg-background" />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5 }}
            className="absolute top-0 right-0 md:-translate-y-1/4 md:translate-x-1/4 translate-y-0 translate-x-0 rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] dark:bg-primary/5 bg-primary/2 dark:blur-[100px] blur-[80px]"
          />
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1.5, delay: 0.2 }}
            className="absolute bottom-0 left-0 md:translate-y-1/4 md:-translate-x-1/4 translate-y-0 translate-x-0 rounded-full w-[300px] h-[300px] md:w-[600px] md:h-[600px] dark:bg-secondary/5 bg-secondary/2 dark:blur-[100px] blur-[80px]"
          />
        </div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 ">
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="flex flex-col items-center justify-center min-h-[40vh] relative"
          >
            <div className="text-center space-y-6 max-w-4xl mx-auto">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7 }}
                className="text-4xl md:text-6xl lg:text-7xl font-extrabold text-foreground tracking-tight"
              >
                Anketlerinizi{" "}
                <span className="text-primary dark:text-primary/90 relative">
                  Kolayca
                </span>{" "}
                Oluşturun ve Yönetin
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.2 }}
                className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
              >
                Kolay, hızlı ve güvenilir anket oluşturma platformu ile
                verilerinizi profesyonel şekilde analiz edin
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.4 }}
                className="flex flex-col sm:flex-row justify-center gap-4 "
              >
                <Button
                  size="lg"
                  className="gap-2 group text-base font-medium h-12 px-6 bg-primary hover:bg-primary/90"
                >
                  Hemen Başla
                  <ArrowUpRight className="h-4 w-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base font-medium h-12 px-6 border-primary/20 hover:border-primary/40"
                >
                  Nasıl Çalışır?
                </Button>
              </motion.div>
            </div>
          </motion.div>

          <motion.div
            variants={container}
            initial="hidden"
            animate="show"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto "
          >
            {stats.map((stat, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                className={`flex items-center gap-6 p-6 rounded-xl ${stat.color} border-none transition-all duration-200`}
              >
                <div className="p-3 rounded-lg bg-white/50 dark:bg-white/10">
                  <stat.icon className="h-8 w-8 text-primary dark:text-primary/90" />
                </div>
                <div>
                  <div className="text-3xl font-bold text-foreground">
                    {stat.value}
                  </div>
                  <div className="text-sm font-medium text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="max-w-5xl mx-auto "
          >
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground">
                Neler Sunuyoruz?
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Modern ve kullanıcı dostu arayüzümüz ile anket oluşturma
                deneyimini yeniden tanımlıyoruz
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-6">
              <CardContents />
            </div>
          </motion.div>
        </div>
      </div>
    </PageWrapper>
  );
}
