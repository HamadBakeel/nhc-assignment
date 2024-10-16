import { TProduct } from "../types/products/index.types"

const CardItem=({product}:{product:TProduct})=>{

    return(
        <>
        <p>
            {product.title}
        </p>
        <p>
            {product.description}
        </p>
        <p>
            {product.images[0]}
        </p>
        </>
    )
}


export default CardItem