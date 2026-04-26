import React from "react";
import ReactDOM from "react-dom/client";
import { Toaster } from "sonner";
import { Navbar } from "@/components/site/navbar";
import { Hero } from "@/components/site/hero";
import { About } from "@/components/site/about";
import { Skills } from "@/components/site/skills";
import { Projects } from "@/components/site/projects";
import { Experience } from "@/components/site/experience";
import { Reviews } from "@/components/site/reviews";
import { Contact } from "@/components/site/contact";
import { Footer } from "@/components/site/footer";
import { BackgroundOrbs } from "@/components/site/orbs";
import { ScrollProgress } from "@/components/site/scroll-progress";
import { CustomCursor } from "@/components/site/cursor";
import { SectionDivider } from "@/components/site/section-divider";
import "./styles.css";

function App() {
  return (
    <div className="noise-overlay relative min-h-screen overflow-x-hidden bg-[color:var(--background)] text-white">
      <CustomCursor />
      <ScrollProgress />
      <BackgroundOrbs />
      <Navbar />
      <main>
        <Hero />
        <SectionDivider />
        <About />
        <SectionDivider />
        <Skills />
        <SectionDivider />
        <Projects />
        <SectionDivider />
        <Experience />
        <SectionDivider />
        <Reviews />
        <SectionDivider />
        <Contact />
      </main>
      <Footer />
      <Toaster
        theme="dark"
        position="bottom-right"
        toastOptions={{
          style: {
            background: "rgba(15, 28, 46, 0.9)",
            border: "1px solid rgba(0, 212, 255, 0.3)",
            color: "white",
            backdropFilter: "blur(12px)",
          },
        }}
      />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
