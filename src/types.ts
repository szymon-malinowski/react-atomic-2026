import type { MouseEventHandler } from "react";

export type TButton = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string;
};

export type TCard = {
    title: string;
    description: string;
    text: string;
};