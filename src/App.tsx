import { BrowserRouter } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import AppRoutes from "./AppRoutes";
import { CookieConsent } from "./components/CookieConsent";

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
      <CookieConsent />
    </HelmetProvider>
  );
}
