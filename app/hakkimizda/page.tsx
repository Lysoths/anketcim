"use client";
import PageWrapper from "@/components/layout/PageWrapper";
import { Card } from "@/components/ui/card";
import {
  Users,
  Target,
  History,
  Trophy,
  ChevronRight,
  Linkedin,
  Twitter,
  Github,
} from "lucide-react";
import { motion } from "framer-motion";
import { Avatar, AvatarFallback } from "@/components/ui/avatar";

export default function AboutPage() {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: { staggerChildren: 0.15 },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        duration: 0.8,
      },
    },
  };

  const features = [
    {
      icon: Target,
      title: "Misyonumuz",
      description:
        "Kullanıcılarımıza en iyi anket deneyimini sunarak, veri toplama ve analiz süreçlerini kolaylaştırmak.",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      icon: Trophy,
      title: "Vizyonumuz",
      description:
        "Anket sektöründe öncü ve yenilikçi çözümlerle global ölçekte tercih edilen bir platform olmak.",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      icon: History,
      title: "Tarihçemiz",
      description:
        "2024 yılında kurulan şirketimiz, sürekli gelişen teknoloji ve müşteri ihtiyaçlarına uygun çözümler sunmaktadır.",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  const teamMembers = [
    {
      name: "Ahmet Yılmaz",
      role: "Kurucu & CEO",
      bio: "10+ yıl teknoloji ve yazılım deneyimi",
      bgColor: "bg-blue-500",
      social: {
        linkedin: "#",
        twitter: "#",
        github: "#",
      },
    },
    {
      name: "Ayşe Kaya",
      role: "Ürün Müdürü",
      bio: "UX tasarımı ve ürün yönetimi uzmanı",
      bgColor: "bg-purple-500",
      social: {
        linkedin: "#",
        twitter: "#",
      },
    },
    {
      name: "Mehmet Demir",
      role: "Baş Geliştirici",
      bio: "Full-stack geliştirici, açık kaynak katkıcısı",
      bgColor: "bg-green-500",
      social: {
        linkedin: "#",
        github: "#",
      },
    },
  ];

  const getInitials = (name: any) => {
    return name
      .split(" ")
      .map((word: any) => word[0])
      .join("")
      .toUpperCase();
  };

  return (
    <PageWrapper>
      <motion.div
        className="space-y-8"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <motion.div
          className="text-center space-y-4 max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
        >
          <motion.div
            className="inline-block mb-2 px-4 py-1.5 rounded-full text-sm font-medium bg-primary/10 text-primary"
            initial={{ scale: 0.5 }}
            animate={{ scale: 1 }}
            transition={{ type: "spring", stiffness: 300 }}
          >
            Yenilikçi Anket Platformu
          </motion.div>

          <h1 className="text-4xl sm:text-5xl font-bold text-foreground tracking-tight">
            Hakkımızda
          </h1>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Modern ve kullanıcı dostu anket platformu ile verilerinizi
            anlamlandırıyor, değerli içgörüler sunuyoruz.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-7xl mx-auto px-4">
          <motion.div
            className="space-y-6"
            variants={container}
            initial="hidden"
            animate="show"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={item}
                whileHover={{ scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <Card
                  className={`h-full p-6 space-y-4 overflow-hidden relative ${feature.bgColor} border-none`}
                >
                  <div className="flex items-start space-x-4">
                    <motion.div
                      className="relative z-10"
                      whileHover={{ rotate: 12 }}
                      transition={{ type: "spring", stiffness: 400 }}
                    >
                      <feature.icon
                        className={`h-8 w-8 ${feature.iconColor}`}
                      />
                    </motion.div>
                    <div className="space-y-2 relative z-10">
                      <h3 className="text-lg font-bold">{feature.title}</h3>
                      <p className="text-sm text-muted-foreground">
                        {feature.description}
                      </p>
                    </div>
                  </div>
                  <div className="absolute bottom-0 right-0 p-4 opacity-10">
                    <feature.icon className="h-16 w-16" />
                  </div>
                </Card>
              </motion.div>
            ))}
          </motion.div>

          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
          >
            <div className="space-y-3">
              <h2 className="text-2xl font-bold">Uzman Ekibimizle Tanışın</h2>
              <p className="text-muted-foreground">
                Deneyimli ve tutkulu ekibimiz, size en iyi anket deneyimini
                sunmak için çalışıyor.
              </p>
            </div>

            <motion.div
              className="grid gap-4"
              variants={container}
              initial="hidden"
              animate="show"
            >
              {teamMembers.map((member, index) => (
                <motion.div
                  key={index}
                  variants={item}
                  whileHover={{ scale: 1.02 }}
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <Card className="p-4">
                    <div className="flex items-center space-x-4">
                      <Avatar className="h-12 w-12">
                        <AvatarFallback
                          className={`${member.bgColor} text-primary-foreground`}
                        >
                          {getInitials(member.name)}
                        </AvatarFallback>
                      </Avatar>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-base font-semibold truncate">
                          {member.name}
                        </h3>
                        <p className="text-sm font-medium text-primary truncate">
                          {member.role}
                        </p>
                        <p className="text-sm text-muted-foreground truncate">
                          {member.bio}
                        </p>
                      </div>
                      <div className="flex gap-2">
                        {member.social.linkedin && (
                          <a
                            href={member.social.linkedin}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Linkedin className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.twitter && (
                          <a
                            href={member.social.twitter}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Twitter className="h-4 w-4" />
                          </a>
                        )}
                        {member.social.github && (
                          <a
                            href={member.social.github}
                            className="text-muted-foreground hover:text-primary"
                          >
                            <Github className="h-4 w-4" />
                          </a>
                        )}
                      </div>
                    </div>
                  </Card>
                </motion.div>
              ))}
            </motion.div>
          </motion.div>
        </div>
      </motion.div>
    </PageWrapper>
  );
}
