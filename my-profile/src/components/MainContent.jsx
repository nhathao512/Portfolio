import { About } from "./About";
import { Services } from "./Services";

export const MainContent = ({ profile }) => (
  <div className="md:col-span-3">
    <About about={profile.about} />
    <Services services={profile.services} />
  </div>
);
