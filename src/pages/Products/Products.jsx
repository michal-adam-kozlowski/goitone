import React from "react"
import { Link } from "react-router-dom"

const productList = [{ name: "buty", id: 5 }, { name: "skarpetki", id: 3 }, { name: "spodnie", id: 123 }]

export const Products = () => (<div>
    <h1>Products</h1>
    <p>This is products page</p>
    <div>
        {productList.map(({name, id}) => <Link to={`/products/${id}`}>{name}</Link>)}
    </div>
</div>)