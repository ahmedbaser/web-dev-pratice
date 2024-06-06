import Brother from "../Brother/Brother";
import Sister from "../Sister/Sister";
import MySelf from "../MySelf/MySelf";



const Dad= ({asset}) => {
    return (
        <div>
         <h2>Dad</h2>
         <section className="flex">
            <MySelf asset={asset}></MySelf>
            <Brother></Brother>
             <Sister></Sister> 
         </section>
        </div>
    )
}

export default Dad;
