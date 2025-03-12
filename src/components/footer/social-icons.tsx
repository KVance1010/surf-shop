import Image from "next/image";

export const SocialIcons = () => {
  const socialLinks = [
    {
      name: "Instagram",
      src: "/icons/instagram.svg",
      url: "https://www.instagram.com",
      alt: "Instagram",
      width: 20,
      height: 20,
    },
    {
      name: "Facebook",
      src: "/icons/facebook.svg",
      url: "https://www.facebook.com",
      alt: "Facebook",
      width: 20,
      height: 20,
    },
    {
      name: "Twitter",
      src: "/icons/twitter.svg",
      url: "https://www.twitter.com",
      alt: "Twitter",
      width: 20,
      height: 20,
    },
    {
      name: "YouTube",
      src: "/icons/youtube.svg",
      url: "https://www.youtube.com",
      alt: "YouTube",
      width: 20,
      height: 20,
    },
  ];

  return (
    <>
      {socialLinks.map((social) => (
        <a
          key={social.name}
          href={social.url}
          className="flex justify-center items-center p-2 hover:bg-contrast rounded-full transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-accent"
          aria-label={`Visit our ${social.name} page`}
        >
          <Image src={social.src} alt={social.name} width={social.width} height={social.height} unoptimized/>
        </a>
      ))}
    </>
  );
};
