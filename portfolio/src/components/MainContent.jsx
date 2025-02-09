import { About } from "../pages/About";
import { Services } from "./Services";
import { Technologies } from "./Technologies";

export const MainContent = ({ profile }) => (
  <div className="md:col-span-3">
    <About about={profile.about} />
    <Services services={profile.services} />
    <Technologies/>
  </div>
);
