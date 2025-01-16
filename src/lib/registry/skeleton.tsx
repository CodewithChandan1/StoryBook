import { Skeleton } from "@/components/ui/skeleton";
import { ComponentCategory } from "../types";
import { Square } from "lucide-react";

export const skeletonCategory: ComponentCategory = {
  id: "skeleton",
  title: "Skeleton",
  icon: Square,
  description: "A skeleton loading placeholder for indicating loading states.",
  stories: [
    {
      id: "default-skeleton",
      title: "Default Skeleton",
      description: "A simple skeleton loading placeholder.",
      component: <Skeleton className="h-8 w-full" />,
      code: `<Skeleton className="h-8 w-full" />`,
    },
    {
      id: "skeleton-avatar",
      title: "Skeleton Avatar",
      description: "A skeleton placeholder for an avatar image.",
      component: <Skeleton className="h-12 w-12 rounded-full" />,
      code: `<Skeleton className="h-12 w-12 rounded-full" />`,
    },
    {
      id: "skeleton-text",
      title: "Skeleton Text",
      description: "A skeleton placeholder for text content.",
      component: (
        <div className="space-y-2">
          <Skeleton className="h-4 w-3/4" />
          <Skeleton className="h-4 w-1/2" />
        </div>
      ),
      code: `<div className="space-y-2">
  <Skeleton className="h-4 w-3/4" />
  <Skeleton className="h-4 w-1/2" />
</div>`,
    },
  ],
};
