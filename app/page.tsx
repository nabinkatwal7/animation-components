import Explore from "@/components/landing/Explore";
import Landing from "@/components/landing/Landing";

export default function Home() {
  return (
    <div className="bg-black text-white">
      <Landing />
      <Explore />
    </div>
  );
}
