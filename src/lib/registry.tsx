import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { ComponentCategory } from "./types";
import { BookOpen, Layers, MessageSquare } from "lucide-react";

export const registry: ComponentCategory[] = [
  {
    id: "buttons",
    title: "Buttons",
    description: "Clickable elements that trigger actions",
    icon: BookOpen, 
    stories: [
      {
        id: "default-button",
        title: "Default Button",
        description: "A standard button component",
        component: <Button>Click me</Button>,
        code: `<Button>Click me</Button>`,
        variants: [
          {
            id: "secondary-button",
            title: "Secondary Button",
            description: "A secondary style button",
            component: <Button variant="secondary">Secondary</Button>,
            code: `<Button variant="secondary">Secondary</Button>`,
          },
          {
            id: "destructive-button",
            title: "Destructive Button",
            description: "A button for destructive actions",
            component: <Button variant="destructive">Delete</Button>,
            code: `<Button variant="destructive">Delete</Button>`,
          },
        ],
      },
    ],
  },
  {
    id: "cards",
    title: "Cards",
    description: "Container components for related content",
    icon: Layers, 
    stories: [
      {
        id: "default-card",
        title: "Default Card",
        description: "A standard card component",
        component: (
          <Card className="w-[350px]">
            <CardHeader>
              <CardTitle>Card Title</CardTitle>
              <CardDescription>Card description goes here</CardDescription>
            </CardHeader>
            <CardContent>
              <p>Card content</p>
            </CardContent>
            <CardFooter>
              <Button>Action</Button>
            </CardFooter>
          </Card>
        ),
        code: `<Card>
  <CardHeader>
    <CardTitle>Card Title</CardTitle>
    <CardDescription>Card description goes here</CardDescription>
  </CardHeader>
  <CardContent>
    <p>Card content</p>
  </CardContent>
  <CardFooter>
    <Button>Action</Button>
  </CardFooter>
</Card>`,
      },
    ],
  },
  {
    id: "messages",
    title: "Messages",
    description: "Components for messaging",
    icon: MessageSquare, 
    stories: [
      {
        id: "default-message",
        title: "Default Message",
        description: "A standard message component",
        component: <p>Message content</p>,
        code: `<p>Message content</p>`,
      },
    ],
  },
];
