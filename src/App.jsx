import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster } from "react-hot-toast";
import { ItemProvider } from "../src/context/contextItem";
import { Suspense, lazy } from "react";

import Applayout from "./features/Applayout.jsx";
import Spinner from "./features/Spinner.jsx";

const SpecialMenu = lazy(() => import("./pages/SpecialMenu.jsx"));
const DrinkMenu = lazy(() => import("./pages/DrinkMenu.jsx"));
const Side = lazy(() => import("./pages/Side.jsx"));
const Home = lazy(() => import("./pages/Home"));
const About = lazy(() => import("./pages/About"));
const MenuLayout = lazy(() => import("./features/MenuLayout"));
const BurgerMenu = lazy(() => import("./pages/BurgerMenu"));
const PizzaMenu = lazy(() => import("./pages/PizzaMenu"));
const BBQMenu = lazy(() => import("./pages/BBQMenu"));
const Booking = lazy(() => import("./pages/Booking"));
const Contact = lazy(() => import("./pages/Contact"));
const Gallery = lazy(() => import("./pages/Gallery"));
const PageNotFound = lazy(() => import("./pages/PageNotFound"));
function App() {
  const queryClient = new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 3,
      },
    },
  });

  return (
    <ItemProvider>
      <QueryClientProvider client={queryClient}>
        <ReactQueryDevtools initialIsOpen={false} />
        <BrowserRouter>
          <Suspense fallback={<Spinner />}>
            <Routes>
              <Route element={<Applayout />}>
                <Route index element={<Home />} />
                <Route path="about" element={<About />} />
                <Route path="menu/" element={<MenuLayout />}>
                  <Route path="burger" element={<BurgerMenu />} />
                  <Route path="pizza" element={<PizzaMenu />} />
                  <Route path="barbeque" element={<BBQMenu />} />
                  <Route path="drink" element={<DrinkMenu />} />
                  <Route path="special" element={<SpecialMenu />} />
                  <Route path="side" element={<Side />} />
                </Route>
                <Route path="booking" element={<Booking />} />
                <Route path="Contact" element={<Contact />} />
                <Route path="gallery" element={<Gallery />} />
                <Route path="*" element={<PageNotFound />} />
              </Route>
            </Routes>
          </Suspense>
        </BrowserRouter>
      </QueryClientProvider>
      <Toaster
        position="top-center"
        gutter={12}
        containerStyle={{ margin: "8px" }}
        toastOptions={{
          success: {
            duration: 3000,
          },
          error: {
            duration: 5000,
          },
          style: {
            fontSize: "16px",
            maxWidth: "500px",
            padding: "16px 24px",
            backgroundColor: "var(--color-grey-0)",
            color: "var(--color-grey-700)",
            opacity: "100",
            border: "1px solid var(--color-grey-200)",
          },
        }}
      />
    </ItemProvider>
  );
}

export default App;
