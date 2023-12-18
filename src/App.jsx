import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About";
import Booking from "./pages/Booking";

import PageNotFound from "./pages/PageNotFound";
import { Toaster } from "react-hot-toast";
import Applayout from "./UI/Applayout";
import Gallery from "./pages/Gallery";
import { ItemProvider } from "../src/context/contextItem";
import BurgerMenu from "./pages/BurgerMenu";
import MenuLayout from "./UI/MenuLayout";
import PizzaMenu from "./pages/PizzaMenu";

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
          <Routes>
            <Route element={<Applayout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="menu" element={<MenuLayout />}>
                <Route index element={<BurgerMenu />} />
                <Route path="burger" element={<BurgerMenu />} />
                <Route path="pizza" element={<PizzaMenu />} />
              </Route>

              <Route path="booking" element={<Booking />} />
              <Route path="Contact" element={<Booking />} />

              <Route path="gallery" element={<Gallery />} />
              <Route path="*" element={<PageNotFound />} />
            </Route>
          </Routes>
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
            border: "1px solid var(--color-grey-200",
          },
        }}
      />
    </ItemProvider>
  );
}

export default App;
