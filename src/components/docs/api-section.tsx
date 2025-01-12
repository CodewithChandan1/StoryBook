import { Card } from "@/components/ui/card";
import { PropDefinition } from "@/lib/types";

interface ApiSectionProps {
  props: PropDefinition[];
}

export function ApiSection({ props }: ApiSectionProps) {
  return (
    <Card className="p-6">
      <h3 className="text-lg font-semibold mb-4">Props</h3>
      <div className="divide-y">
        {props.map((prop) => (
          <div key={prop.name} className="py-4">
            <div className="flex items-center gap-2">
              <code className="text-sm font-mono">{prop.name}</code>
              <span className="text-sm text-muted-foreground">{prop.type}</span>
              {prop.required && (
                <span className="text-xs text-destructive">Required</span>
              )}
            </div>
            <p className="mt-1 text-sm text-muted-foreground">
              {prop.description}
            </p>
            {prop.defaultValue && (
              <p className="mt-1 text-sm">
                Default: <code>{prop.defaultValue}</code>
              </p>
            )}
          </div>
        ))}
      </div>
    </Card>
  );
}