// import require element to create router
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Items from "./pages/Items";

function App() {
  // creating browser router and defining paths and its components as pages.
  const router = createBrowserRouter([
    { path: "/", element: <Home /> },
    { path: "/about", element: <About /> },
    { path: "/items", element: <Items /> },
  ]);

  return (
    <>
      {/* providing router to render element */}
      <RouterProvider router={router} />
    </>
  );
}

export default App;
