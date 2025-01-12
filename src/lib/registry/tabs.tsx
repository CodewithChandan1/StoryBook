import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { ComponentCategory } from "../types";
import { Layout } from "lucide-react";

export const tabsCategory: ComponentCategory = {
  id: "tabs",
  title: "Tabs",
  icon: Layout,
  description: "Switch between different content views",
  stories: [
    {
      id: "default-tabs",
      title: "Default Tabs",
      description: "A standard tabs component",
      component: (
        <Tabs defaultValue="account" className="w-[400px]">
          <TabsList>
            <TabsTrigger value="account">Account</TabsTrigger>
            <TabsTrigger value="password">Password</TabsTrigger>
          </TabsList>
          <TabsContent value="account">Account settings here.</TabsContent>
          <TabsContent value="password">Change your password here.</TabsContent>
        </Tabs>
      ),
      code: `<Tabs defaultValue="account" className="w-[400px]">
  <TabsList>
    <TabsTrigger value="account">Account</TabsTrigger>
    <TabsTrigger value="password">Password</TabsTrigger>
  </TabsList>
  <TabsContent value="account">Account settings here.</TabsContent>
  <TabsContent value="password">Change your password here.</TabsContent>
</Tabs>`,
    },
  ],
};