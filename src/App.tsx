
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Home from "./pages/Home";
import Catalog from "./pages/Catalog";
import ProductDetail from "./pages/ProductDetail";
import Cart from "./pages/Cart";
import About from "./pages/About";
import Contacts from "./pages/Contacts";
import Recipes from "./pages/Recipes";
import Blog from "./pages/Blog";
import Delivery from "./pages/Delivery";
import HoneyTypes from "./pages/HoneyTypes";
import HealthBenefits from "./pages/HealthBenefits";
import Beekeepers from "./pages/Beekeepers";
import Wholesale from "./pages/Wholesale";
import Certificates from "./pages/Certificates";
import FAQ from "./pages/FAQ";
import Reviews from "./pages/Reviews";
import Checkout from "./pages/Checkout";
import Profile from "./pages/Profile";
import Comparison from "./pages/Comparison";
import Wishlist from "./pages/Wishlist";
import Search from "./pages/Search";
import Promotions from "./pages/Promotions";
import GiftCards from "./pages/GiftCards";
import Subscription from "./pages/Subscription";
import Consultation from "./pages/Consultation";
import TrackOrder from "./pages/TrackOrder";
import Returns from "./pages/Returns";
import Privacy from "./pages/Privacy";
import Terms from "./pages/Terms";
import Payment from "./pages/Payment";
import Sitemap from "./pages/Sitemap";
import NotFound from "./pages/NotFound";
import { CartProvider } from "./contexts/CartContext";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <CartProvider>
      <TooltipProvider>
        <Toaster />
        <Sonner />
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="catalog" element={<Catalog />} />
              <Route path="product/:id" element={<ProductDetail />} />
              <Route path="cart" element={<Cart />} />
              <Route path="about" element={<About />} />
              <Route path="contacts" element={<Contacts />} />
              <Route path="recipes" element={<Recipes />} />
              <Route path="blog" element={<Blog />} />
              <Route path="delivery" element={<Delivery />} />
              <Route path="honey-types" element={<HoneyTypes />} />
              <Route path="health-benefits" element={<HealthBenefits />} />
              <Route path="beekeepers" element={<Beekeepers />} />
              <Route path="wholesale" element={<Wholesale />} />
              <Route path="certificates" element={<Certificates />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="reviews" element={<Reviews />} />
              <Route path="checkout" element={<Checkout />} />
              <Route path="profile" element={<Profile />} />
              <Route path="comparison" element={<Comparison />} />
              <Route path="wishlist" element={<Wishlist />} />
              <Route path="search" element={<Search />} />
              <Route path="promotions" element={<Promotions />} />
              <Route path="gift-cards" element={<GiftCards />} />
              <Route path="subscription" element={<Subscription />} />
              <Route path="consultation" element={<Consultation />} />
              <Route path="track-order" element={<TrackOrder />} />
              <Route path="returns" element={<Returns />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="terms" element={<Terms />} />
              <Route path="payment" element={<Payment />} />
              <Route path="sitemap" element={<Sitemap />} />
              {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
              <Route path="*" element={<NotFound />} />
            </Route>
          </Routes>
        </BrowserRouter>
      </TooltipProvider>
    </CartProvider>
  </QueryClientProvider>
);

export default App;
