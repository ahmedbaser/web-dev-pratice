import { useContext } from "react";
import { AssetContext } from "../GrandPa/GrandPa";

const Sister = () => {
    const gift = useContext(AssetContext)
    return (
        <div>
         <h2>Sister</h2>
         <section className="flex">
          <p>Also has: {gift}</p>
          </section>
         
        </div>
    )
}

export default Sister;
