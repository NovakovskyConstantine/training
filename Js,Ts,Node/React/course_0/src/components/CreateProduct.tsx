import axios from "axios";
import React, { useState } from "react";
import { IProduct } from "../models";
import { ErrorMessage } from "./ErrorMessage";

const productData: IProduct = {
    title: '',
    price: 13.5,
    description: 'lorem ipsum set',
    image: 'https://i.pravatar.cc',
    category: 'electronic',
    rating: {
        rate: 123,
        count: 5
    }
}

interface CreateProductProps {
    onCreate: (product: IProduct) => void;
}

export function CreateProduct({ onCreate }: CreateProductProps) {

    const [value, setValue] = useState("");
    const [error, setError] = useState("");

    const submitHandler = async (event: React.FormEvent) => {
        event.preventDefault();
        setError("")

        if (value.trim().length === 0) {
            setError("Пожалуйста введите заголовок товара");
            return;
        }

        productData.title = value;
        const responce = await axios.post<IProduct>("https://fakestoreapi.com/products", productData);

        onCreate(responce.data);
    }

    const changeHandler = (event: any) => { // ? Изучить подходящие типы
        setValue(event.target.value);
    }

    return (
        <form onSubmit={ submitHandler }>
            <input 
                type="text"
                className="border py-2 px-4 mb-2 w-full"
                placeholder="Введите название продукта"
                value={ value }
                onChange={changeHandler}
            />

            {error && <ErrorMessage error={error} />}

            <button
                type="submit"
                className="py-2 px-4 border bg-yellow-400"
            >
                Создать
            </button>
        </form>
    )
}