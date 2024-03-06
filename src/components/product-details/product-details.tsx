import { TProduct } from "../../types"

type TProductDetailsProps = {
    product: TProduct
}

export const ProductDetails = ({ product }: TProductDetailsProps) => {
    return (
        <p>{product.fullInfo}</p>
    )
}

export default ProductDetails;