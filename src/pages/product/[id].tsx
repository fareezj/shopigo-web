import React, { useState } from "react";
import { fetchProduct } from "../../services/ProductService";
import { ProductDetails } from "../../types/ProductDetails";
import style from "../../../styles/ProductDetails.module.scss";
import { IoCaretBackCircle } from "react-icons/io5";
import { useRouter } from "next/router";
import Image from "next/image";
import { GetServerSideProps } from "next";
import { AddCartReq } from "../../types/AddCartReq";
import { addCart } from "../../services/CartService";

export interface CartItem {
  id: string;
  quantity: number;
}

const ProductDetail = ({ productData }: { productData: ProductDetails }) => {
  const data = productData;
  const router = useRouter();
  const [cartQuantity, setCartQuantity] = useState("");

  const addToCart = async () => {
    const reqBody: AddCartReq = {
      productId: data.id,
      quantity: cartQuantity,
      userId: "fareez-1",
    };
    const response = await addCart(reqBody);
    if (response?.status == 201) alert("Product Added to Cart");
  };

  return (
    <div>
      <IoCaretBackCircle
        size={50}
        className={"m-3"}
        onClick={() => router.back()}
      />
      <div className={`mx-auto card ${style.cardBase} px-5 py-3`}>
        <Image
          src={data.productImage}
          className={`${style.image} mx-auto`}
          alt=""
          layout="responsive"
          width={"100%"}
          height={"100%"}
          priority
        />
        <h1 className="card-title name my-3">{data.productName}</h1>
        <p>{data.productDescription}</p>
        <h5>{data.productQuantity} Items Left</h5>
        <h5>Stars: {data.productRating} / 5.0</h5>
        <div className="row mt-3">
          <span>Quantity: </span>
          <input
            className={`col-3 ${style.quantityInput}`}
            value={cartQuantity}
            onChange={(e) => setCartQuantity(e.target.value)}
          />
          <div className="col-4 btn btn-primary" onClick={() => addToCart()}>
            Add to cart
          </div>
          <h3 className="col text-end">RM {data.productPrice}</h3>
        </div>
      </div>
    </div>
  );
};

export const getServerSideProps: GetServerSideProps = async (context) => {
  const { query } = context;
  const { id } = query;
  const productData = await fetchProduct(id as string);
  return { props: { productData } };
};

export default ProductDetail;
