import { Card } from "@/components/ui/card";
import { AccessibilityInfo } from "@/lib/types";

interface AccessibilitySectionProps {
  accessibility: AccessibilityInfo;
}

export function AccessibilitySection({ accessibility }: AccessibilitySectionProps) {
  return (
    <Card className="p-6">
      {accessibility.role && (
        <div className="mb-4">
          <h3 className="text-lg font-semibold mb-2">ARIA Role</h3>
          <code className="text-sm">{accessibility.role}</code>
        </div>
      )}
      <div className="mb-4">
        <h3 className="text-lg font-semibold mb-2">Best Practices</h3>
        <ul className="list-disc list-inside space-y-2">
          {accessibility.practices.map((practice, index) => (
            <li key={index} className="text-sm text-muted-foreground">
              {practice}
            </li>
          ))}
        </ul>
      </div>
      {accessibility.keyboard && (
        <div>
          <h3 className="text-lg font-semibold mb-2">Keyboard Interactions</h3>
          <div className="grid grid-cols-2 gap-2">
            {accessibility.keyboard.map((k, index) => (
              <div key={index} className="flex gap-2">
                <kbd className="px-2 py-1 bg-muted rounded text-sm">{k.key}</kbd>
                <span className="text-sm text-muted-foreground">
                  {k.description}
                </span>
              </div>
            ))}
          </div>
        </div>
      )}
    </Card>
  );
}