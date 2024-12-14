"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { Card } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Search, Users, Calendar, ImageIcon } from "lucide-react";
import Image from "next/image";
import PageWrapper from "@/components/layout/PageWrapper";
import { Badge } from "@/components/ui/badge";
import {
  Pagination,
  PaginationContent,
  PaginationItem,
  PaginationLink,
  PaginationNext,
  PaginationPrevious,
} from "@/components/ui/pagination";

interface Survey {
  id: number;
  title: string;
  description: string;
  category: string;
  participants: number;
  deadline: string;
  image?: string; // Optional image field
}

const ITEMS_PER_PAGE = 4;

const mockSurveys: Survey[] = [
  {
    id: 1,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
    //image: "/images/customer-survey.jpg",
  },
  {
    id: 2,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  {
    id: 3,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  {
    id: 4,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  {
    id: 5,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  {
    id: 6,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  {
    id: 7,
    title: "Müşteri Memnuniyeti Anketi",
    description: "Müşterilerimizin memnuniyetini ölçüyoruz",
    category: "business",
    participants: 150,
    deadline: "2024-04-01",
  },
  // ... Add more mock data
];

export default function SurveysPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");

  const filterSurveys = () => {
    return mockSurveys.filter((survey) =>
      survey.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const paginateSurveys = (surveys: Survey[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return surveys.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  const filteredSurveys = filterSurveys();
  const totalPages = Math.ceil(filteredSurveys.length / ITEMS_PER_PAGE);

  return (
    <PageWrapper>
      <motion.div
        className="space-y-6 p-4 md:p-6"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <motion.h1
            className="text-3xl font-bold"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
          >
            Anketler
          </motion.h1>
          <div className="relative w-full md:w-72">
            <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
            <Input
              placeholder="Anket ara..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-8"
            />
          </div>
        </div>

        <div className="flex items-center justify-between border-b pb-4">
          <p className="text-sm font-medium text-muted-foreground">
            Toplam {filteredSurveys.length} anket
          </p>
          {totalPages > 1 && (
            <div className="flex items-center gap-2">
              <span className="text-sm font-medium">
                Sayfa {currentPage}/{totalPages}
              </span>
              <Pagination>
                <PaginationContent>
                  <PaginationItem>
                    <PaginationPrevious
                      onClick={() =>
                        setCurrentPage(Math.max(1, currentPage - 1))
                      }
                      className="cursor-pointer"
                      aria-disabled={currentPage === 1}
                    />
                  </PaginationItem>
                  {Array.from({ length: totalPages }).map((_, i) => (
                    <PaginationItem key={i + 1}>
                      <PaginationLink
                        onClick={() => setCurrentPage(i + 1)}
                        isActive={currentPage === i + 1}
                        className="cursor-pointer"
                      >
                        {i + 1}
                      </PaginationLink>
                    </PaginationItem>
                  ))}
                  <PaginationItem>
                    <PaginationNext
                      onClick={() =>
                        setCurrentPage(Math.min(totalPages, currentPage + 1))
                      }
                      className="cursor-pointer"
                      aria-disabled={currentPage === totalPages}
                    />
                  </PaginationItem>
                </PaginationContent>
              </Pagination>
            </div>
          )}
        </div>

        <motion.div
          className="grid gap-4"
          variants={{
            hidden: { opacity: 0 },
            show: {
              opacity: 1,
              transition: { staggerChildren: 0.1 },
            },
          }}
          initial="hidden"
          animate="show"
        >
          {paginateSurveys(filteredSurveys).map((survey) => (
            <motion.div
              key={survey.id}
              variants={{
                hidden: { opacity: 0, y: 20 },
                show: { opacity: 1, y: 0 },
              }}
              whileHover={{ scale: 1.01 }}
            >
              <Card className="overflow-hidden">
                <div className="flex flex-col md:flex-row">
                  <div className="relative w-full md:w-48 h-32">
                    {survey.image ? (
                      <Image
                        src={survey.image}
                        alt={survey.title}
                        fill
                        className="object-cover"
                        sizes="(max-width: 768px) 100vw, 192px"
                      />
                    ) : (
                      <div className="w-full h-full bg-muted flex items-center justify-center">
                        <div className="text-center">
                          <ImageIcon className="h-8 w-8 mx-auto text-muted-foreground/50" />
                          <p className="text-xs text-muted-foreground mt-2">
                            Görsel Yok
                          </p>
                        </div>
                      </div>
                    )}
                  </div>
                  <div className="p-4 flex-1">
                    <div className="flex flex-col md:flex-row justify-between gap-4">
                      <div className="space-y-2">
                        <Badge variant="secondary">{survey.category}</Badge>
                        <h3 className="font-semibold">{survey.title}</h3>
                        <p className="text-sm text-muted-foreground line-clamp-2">
                          {survey.description}
                        </p>
                      </div>
                      <div className="flex flex-row md:flex-col justify-start gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Users className="h-4 w-4" />
                          <span>{survey.participants} katılımcı</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Calendar className="h-4 w-4" />
                          <span>
                            {new Date(survey.deadline).toLocaleDateString(
                              "tr-TR"
                            )}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </Card>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </PageWrapper>
  );
}
