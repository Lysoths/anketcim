import React from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "../ui/button";
import Link from "next/link";
import { BarChart, FileText, PlusCircle } from "lucide-react";

const CardContents = () => {
  return (
    <>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="items-center">
          <FileText className="mb-4 text-primary" size={48} />
          <CardTitle>Anket Oluştur</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            Özgün anketler hazırlayın
          </p>
          <Link href="/login">
            <Button className="w-full">Başla</Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="items-center">
          <PlusCircle className="mb-4 text-primary" size={48} />
          <CardTitle>Mevcut Anketler</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            Yayındaki tüm anketlere göz atın
          </p>
          <Link href="/anket">
            <Button variant="secondary" className="w-full">
              İncele
            </Button>
          </Link>
        </CardContent>
      </Card>
      <Card className="hover:shadow-lg transition-shadow">
        <CardHeader className="items-center">
          <BarChart className="mb-4 text-primary" size={48} />
          <CardTitle>Sonuçları Görüntüle</CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <p className="text-muted-foreground mb-4">
            Anket sonuçlarını analiz edin
          </p>
          <Link href="/login">
            <Button variant="outline" className="w-full">
              Görüntüle
            </Button>
          </Link>
        </CardContent>
      </Card>
    </>
  );
};

export default CardContents;
