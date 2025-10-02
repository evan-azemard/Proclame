import { Navigate, Route, Routes } from "react-router-dom";
import * as Templates from "@templates/index";
import { ProtectedRoute } from "./ProtectedRoute";
import { AdminRoute } from "./AdminRoute";

export default function RouterProvider() {
  return (
    <Routes>
      {/* Routes admin */}
      <Route
        path="/admin/categories"
        element={
          <AdminRoute>
            <Templates.AdminCategories />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/"
        element={
          <AdminRoute>
            <Templates.AdminHome />
          </AdminRoute>
        }
      />

      <Route
        path="/admin/proclamations"
        element={
          <AdminRoute>
            <Templates.AdminProclamations />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/sounds"
        element={
          <AdminRoute>
            <Templates.AdminSounds />
          </AdminRoute>
        }
      />
      <Route
        path="/admin/users"
        element={
          <AdminRoute>
            <Templates.AdminUsers />
          </AdminRoute>
        }
      />
      {/* Routes public */}
      <Route path="/" element={<Templates.Home />} />
      <Route path="/register" element={<Templates.Register />} />
      <Route path="/login" element={<Templates.Login />} />
      <Route path="/sitemap" element={<Templates.Sitemap />} />
      <Route path="/about" element={<Templates.About />} />
      <Route path="/terms-of-use" element={<Templates.TermsOfUse />} />
      <Route path="/contact" element={<Templates.Contact />} />
      <Route path="/cookies-policy" element={<Templates.CookiesPolicy />} />
      <Route path="/legal-notice" element={<Templates.LegalNotice />} />
      <Route path="/privacy-policy" element={<Templates.PrivacyPolicy />} />
      <Route path="/accessibility" element={<Templates.Accessibility />} />
      <Route path="/menu" element={<Templates.Menu />} />
      <Route path="/403" element={<Templates.Forbidden403 />} />
      <Route path="/404" element={<Templates.NotFound404 />} />
      <Route path="*" element={<Navigate to="/404" replace />} />

      {/* Route protégé */}
      <Route
        path="/categories/:categoryId/proclamations"
        element={<Templates.CategoryProclamations />}
      />

      <Route
        path="/categories/"
        element={<Templates.Category />}
      />
      <Route
        path="/favorites"
        element={
          <ProtectedRoute>
            <Templates.Favorites />
          </ProtectedRoute>
        }
      />
      <Route
        path="/categories/:categoryId/proclamations/:proclamationId"
        element={
          <ProtectedRoute>
            <Templates.Reading />
          </ProtectedRoute>
        }
      />
      <Route
        path="/profile"
        element={
          <ProtectedRoute>
            <Templates.Profile />
          </ProtectedRoute>
        }
      />
    </Routes>
  );
}
