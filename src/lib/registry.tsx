import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Bell } from "lucide-react";
import { Alert, AlertDescription, AlertTitle } from "@/components/ui/alert";
import { ComponentCategory } from "./types";
import { BookOpen, Layers, MessageSquare } from "lucide-react";
import { badgeCategory } from "./registry/badge";
import { selectCategory } from "./registry/select";
import { tabsCategory } from "./registry/tabs";
import { inputCategory } from "./registry/input";
import { accordionCategory } from "./registry/accordion";
import { calendarCategory } from "./registry/calendar";
import { chartCategory } from "./registry/chart";
import { carouselCategory } from "./registry/crousel";
import { skeletonCategory } from "./registry/skeleton";
import { tableCategory } from "./registry/table";
import { tooltipCategory } from "./registry/tooltip";
import { switchCategory } from "./registry/switch";
import { alertDialogCategory } from "./registry/alertDialogCategory";
import { aspectRatioCategory } from "./registry/ aspectRatioCategory";
import { avatarCategory } from "./registry/avatarCategory";
import { breadcrumbCategory } from "./registry/breadcrumbCategory";
import { checkboxCategory } from "./registry/checkbox";
import { collapsibleCategory } from "./registry/collapsibleCategory";
import { contextMenuCategory } from "./registry/contextMenuCategory";
import { dialogCategory } from "./registry/dialogCategory";
import { drawerCategory } from "./registry/✅ drawerCategory";
import { dropdownCategory } from "./registry/dropdownCategory";
import { formCategory } from "./registry/formcategory";
import { hoverCardCategory } from "./registry/hoverCard";
import { forminputCategory } from "./registry/forminput";
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
  {
    id: "alerts",
    title: "Alerts",
    icon: Bell,
    description: "Display important messages to users",
    stories: [
      {
        id: "default-alert",
        title: "Default Alert",
        description: "A standard alert component",
        component: (
          <Alert>
            <AlertTitle>Heads up!</AlertTitle>
            <AlertDescription>
              You can add components to your app using the cli.
            </AlertDescription>
          </Alert>
        ),
        code: `<Alert>
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components to your app using the cli.
  </AlertDescription>
</Alert>`,
        variants: [
          {
            id: "destructive-alert",
            title: "Destructive Alert",
            description: "An alert for destructive actions",
            component: (
              <Alert variant="destructive">
                <AlertTitle>Error</AlertTitle>
                <AlertDescription>
                  Your session has expired. Please log in again.
                </AlertDescription>
              </Alert>
            ),
            code: `<Alert variant="destructive">
  <AlertTitle>Error</AlertTitle>
  <AlertDescription>
    Your session has expired. Please log in again.
  </AlertDescription>
</Alert>`,
          },
        ],
      },
    ],
  },
  badgeCategory,
  selectCategory,
  tabsCategory,
  inputCategory,
  accordionCategory,
  calendarCategory,
  chartCategory,
  carouselCategory,
  skeletonCategory,
  tableCategory,
  tooltipCategory,
  switchCategory,
  alertDialogCategory,
  aspectRatioCategory,
  avatarCategory,
  breadcrumbCategory,
  checkboxCategory,
  collapsibleCategory,
  contextMenuCategory,
  dialogCategory,
  drawerCategory,
  dropdownCategory,
  formCategory,
  hoverCardCategory,
  forminputCategory,
];
