export const NAV_ITEMS = [
  {
    id: "n1",
    title: "Home",
    href: "./",
  },
  {
    id: "n2",
    title: "About Us",
    href: "./aboutPage",
  },
  {
    id: "n3",
    title: "Contact Us",
    href: "./contactPage",
  },
  {
    id: "n4",
    title: "Porfolio",
    href: "./portfolioPage",
  },
  {
    id: "n5",
    title: "Pricing",
    href: "./pricingPage",
  },
];

export function getAllMenuItems() {
  return NAV_ITEMS;
}

export function getNavItemById(id) {
  return NAV_ITEMS.find((nav) => nav.id === id);
}
