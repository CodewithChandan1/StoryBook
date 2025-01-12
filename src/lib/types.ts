import { LucideIcon } from "lucide-react";

export interface ComponentStory {
  id: string;
  title: string;
  description: string;
  component: React.ReactNode;
  code: string;
  variants?: ComponentStory[];
  props?: PropDefinition[];
  usage?: UsageExample[];
  accessibility?: AccessibilityInfo;
}

export interface ComponentCategory {
  id: string;
  title: string;
  description: string;
  icon: LucideIcon;
  stories: ComponentStory[];
  installation?: string;
  notes?: string[];
}

export interface PropDefinition {
  name: string;
  type: string;
  defaultValue?: string;
  description: string;
  required?: boolean;
}

export interface UsageExample {
  title: string;
  description: string;
  code: string;
}

export interface AccessibilityInfo {
  role?: string;
  practices: string[];
  keyboard?: KeyboardInteraction[];
}

export interface KeyboardInteraction {
  key: string;
  description: string;
}