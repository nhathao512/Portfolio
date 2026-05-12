import { About } from "../../pages/About";
import { Technologies } from "../common/Technologies";
import { Services } from "../features/Services";

export const MainContent = ({ profile }) => (
  <div className="space-y-5 lg:space-y-8">
    <About about={profile.about} />
    <Services services={profile.services} />
    <Technologies />
  </div>
);
