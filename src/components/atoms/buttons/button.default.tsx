import type { TButton } from "../../../types";

export default function ButtonDefault({text, onClick, className}: TButton) {
   return(
    <>
    <button onClick={onClick} className={className}>{text}</button>
    </>
   ); 
}