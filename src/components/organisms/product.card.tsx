import type { TCard } from "../../types";
import ButtonDefault from "../atoms/buttons/button.default";

export default function ProductCard({ title, description }: TCard) {
  return (
    <>
      <div className="card bg-base-100 w-96 shadow-sm">
        <figure>
          <img
            src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
            alt="Shoes"
          />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{title}</h2>
          <p>{description}</p>
          <div className="card-actions justify-end">
            <ButtonDefault text="Buy Now" className="btn btn-primary" />
          </div>
        </div>
      </div>
    </>
  );
}
