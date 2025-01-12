import { Card } from "@/components/ui/card";
import { CodePreview } from "@/components/code-preview";
import { ComponentStory } from "@/lib/types";

interface VariantSectionProps {
  variants: ComponentStory[];
}

export function VariantSection({ variants }: VariantSectionProps) {
  return (
    <div className="mt-8">
      <h2 className="text-2xl font-semibold mb-4">Variants</h2>
      <div className="space-y-6">
        {variants.map((variant) => (
          <div key={variant.id}>
            <h3 className="text-xl font-medium mb-2">{variant.title}</h3>
            <p className="text-muted-foreground mb-4">{variant.description}</p>
            <Card className="p-6 mb-4">
              <div className="flex items-center justify-center min-h-[200px]">
                {variant.component}
              </div>
            </Card>
            <CodePreview code={variant.code} />
          </div>
        ))}
      </div>
    </div>
  );
}