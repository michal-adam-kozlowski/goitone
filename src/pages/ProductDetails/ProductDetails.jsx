import { useParams } from "react-router-dom"

const productData = [
    {id: "3", name: 'Super Buty', price: 2000, description: "Super opis super butow XD"}
]

export const ProductDetails = () => {
    const { productId } = useParams()

    const product = productData.find(({ id }) => id === productId)

    return <div>
       <h1>This is Product Details</h1>
       <p>Name is {product?.name}</p>
       <p>Price is {product?.price}</p>
       <p>Description is {product?.description}</p>
    </div>
}