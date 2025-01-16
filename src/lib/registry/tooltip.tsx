import {
  Tooltip,
  TooltipTrigger,
  TooltipContent,
  TooltipProvider,
} from "@/components/ui/tooltip";
import { ComponentCategory } from "../types";
import { Info } from "lucide-react";

export const tooltipCategory: ComponentCategory = {
  id: "tooltip",
  title: "Tooltip",
  icon: Info,
  description: "Display additional information on hover or focus.",
  stories: [
    {
      id: "default-tooltip",
      title: "Default Tooltip",
      description: "A standard tooltip that appears on hover or focus.",
      component: (
        <TooltipProvider>
          <Tooltip>
            <TooltipTrigger>
              <button className="p-2 bg-gray-800 text-white rounded">
                Hover me
              </button>
            </TooltipTrigger>
            <TooltipContent side="top">This is a tooltip</TooltipContent>
          </Tooltip>
        </TooltipProvider>
      ),
      code: `<TooltipProvider>
  <Tooltip>
    <TooltipTrigger>
      <button className="p-2 bg-gray-800 text-white rounded">
        Hover me
      </button>
    </TooltipTrigger>
    <TooltipContent side="top">
      This is a tooltip
    </TooltipContent>
  </Tooltip>
</TooltipProvider>`,
    },
  ],
};
