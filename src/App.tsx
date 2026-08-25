import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Outlet } from "react-router-dom";
import type { RouteRecord } from "vite-react-ssg";
import Index from "./pages/Index";
import Menu from "./pages/Menu";
import Story from "./pages/Story";
import Catering from "./pages/Catering";
import Contact from "./pages/Contact";
import FAQ from "./pages/FAQ";

import Gallery from "./pages/Gallery";
import NotFound from "./pages/NotFound";
import { ScrollToTop } from "./components/ScrollToTop";

const queryClient = new QueryClient();

// Shared providers/layout for every route. vite-react-ssg supplies its own
// router AND its own HelmetProvider internally — adding another
// HelmetProvider here would create a second, disconnected Helmet context
// that vite-react-ssg's <head> extraction never sees, silently dropping
// every page's title/meta tags from the built HTML.
const Layout = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <ScrollToTop />
      <Outlet />
    </TooltipProvider>
  </QueryClientProvider>
);

// Exported route table consumed by vite-react-ssg (see src/main.tsx) to
// prerender every page at build time, each with its own Helmet-driven
// title/meta baked into static HTML.
export const routes: RouteRecord[] = [
  {
    path: "/",
    element: <Layout />,
    children: [
      { index: true, element: <Index /> },
      { path: "menu", element: <Menu /> },
      { path: "story", element: <Story /> },
      { path: "catering", element: <Catering /> },
      { path: "contact", element: <Contact /> },
      { path: "faq", element: <FAQ /> },
      { path: "gallery", element: <Gallery /> },
      { path: "*", element: <NotFound /> },
    ],
  },
];