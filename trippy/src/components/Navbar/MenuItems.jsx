import { HiHome } from "react-icons/hi";
import { FaInfoCircle } from "react-icons/fa";
import { RiSuitcaseFill } from "react-icons/ri";
import { MdPermContactCalendar } from "react-icons/md";

export const MenuItems = [
  {
    title: "Home",
    url: "/",
    cName: "nav-links",
    icon: <HiHome />,
  },
  {
    title: "About",
    url: "/about",
    cName: "nav-links",
    icon: <FaInfoCircle />,
  },
  {
    title: "Service",
    url: "/service",
    cName: "nav-links",
    icon: <RiSuitcaseFill />,
  },
  {
    title: "Contact",
    url: "/contact",
    cName: "nav-links",
    icon: <MdPermContactCalendar />,
  },
  {
    title: "Sign Up",
    url: "/signup",
    cName: "nav-links-mobile",
  },
];
