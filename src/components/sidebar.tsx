import { cn } from "@/lib/utils";
import { registry } from "@/lib/registry";
import { NavLink } from "react-router-dom";

export function Sidebar() {
  return (
    <div className="pb-12">
      <div className="space-y-4 py-4">
        <div className="px-3 py-2">
          <h2 className="mb-2 px-4 text-lg font-semibold">Components</h2>
          <div className="space-y-1">
            {registry.map((category) => {
              const Icon = category.icon;
              return (
                <NavLink
                  key={category.id}
                  to={`/components/${category.id}/${category.stories[0].id}`}
                  className={({ isActive }) =>
                    cn(
                      "flex items-center gap-3 rounded-lg px-3 py-2 text-sm transition-all hover:bg-accent",
                      isActive ? "bg-accent" : "transparent"
                    )
                  }
                >
                  <Icon className="h-4 w-4" />
                  {category.title}
                </NavLink>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}