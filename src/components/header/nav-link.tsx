import Link from "next/link";
import { NavigationMenuLink } from "@/components/ui/navigation-menu";
import { cn } from "@/utils/tailwind-clsx";

interface NavLinkProps {
  classes?: string;
  title: string;
  children: React.ReactNode;
  href: string;
}

export const NavLink: React.FC<NavLinkProps> = ({
  classes,
  title,
  href,
  children,
  ...props
}) => {
  return (
    <li>
      <NavigationMenuLink asChild>
        <Link
          href={href}
          legacyBehavior
          passHref
          className={cn(
            "block select-none space-y-1 rounded-md p-3 leading-none no-underline outline-none transition-colors hover:bg-accent hover:text-accent-foreground focus:bg-accent focus:text-accent-foreground",
            classes
          )}
          {...props}
        >
          <div>
            <div className="text-[22px] font-medium leading-none underline">{title}</div>
            <p className="line-clamp-2 text-base leading-snug text-muted-foreground">
              {children}
            </p>
          </div>
        </Link>
      </NavigationMenuLink>
    </li>
  );
};
