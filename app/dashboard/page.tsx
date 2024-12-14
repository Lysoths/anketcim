"use client";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  FileText,
  Users,
  Award,
  TrendingUp,
  Plus,
  Eye,
  ArrowUpRight,
  CheckCircle,
  Clock,
  Filter,
  BarChart3,
} from "lucide-react";
import { useRouter } from "next/navigation";
import { Progress } from "@/components/ui/progress";

export default function DashboardPage() {
  const router = useRouter();

  const stats = [
    {
      title: "Toplam Anket",
      value: "12",
      change: "+2 bu ay",
      icon: FileText,
      trend: "+16%",
      bgColor: "bg-blue-50 dark:bg-blue-950/30",
      iconColor: "text-blue-600 dark:text-blue-400",
    },
    {
      title: "Toplam Katılımcı",
      value: "1,234",
      change: "+123 bu hafta",
      icon: Users,
      trend: "+12%",
      bgColor: "bg-purple-50 dark:bg-purple-950/30",
      iconColor: "text-purple-600 dark:text-purple-400",
    },
    {
      title: "Tamamlanma Oranı",
      value: "89%",
      change: "+5% geçen aya göre",
      icon: Award,
      trend: "+5%",
      bgColor: "bg-green-50 dark:bg-green-950/30",
      iconColor: "text-green-600 dark:text-green-400",
    },
  ];

  const recentSurveys = [
    {
      id: 1,
      title: "Müşteri Memnuniyeti Anketi",
      participants: 45,
      targetParticipants: 100,
      status: "active",
      date: "2024-03-15",
      responses: 45,
      completion: 45,
    },
    {
      id: 2,
      title: "Çalışan Geri Bildirimi",
      participants: 89,
      targetParticipants: 100,
      status: "active",
      date: "2024-03-10",
      responses: 89,
      completion: 89,
    },
    {
      id: 3,
      title: "Ürün Değerlendirmesi",
      participants: 156,
      targetParticipants: 200,
      status: "completed",
      date: "2024-03-05",
      responses: 156,
      completion: 78,
    },
  ];

  const quickStats = [
    { label: "Aktif Anketler", value: "4" },
    { label: "Bu Ay Tamamlanan", value: "8" },
    { label: "Bekleyen Yanıtlar", value: "156" },
    { label: "Ortalama Yanıt Süresi", value: "2.5 dk" },
  ];

  return (
    <div className="space-y-6 p-6">
      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center md:justify-between ">
        <div>
          <h1 className="text-3xl font-bold">Hoş Geldiniz 👋</h1>
          <p className="text-muted-foreground mt-1">
            İşte anketlerinizin genel durumu
          </p>
        </div>
        <div className="flex items-center gap-3">
          <Button variant="outline" className="gap-2">
            <Filter className="h-4 w-4" />
            Filtrele
          </Button>
          <Button
            onClick={() => router.push("/dashboard/create")}
            className="gap-2"
          >
            <Plus className="h-4 w-4" /> Yeni Anket
          </Button>
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {quickStats.map((stat, index) => (
          <Card key={index} className="p-4">
            <p className="text-sm text-muted-foreground">{stat.label}</p>
            <p className="text-2xl font-bold mt-1">{stat.value}</p>
          </Card>
        ))}
      </div>

      {/* Main Stats */}
      <div className="grid gap-4 md:grid-cols-3">
        {stats.map((stat) => (
          <Card key={stat.title} className={`p-6 ${stat.bgColor} border-none`}>
            <div className="flex items-center justify-between">
              <div className="space-y-3">
                <div className="flex items-center gap-2">
                  <div
                    className={`p-2 rounded-lg bg-white/50 dark:bg-white/10`}
                  >
                    <stat.icon className={`h-5 w-5 ${stat.iconColor}`} />
                  </div>
                  <p className="text-sm font-medium">{stat.title}</p>
                </div>
                <div>
                  <h2 className="text-2xl font-bold">{stat.value}</h2>
                  <div className="flex items-center gap-2 mt-1">
                    <span className="text-xs bg-green-500/10 text-green-600 px-1.5 py-0.5 rounded-full font-medium">
                      {stat.trend}
                    </span>
                    <p className="text-xs text-muted-foreground">
                      {stat.change}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </Card>
        ))}
      </div>

      {/* Recent Surveys */}
      <Card className="p-6">
        <div className="flex justify-between items-center mb-6">
          <div className="space-y-1">
            <h2 className="text-xl font-semibold">Son Anketler</h2>
            <p className="text-sm text-muted-foreground">
              Son oluşturulan ve aktif anketleriniz
            </p>
          </div>
          <Button
            variant="outline"
            onClick={() => router.push("/dashboard/surveys")}
          >
            Tümünü Gör <ArrowUpRight className="h-4 w-4 ml-2" />
          </Button>
        </div>

        <div className="space-y-4">
          {recentSurveys.map((survey) => (
            <div
              key={survey.id}
              className="flex flex-col md:flex-row md:items-center justify-between gap-4 p-4 rounded-lg border"
            >
              <div className="space-y-2">
                <div className="flex items-center gap-2">
                  <h3 className="font-medium">{survey.title}</h3>
                  <span
                    className={`px-2 py-0.5 rounded-full text-xs font-medium ${
                      survey.status === "active"
                        ? "bg-green-500/10 text-green-600"
                        : "bg-gray-500/10 text-gray-600"
                    }`}
                  >
                    {survey.status === "active" ? "Aktif" : "Tamamlandı"}
                  </span>
                </div>

                <div className="flex items-center gap-4 text-sm text-muted-foreground">
                  <span className="flex items-center gap-1">
                    <Users className="h-4 w-4" />
                    {survey.responses} yanıt
                  </span>
                  <span className="flex items-center gap-1">
                    <Clock className="h-4 w-4" />
                    {new Date(survey.date).toLocaleDateString("tr-TR")}
                  </span>
                </div>
              </div>

              <div className="flex items-center gap-4">
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center justify-between mb-1">
                    <span className="text-sm text-muted-foreground">
                      Tamamlanma
                    </span>
                    <span className="text-sm font-medium">
                      {survey.completion}%
                    </span>
                  </div>
                  <Progress value={survey.completion} className="h-2" />
                </div>

                <div className="flex gap-2">
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <Eye className="h-4 w-4" />
                  </Button>
                  <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                    <BarChart3 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </Card>
    </div>
  );
}
