import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Header, Footer, HomePage, BlogPage, PostDetailPage, AboutPage, NotFoundPage } from "../components/SiteComponents";

export default function AppRoutes() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const frame = requestAnimationFrame(() => {
        const target = document.getElementById(hash.slice(1));
        if (target) target.scrollIntoView({ behavior: "smooth", block: "start" });
        else window.scrollTo(0, 0);
      });
      return () => cancelAnimationFrame(frame);
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/blog" element={<BlogPage />} />
        <Route path="/blog/:slug" element={<PostDetailPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
      <Footer />
    </>
  );
}
