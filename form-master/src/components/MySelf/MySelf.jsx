import Special from "../Sepcial/Sepcial";

const MySelf = ({asset}) => {
    return (
        <div>
         <h2>MySelf</h2>
         <section className="flex">
            <Special asset={asset}></Special>
         </section>
        </div>
    )
}

export default MySelf;