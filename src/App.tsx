import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { ThemeToggle } from "@/components/theme-toggle";
import { Sidebar } from "@/components/sidebar";
import { ComponentView } from "@/pages/component-view";
import { BookOpen } from "lucide-react";

function App() {
  return (
    <Router>
      <div className="flex min-h-screen w-full">
        {/* Sidebar */}
        <div className="w-64 border-r  ">
          <div className="flex items-center gap-2 p-4 border-b">
            <BookOpen className="w-6 h-6" />
            <h2 className="font-semibold">Component Library</h2>
          </div>
          <Sidebar />
        </div>

        {/* Main content */}
        <div className="flex-1 w-full bg-gray-100 flex flex-col">
          <header className="flex items-center justify-between p-4 border-b fixed top-0 right-0 left-64 bg-white z-10">
            <div className="text-sm text-muted-foreground">
              Explore and learn about our components
            </div>
            <ThemeToggle />
          </header>
          <main className="flex-1 overflow-y-auto w-full pt-16">
            <Routes>
              <Route
                path="/"
                element={<Navigate to="/components/buttons" replace />}
              />
              <Route
                path="/components/:categoryId/:storyId?"
                element={<ComponentView />}
              />
            </Routes>
          </main>
        </div>
      </div>
    </Router>
  );
}

export default App;




    // <Router>
    //   <div className="flex h-screen w-full">
    //     {/* Sidebar */}
    //     <div className="w-64 border-r fixed inset-y-0 bg-white">
    //       <div className="flex items-center gap-2 p-4 border-b">
    //         <BookOpen className="w-6 h-6" />
    //         <h2 className="font-semibold">Component Library</h2>
    //       </div>
    //       <Sidebar />
    //     </div>

    //     {/* Main content */}
    //     <div className="flex-1 ml-64 flex flex-col">
    //       {/* Header */}
    //       <header className="flex items-center justify-between p-4 border-b bg-white fixed w-[calc(100%-16rem)] z-10">
    //         <div className="text-sm text-muted-foreground">
    //           Explore and learn about our components
    //         </div>
    //         <ThemeToggle />
    //       </header>

    //       {/* Main Content */}
    //       <main className="flex-1 overflow-y-auto w-full mt-16">
    //         <Routes>
    //           <Route
    //             path="/"
    //             element={<Navigate to="/components/buttons" replace />}
    //           />
    //           <Route
    //             path="/components/:categoryId/:storyId?"
    //             element={<ComponentView />}
    //           />
    //         </Routes>
    //       </main>
    //     </div>
    //   </div>
    // </Router>;