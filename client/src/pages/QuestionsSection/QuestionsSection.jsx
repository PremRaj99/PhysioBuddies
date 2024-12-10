import React from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function QuestionsSection() {
  return (
    <div className="p-4 md:w-4/5 w-auto">
      <DropdownMenu>
        <DropdownMenuTrigger>
          <button className="bg-gray-200 text-gray-700 font-semibold py-2 px-4 rounded inline-flex items-center">
            <span className="mr-1 text-3xl">Frequently Asked Questions</span>
          </button>
        </DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuItem>
            <DropdownMenuLabel>
              Most Recent
            </DropdownMenuLabel>
          </DropdownMenuItem>
          <DropdownMenuItem>
            <DropdownMenuLabel>
              Most Popular
            </DropdownMenuLabel>
          </DropdownMenuItem>
          <DropdownMenuSeparator />
          <DropdownMenuItem>
            <DropdownMenuLabel>
              Most Voted
            </DropdownMenuLabel>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}
