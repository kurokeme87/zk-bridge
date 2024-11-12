import { FaRegFileCode } from "react-icons/fa6";
import { HiOutlineDocumentText } from "react-icons/hi";
import { GrOracle } from "react-icons/gr";

export const navbar = [
  {
    label: "Token",
    link: "/token",
    new: true,
  },
  {
    label: "NFT",
    link: "/zknft",
    new: false,
  },
  {
    label: "Msg",
    link: "/zkMessenger",
    new: false,
  },
];

export const developers = [
  {
    label: "zkBrodge Docs",
    link: "https://docs.zkbridge.com/",
    icon: FaRegFileCode,
  },
  {
    label: "zkBridge Paper",
    link: "https://dl.acm.org/doi/10.1145/3548606.3560652",
    icon: HiOutlineDocumentText,
  },
  {
    label: "LayerZero Oracle",
    link: "/zklightclient",
    icon: GrOracle,
  },
];

export const ecosystem = [
  {
    label: "Project",
    link: "https://dl.acm.org/doi/10.1145/3548606.3560652",
    icon: "",
  },
  {
    label: "Campaign",
    link: "/zklightclient",
    icon: "",
  },
];
