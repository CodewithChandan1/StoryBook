import { useParams } from "react-router-dom";
import { registry } from "@/lib/registry";
import { CodePreview } from "@/components/code-preview";
import { Card } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ApiSection } from "@/components/docs/api-section";
import { AccessibilitySection } from "@/components/docs/accessibility-section";
import { VariantSection } from "@/components/docs/variant-section";

export function ComponentView() {
  const { categoryId, storyId } = useParams();
  const category = registry.find((c) => c.id === categoryId);
  const story = category?.stories.find((s) => s.id === storyId);

  if (!category || !story) {
    return <div>Component not found</div>;
  }

  return (
    <div className="p-6">
      <h1 className="text-3xl text-black font-bold mb-2">
        {story.title}
      </h1>
      <p className="text-muted-foreground mb-6">{story.description}</p>

      <Tabs defaultValue="preview" className="mb-6">
        <TabsList>
          <TabsTrigger value="preview">Preview</TabsTrigger>
          <TabsTrigger value="code">Code</TabsTrigger>
          {story.props && <TabsTrigger value="api">API</TabsTrigger>}
          {story.accessibility && (
            <TabsTrigger value="accessibility">Accessibility</TabsTrigger>
          )}
        </TabsList>

        <TabsContent value="preview">
          <Card className="p-6">
            <div className="flex items-center justify-center min-h-[200px]">
              {story.component}
            </div>
          </Card>
        </TabsContent>

        <TabsContent value="code">
          <CodePreview code={story.code} />
          {category.installation && (
            <div className="mt-4">
              <h3 className="text-lg font-semibold mb-2">Installation</h3>
              <CodePreview code={category.installation} />
            </div>
          )}
        </TabsContent>

        {story.props && (
          <TabsContent value="api">
            <ApiSection props={story.props} />
          </TabsContent>
        )}

        {story.accessibility && (
          <TabsContent value="accessibility">
            <AccessibilitySection accessibility={story.accessibility} />
          </TabsContent>
        )}
      </Tabs>

      {story.variants && story.variants.length > 0 && (
        <VariantSection variants={story.variants} />
      )}
    </div>
  );
}