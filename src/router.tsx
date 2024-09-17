import { 
    createBrowserRouter,
    // RouterProvider,
    // Route,
  } from "react-router-dom";

  import Home from "./pages/Home.tsx";
  import Project from "./pages/Project.tsx";

   const router = createBrowserRouter([
    {
      path: "/",
      element: <Home/>,
    },
    {
      path: "project",
      element: <Project/>,
    },
  ]); 
   
  
  export default router;