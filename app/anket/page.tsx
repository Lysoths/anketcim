"use client";

import PageWrapper from "@/components/layout/PageWrapper";
import { SurveyCard } from "@/components/surverys/SurveyCard";
import { SurveyPagination } from "@/components/surverys/SurveyPagination";
import { SurveySearch } from "@/components/surverys/SurveySearch";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { categories, mockSurveys } from "@/data/mockData";
import { Survey } from "@/types/survey";
import { useState } from "react";
import { useEffect } from "react";

const ITEMS_PER_PAGE = 3;

export default function SurveysPage() {
  const [currentPage, setCurrentPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  useEffect(() => {
    setCurrentPage(1);
  }, [searchQuery]);
  const filterSurveys = (categoryId: string) => {
    return mockSurveys.filter(
      (survey: Survey) =>
        (categoryId === "all" || survey.category === categoryId) &&
        survey.title.toLowerCase().includes(searchQuery.toLowerCase())
    );
  };

  const paginateSurveys = (surveys: Survey[]) => {
    const startIndex = (currentPage - 1) * ITEMS_PER_PAGE;
    return surveys.slice(startIndex, startIndex + ITEMS_PER_PAGE);
  };

  return (
    <PageWrapper>
      <div className="space-y-4 mt-4">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4">
          <h1 className="text-4xl font-bold tracking-tight">Anketler</h1>
          <SurveySearch
            searchQuery={searchQuery}
            setSearchQuery={setSearchQuery}
          />
        </div>

        <Tabs defaultValue="all" className="w-full space-y-6">
          <TabsList className="w-full md:w-auto flex flex-wrap">
            {categories.map((category) => (
              <TabsTrigger key={category.id} value={category.id}>
                {category.label}
              </TabsTrigger>
            ))}
          </TabsList>

          {categories.map((category) => {
            const filteredSurveys = filterSurveys(category.id);
            const totalPages = Math.ceil(
              filteredSurveys.length / ITEMS_PER_PAGE
            );

            return (
              <TabsContent key={category.id} value={category.id}>
                <div className="space-y-6">
                  <div className="space-y-4">
                    {paginateSurveys(filteredSurveys).map((survey) => (
                      <SurveyCard key={survey.id} survey={survey} />
                    ))}
                  </div>

                  {totalPages > 1 && (
                    <SurveyPagination
                      currentPage={currentPage}
                      totalPages={totalPages}
                      setCurrentPage={setCurrentPage}
                    />
                  )}
                </div>
              </TabsContent>
            );
          })}
        </Tabs>
      </div>
    </PageWrapper>
  );
}
