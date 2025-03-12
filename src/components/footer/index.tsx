import { FooterLogo } from "./footer-logo";
import { NewsletterSubscription } from "./newsletter";
import { QuickLinks } from "./quick-links";
import { SocialMedia } from "./social-media";

export const Footer = () => {
  return (
    <footer
      className="flex flex-col items-center pt-6 w-full bg-primary"
      role="contentinfo"
    >
      <div className="flex justify-between px-4 py-0 mb-6 w-full max-w-screen-xl max-md:flex-wrap max-md:gap-10 max-sm:flex-col max-sm:gap-8 max-sm:items-center max-sm:text-center">
        <FooterLogo />
        <QuickLinks />
        <SocialMedia />
        <NewsletterSubscription />
      </div>
      <div className="px-0 py-3 w-full text-sm italic text-center text-accent border-t border-solid border-t-contrast">
        © 2025 SurfShop. All rights reserved.
      </div>
    </footer>
  );
};
