import { CircleUserIcon, HomeIcon } from "lucide-react";
import { ILink } from "@/shared/types";

export const links: ILink[] = [
    {
        name: "Домашняя",
        url: "/",
        icon: <HomeIcon />,
    },
    {
        name: "Профиль",
        url: "/profile",
        icon: <CircleUserIcon />,
    },
]