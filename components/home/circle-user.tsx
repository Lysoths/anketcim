"use client";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { CircleUser } from "lucide-react";
import React from "react";

const CircleUsers = (props: any) => {
  return (
    <TooltipProvider>
      <Tooltip>
        <TooltipTrigger>
          <CircleUser
            className={`${
              props.theme === "dark"
                ? "hover:bg-slate-200 hover:text-black hover:rounded-lg p-2 cursor-pointer"
                : "hover:bg-slate-200 hover:text-black hover:rounded-lg p-2   cursor-pointer"
            }`}
            size={35}
            strokeWidth={1.75}
          />
        </TooltipTrigger>
        <TooltipContent>
          <p>Giriş Yap</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  );
};

export default CircleUsers;
