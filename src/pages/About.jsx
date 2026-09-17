import AboutHero from "../components/About/AboutHero";
import AboutValues from "../components/About/AboutValues";

export default function About() {
  return (
    <div className="bg-[#0A0A0A] min-h-screen divide-y divide-white/5">
      <AboutHero />
      <AboutValues />
    </div>
  );
}
