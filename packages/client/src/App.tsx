import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import * as Pages from "@pages/index";

export default function App() {
  return (
    <BrowserRouter>
      <nav style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
        <Link to="/">Accueil</Link>
        <Link to="/about">About</Link>
        <Link to="/admin/categories">AdminCategories</Link>
        <Link to="/admin/dashboard">AdminDashboard</Link>
        <Link to="/admin/kpi">AdminKpi</Link>
        <Link to="/admin/login">AdminLogin</Link>
        <Link to="/admin/proclamations">AdminProclamations</Link>
        <Link to="/admin/sounds">AdminSounds</Link>
        <Link to="/admin/users">AdminUsers</Link>
        <Link to="/category/:categoryId/proclamations">CategoryProclamations</Link>
        <Link to="/contact">Contact</Link>
        <Link to="/cookies-policy">CookiesPolicy</Link>
        <Link to="/favorites">Favorites</Link>
        <Link to="/403">Forbidden403</Link>
        <Link to="/legal-notice">LegalNotice</Link>
        <Link to="/login">Login</Link>
        <Link to="/not-found">NotFound404</Link>
        <Link to="/privacy-policy">PrivacyPolicy</Link>
        <Link to="/profile">Profil</Link>
        <Link to="/reading/:proclamationId">Reading</Link>
        <Link to="/register">Register</Link>
        <Link to="/sitemap">Sitemap</Link>
        <Link to="/terms-of-use">TermsOfUse</Link>
      </nav>
      <Routes>
        <Route path="/" element={<Pages.Home />} />
        <Route path="/about" element={<Pages.About />} />
        <Route path="/admin/categories" element={<Pages.AdminCategories />} />
        <Route path="/admin/dashboard" element={<Pages.AdminDashboard />} />
        <Route path="/admin/kpi" element={<Pages.AdminKpi />} />
        <Route path="/admin/login" element={<Pages.AdminLogin />} />
        <Route path="/admin/proclamations" element={<Pages.AdminProclamations />} />
        <Route path="/admin/sounds" element={<Pages.AdminSounds />} />
        <Route path="/admin/users" element={<Pages.AdminUsers />} />
        <Route path="/category/:categoryId/proclamations" element={<Pages.CategoryProclamations />} />
        <Route path="/contact" element={<Pages.Contact />} />
        <Route path="/cookies-policy" element={<Pages.CookiesPolicy />} />
        <Route path="/favorites" element={<Pages.Favorites />} />
        <Route path="/403" element={<Pages.Forbidden403 />} />
        <Route path="/legal-notice" element={<Pages.LegalNotice />} />
        <Route path="/login" element={<Pages.Login />} />
        <Route path="/privacy-policy" element={<Pages.PrivacyPolicy />} />
        <Route path="/profile" element={<Pages.Profile />} />
        <Route path="/reading/:proclamationId" element={<Pages.Reading />} />
        <Route path="/register" element={<Pages.Register />} />
        <Route path="/sitemap" element={<Pages.Sitemap />} />
        <Route path="/terms-of-use" element={<Pages.TermsOfUse />} />
        <Route path="*" element={<Pages.NotFound404 />} />
      </Routes>
    </BrowserRouter>
  );
}
