import { FooterNav, HeaderNav, TitleWithParagraph } from "@molecules/index";
import { SectionForm } from "@organisms/index";
import { BrowserRouter, Link } from "react-router-dom";

export default function App() {
  return (
    <BrowserRouter>
      <HeaderNav />

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
        <Link to="/category/:categoryId/proclamations">
          CategoryProclamations
        </Link>
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
        <Link to="/menu">Menu</Link>
      </nav>

      <br/>
      <SectionForm  type="login" />
      <FooterNav />
    </BrowserRouter>
  );
}
