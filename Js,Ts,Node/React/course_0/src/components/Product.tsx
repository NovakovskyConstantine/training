import { useState } from "react";
import { IProduct } from "../models";

interface productProps {
    product: IProduct
}

export function Product({ product }: productProps) {
    const [description, setDescription] = useState(false);

    const buttonBgClass = description ? "bg-blue-400" : "bg-yellow-400";

    const buttonClasses = ["py-2 px-4 border", buttonBgClass];

    return (
        <div 
            className="border py-2 px-4 rounded flex flex-col items-center mb-2"
        >
            <img src={ product.image } className="w-1/6" alt={ product.title } />
            <p>{ product.title }</p>
            <p className="font-bold">{ product.price }</p>
            <button
                className={ buttonClasses.join(" ") }
                onClick={ () => setDescription(!description) }
            >
                { description ? "Скрыть описание" : "Показать описание" }
            </button>

            {
                description && <div>
                    <p>{ product.description }</p>
                    <p>Rate: <span style={{ fontWeight: "bold" }}>{ product?.rating?.rate }</span></p>
                </div>
            }
        </div>
    )
}