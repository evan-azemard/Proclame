import { useLocation } from "react-router-dom";
import { FooterNav, HeaderNav } from "@molecules/index";
import type { RootLayoutProps } from "./RootLayout.props";
import { useState, useEffect } from "react";

const READING_ROUTE_REGEX = /^\/categories\/[^/]+\/proclamations\/[^/]+$/;

export default function RootLayout({ children }: RootLayoutProps) {
  const location = useLocation();

  const [hideHeader, setHideHeader] = useState(false);

  const isReadingPage = READING_ROUTE_REGEX.test(location.pathname);

  useEffect(() => {
    setHideHeader(isReadingPage);
  }, [isReadingPage]);

  return (
    <>
      {!hideHeader && <HeaderNav />}
      <main className="mainLayout">{children}</main>
      <FooterNav />
    </>
  );
}
