import { Route, Routes } from "react-router-dom";
import * as Pages from "@pages/index";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";

export default function RouterProvider() {
  <Routes>
    {/* Routes admin */}
    <Route
      path="/admin/categories"
      element={
        <AdminRoute>
          <Pages.AdminCategories />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/dashboard"
      element={
        <AdminRoute>
          <Pages.AdminDashboard />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/kpi"
      element={
        <AdminRoute>
          <Pages.AdminKpi />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/login"
      element={
        <AdminRoute>
          <Pages.AdminLogin />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/proclamations"
      element={
        <AdminRoute>
          <Pages.AdminProclamations />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/sounds"
      element={
        <AdminRoute>
          <Pages.AdminSounds />
        </AdminRoute>
      }
    />
    <Route
      path="/admin/users"
      element={
        <AdminRoute>
          <Pages.AdminUsers />
        </AdminRoute>
      }
    />
    {/* Routes public */}
    <Route path="/" element={<Pages.Home />} />
    <Route path="/register" element={<Pages.Register />} />
    <Route path="/login" element={<Pages.Login />} />
    <Route path="/sitemap" element={<Pages.Sitemap />} />
    <Route path="/about" element={<Pages.About />} />
    <Route path="/terms-of-use" element={<Pages.TermsOfUse />} />
    <Route path="/contact" element={<Pages.Contact />} />
    <Route path="/cookies-policy" element={<Pages.CookiesPolicy />} />
    <Route path="/legal-notice" element={<Pages.LegalNotice />} />
    <Route path="/privacy-policy" element={<Pages.PrivacyPolicy />} />
    <Route path="/menu" element={<Pages.Menu />} />
    <Route path="/403" element={<Pages.Forbidden403 />} />
    <Route path="*" element={<Pages.NotFound404 />} />

    {/* Route protégé */}
    <Route
      path="/category/:categoryId/proclamations"
      element={<Pages.CategoryProclamations />}
    />
    <Route
      path="/favorites"
      element={
        <ProtectedRoute>
          <Pages.Favorites />
        </ProtectedRoute>
      }
    />
    <Route
      path="/reading/:proclamationId"
      element={
        <ProtectedRoute>
          <Pages.Reading />
        </ProtectedRoute>
      }
    />
    <Route
      path="/profile"
      element={
        <ProtectedRoute>
          <Pages.Profile />
        </ProtectedRoute>
      }
    />
  </Routes>;
}
