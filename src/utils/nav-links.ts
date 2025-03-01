interface DropdownItem {
    title: string;
    href: string;
    description: string;
  }
  
 export const videoDropdown: DropdownItem[] = [
    {
      title: "Most Popular Videos",
      href: "/video1",
      description:
        "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
      title: "Learning Resources",
      href: "/video2",
      description: "For sighted users to preview content available behind a link."
    },
    {
      title: "My Favorites",
      href: "/video3",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    }
  ];
  
  export const storeDropdown: DropdownItem[] = [
    {
      title: "Men's apparel",
      href: "/men",
      description:
        "A modal dialog that interrupts the user with important content and expects a response."
    },
    {
      title: "Women's apparel",
      href: "/women",
      description: "For sighted users to preview content available behind a link."
    },
    {
      title: "Accessories",
      href: "/accessories",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
    },
    {
      title: "Surf Boards",
      href: "/boards",
      description:
        "Displays an indicator showing the completion progress of a task, typically displayed as a progress bar."
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
      title: "About Us",
      href: "/about"
    },
    {
      title: "Contact Us",
      href: "/contact"
    }
  ];