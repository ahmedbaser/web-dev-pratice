import { useContext } from "react";
import Friend from "../Friend/Friend";
import Special from "../Sepcial/Sepcial";
import { MoneyContext } from "../GrandPa/GrandPa";

const Cousin = ({name, asset}) => {
    const [money] = useContext(MoneyContext)
    return (
        <div>
         <h2>Cousin</h2>
         <p>{name}</p>
         <p>Money: {money}</p>
         <section>
         {asset && <Special asset={asset}></Special>}
         {name==='Rubaiya' && <Friend></Friend>}
         </section>
        </div>
    )
}

export default Cousin;
