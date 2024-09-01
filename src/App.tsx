import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { ThemeProvider } from "./components/provider/theme-provider";
import { lazy, Suspense } from "react";


//Components 
import Loading from "./components/common/loading";

// Layouts
import RootLayout from "./layouts/root-layout";


// Pages
import Home from "@/pages/home/home";
const ErrorPage = lazy(() => import("@/pages/error-page"))

export default function App() {
  const router = createBrowserRouter([
    {
      path: "/",
      element: <RootLayout />,
      errorElement: (
        <RootLayout>
          <Suspense fallback={<Loading />}>
            <ErrorPage />
          </Suspense>
        </RootLayout>
      ),
      children: [
        {
          index: true,
          element: <Home />
        }
      ]
    },
  ]);

  return (
    <ThemeProvider>
      <RouterProvider router={router} />
    </ThemeProvider>
  );
}
