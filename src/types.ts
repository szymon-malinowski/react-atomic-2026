import type { MouseEventHandler } from "react";

export type TButton = {
    text: string;
    onClick?: MouseEventHandler<HTMLButtonElement>;
    className?: string
}