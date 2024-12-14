import { Survey, Category } from "@/types/survey";

export const categories: Category[] = [
  { id: "all", label: "Tüm Anketler" },
  {
    id: "education",
    label: "Eğitim",
    color:
      "bg-blue-500 text-white hover:bg-blue-600 dark:bg-blue-600 dark:text-white",
  },
  {
    id: "health",
    label: "Sağlık",
    color:
      "bg-green-500 text-white hover:bg-green-600 dark:bg-green-600 dark:text-white",
  },
  {
    id: "technology",
    label: "Teknoloji",
    color:
      "bg-purple-500 text-white hover:bg-purple-600 dark:bg-purple-600 dark:text-white",
  },
  {
    id: "business",
    label: "İş Dünyası",
    color:
      "bg-orange-500 text-white hover:bg-orange-600 dark:bg-orange-600 dark:text-white",
  },
];
export const mockSurveys: Survey[] = [
  {
    id: 1,
    title: "Uzaktan Eğitim Deneyimi",
    description: "Pandemi sürecinde uzaktan eğitim deneyiminizi değerlendirin",
    category: "education",
    participants: 150,
    deadline: "2024-04-01",
    image:
      "data:image/jpeg;base64,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",
  },
  {
    id: 2,
    title: "Sağlık Hizmetleri Memnuniyeti",
    description: "Sağlık hizmetlerinden memnuniyet düzeyinizi belirtin",
    category: "health",
    participants: 320,
    deadline: "2024-03-25",
    image: "",
  },
  {
    id: 3,
    title: "Teknoloji Kullanım Alışkanlıkları",
    description: "Günlük teknoloji kullanım alışkanlıklarınızı paylaşın",
    category: "technology",
    participants: 450,
    deadline: "2024-03-30",
    image: "",
  },
  {
    id: 4,
    title: "İş Dünyası Trendleri",
    description:
      "İş dünyasındaki güncel trendler hakkında görüşlerinizi paylaşın",
    category: "business",
    participants: 280,
    deadline: "2024-04-15",
    image: "",
  },
  {
    id: 5,
    title: "Online Eğitim Platformları",
    description: "Online eğitim platformlarının etkinliğini değerlendirin",
    category: "education",
    participants: 200,
    deadline: "2024-04-10",
    image: "",
  },
  {
    id: 6,
    title: "Sağlıklı Yaşam Alışkanlıkları",
    description: "Günlük sağlıklı yaşam alışkanlıklarınızı paylaşın",
    category: "health",
    participants: 400,
    deadline: "2024-04-05",
    image: "",
  },
  {
    id: 7,
    title: "Sağlıklı Yaşam Alışkanlıkları",
    description: "Günlük sağlıklı yaşam alışkanlıklarınızı paylaşın",
    category: "health",
    participants: 400,
    deadline: "2024-04-05",
    image: "",
  },
];
