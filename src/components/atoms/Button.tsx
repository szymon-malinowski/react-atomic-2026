import type { MouseEventHandler } from "react";

export type TButton = {
    text: string;
    onClick: MouseEventHandler<HTMLButtonElement>;

}
export default function Button({text, onClick}: TButton) {
   return(
    <>
    <button onClick={onClick}>{text}</button>
    </>
   ); 
}