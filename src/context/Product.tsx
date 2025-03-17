import { createContext, ReactNode, useEffect, useState } from "react";
import { Product } from "../types/Product";

interface ProductContextType {
  isOpenModal: boolean;
  product: Product | null;
  openModal: (data: Product) => void;
  closeModal: () => void;
}

const defaultValue: ProductContextType = {
  isOpenModal: false,
  product: null,
  openModal: () => {},
  closeModal: () => {},
};

export const ProductContext = createContext<ProductContextType>(defaultValue);

export const ProductProvider = ({ children }: { children: ReactNode }) => {
  const [isOpenModal, setIsOpenModal] = useState(false);
  const [product, setProduct] = useState<Product | null>(null);

  function openModal(data : Product) {
    setIsOpenModal(true)
    setProduct(data)
  }

  function closeModal() {
    setIsOpenModal(false)
    setProduct(null);
  }

  useEffect(() => {
    if(isOpenModal) {
        document.body.style.overflow = 'hidden';
    }else {
        document.body.style.overflow = "auto";
    }
}, [isOpenModal])

  return (
    <ProductContext.Provider value={{ isOpenModal, product, openModal, closeModal }}>
      {children}
    </ProductContext.Provider>
  );
};
