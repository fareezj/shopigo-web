import { useRouter } from "next/router";
import React from "react";
import styles from "../../styles/Landing.module.scss";
import AppLayout from "../components/layout/AppLayout";
import { ProductDetails } from "../types/ProductDetails";

interface LandingProps {
  inventoryList: any;
}

export const Landing = (props: LandingProps) => {
  const { inventoryList } = props;
  const router = useRouter();

  const navigateToProductDetail = (id: string) => {
    router.push({
      pathname: "/product/[id]",
      query: { id },
    });
  };

  return (
    <div className="row g-0">
      {inventoryList.map((item: ProductDetails, index: number) => {
        return (
          <div
            className="col-sm-12 col-md-6 col-lg-4 col-xxl-3 mt-5 d-flex card"
            key={index}
            onClick={() => navigateToProductDetail(item.id)}
          >
            <img className="card-img-top" alt="" src={item.productImage} />
            <div className="card-body">
              <h5 className={`${styles.inventoryName} card-title`}>
                {item.productName ?? ""}
              </h5>
              <p className="card-body p-0">{item.productQuantity} Left</p>
              <h5 className="text-end">RM {item.productPrice}</h5>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Landing;
