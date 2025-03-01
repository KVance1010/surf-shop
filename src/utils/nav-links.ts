interface DropdownItem {
  title: string;
  href: string;
  description: string;
}

export const storeDropdown: DropdownItem[] = [
  {
    title: "Men's apparel",
    href: "/mens-apparel",
    description: "Explore our collection of men's apparel."
  },
  {
    title: "Women's apparel",
    href: "/womens-apparel",
    description: "Discover the latest trends in women's fashion."
  },
  {
    title: "Accessories",
    href: "/accessories",
    description: "Find the perfect accessories to complement your style."
  },
  {
    title: "Surf Boards",
    href: "/surf-boards",
    description: "Browse our selection of high-quality surf boards."
  }
];

export const videoDropdown: DropdownItem[] = [
  {
    title: "Most Popular Videos",
    href: "/video1",
    description: "Watch the most popular videos in our collection."
  },
  {
    title: "Learning Resources",
    href: "/video2",
    description: "Access a variety of learning resources and tutorials."
  },
  {
    title: "My Favorites",
    href: "/video3",
    description: "View and manage your favorite videos."
  }
];

export const navHeaders = [
  {
    title: "Store",
    href: "/"
  },
  {
    title: "Videos",
    href: "/"
  },
  {
    title: "Messages",
    href: "/messages"
  },
  {
    title: "Map",
    href: "/map"
  }
];
