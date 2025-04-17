import Hero from "../components/hero";
import TeamStanding from "../components/TeamStanding";
export default function HomePage() {
  return (
    <div className="min-h-screen bg-[url('https://images.augustman.com/wp-content/uploads/sites/5/2023/04/20190504/untitled-design-2023-04-16t071319-214.jpeg')] bg-cover bg-center bg-fixed">
      <div className="min-h-[100vh] bg-black/40">
        <div className="space-y-12 pb-12">
          <div className="bg-opacity-90">
            <Hero />
          </div>

          <div className="bg-opacity-90">
            <TeamStanding />
          </div>
        </div>
      </div>
    </div>
  );
}
