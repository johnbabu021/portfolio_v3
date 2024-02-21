import { Outlet, useRoutes } from "react-router-dom";
import BlogPage from "./pages/blogs/BlogPage";
import HomePage from "./pages/home/HomePage";
import ProjectPage from "./pages/projects/ProjectPage";
import TagPage from "./pages/tags/TagPage";

export default function AppRoutes() {
  const router = useRoutes([
    {
      path: "/",
      element: <Outlet />,
      children: [
        {
          path: "",
          element: <HomePage />,
        },
        {
          path: "projects",
          element: <ProjectPage />,
        },
        {
          path: "tags",
          element: <TagPage />,
        },
        {
          path: "blogs",
          element: <BlogPage />,
        },
      ],
    },
  ]);
  return router;
}
