import Header from "./components/Header";
import Hero from "./components/Hero";
import TemplateSection from "./components/TemplateSection";

function App() {
  return (
    <div className="min-h-screen bg-[#fafafa]">
      <Header />
      <main className="max-w-[1200px] mx-auto px-8 pt-12 pb-16">
        <Hero />
        <TemplateSection />
      </main>
    </div>
  );
}

export default App;
