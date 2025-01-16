import { AspectRatio } from "@/components/ui/aspect-ratio";
import { ComponentCategory } from "../types";
import { Frame } from "lucide-react";

export const aspectRatioCategory: ComponentCategory = {
  id: "aspect-ratio",
  title: "Aspect Ratio",
  icon: Frame,
  description: "A utility component for maintaining a consistent aspect ratio.",
  stories: [
    {
      id: "default-aspect-ratio",
      title: "Default Aspect Ratio",
      description: "A simple aspect ratio component for embedding media.",
      component: (
        <AspectRatio ratio={16 / 9} className="bg-gray-200">
          <img
            src="https://via.placeholder.com/1920x1080"
            alt="Aspect Ratio Example"
            className="h-full w-full object-cover"
          />
        </AspectRatio>
      ),
      code: `<AspectRatio ratio={16 / 9} className="bg-gray-200">
  <img
    src="https://via.placeholder.com/1920x1080"
    alt="Aspect Ratio Example"
    className="h-full w-full object-cover"
  />
</AspectRatio>`,
    },
    {
      id: "square-aspect-ratio",
      title: "Square Aspect Ratio",
      description: "An aspect ratio of 1:1 for square content.",
      component: (
        <AspectRatio ratio={1} className="bg-gray-300">
          <div className="flex items-center justify-center h-full text-lg font-bold">
            1:1
          </div>
        </AspectRatio>
      ),
      code: `<AspectRatio ratio={1} className="bg-gray-300">
  <div className="flex items-center justify-center h-full text-lg font-bold">
    1:1
  </div>
</AspectRatio>`,
    },
  ],
};
