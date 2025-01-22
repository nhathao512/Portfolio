import { ProfileAvatar } from './ProfileAvatar';
import { ContactInfo } from './ContactInfo';
import { SocialLinks } from './SocialLinks';

export const Sidebar = ({ profile }) => (
  <div className="md:col-span-1 bg-gray-800 rounded-xl p-6">
    <ProfileAvatar 
      name={profile.name} 
      title={profile.title} 
      imageUrl={profile.imageUrl} // Truyền prop imageUrl vào đây
    />
    <ContactInfo contact={profile.contact} />
    <SocialLinks />
  </div>
);
