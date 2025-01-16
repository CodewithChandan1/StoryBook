import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { ComponentCategory } from "../types";
import { User } from "lucide-react";

export const avatarCategory: ComponentCategory = {
  id: "avatar",
  title: "Avatar",
  icon: User,
  description: "A component for displaying user profile pictures.",
  stories: [
    {
      id: "default-avatar",
      title: "Default Avatar",
      description: "A basic avatar with an image and fallback content.",
      component: (
        <Avatar>
          <AvatarImage
            src="https://via.placeholder.com/150"
            alt="User Avatar"
          />
          <AvatarFallback>AB</AvatarFallback>
        </Avatar>
      ),
      code: `<Avatar>
  <AvatarImage src="https://via.placeholder.com/150" alt="User Avatar" />
  <AvatarFallback>AB</AvatarFallback>
</Avatar>`,
    },
    {
      id: "avatar-with-initials",
      title: "Avatar with Initials",
      description: "An avatar that shows user initials as a fallback.",
      component: (
        <Avatar>
          <AvatarImage src="" alt="User Avatar" />
          <AvatarFallback>JD</AvatarFallback>
        </Avatar>
      ),
      code: `<Avatar>
  <AvatarImage src="" alt="User Avatar" />
  <AvatarFallback>JD</AvatarFallback>
</Avatar>`,
    },
  ],
};
