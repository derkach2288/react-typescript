import { useState, ChangeEvent, SetStateAction, Dispatch } from "react";
import { useFormik } from "formik";
import * as Yup from "yup";

import Button from "components/Button";
import Input from "components/Input";
import TextArea from "components/TextArea";

import {
  Homework25Wrapper,
  InputProductForm,
  ProductCard,
  ProductContainer,
  ParagraphStylesTitle,
  ParagraphStylesBody,
  Text,
} from "./styles";

function Homework25() {
  const [showCard, setShowCard] = useState<boolean>(false);
  const [productInfo, setProductInfo] = useState<ProductInfo>({
    nameProduct: "",
    priceProduct: "",
    descriptionProduct: "",
})

interface ProductInfo {
  nameProduct: string;
  priceProduct: string;
  descriptionProduct: string;

}

  const shema = Yup.object().shape({
    nameProduct: Yup.string()
      .required("Поле Название товара обязательное")
      .min(2, "минимум 2 символа")
      .max(50, "максимум 50 символов"),
    priceProduct: Yup.string()
      .required("Поле Цена обязательное")
      .matches(/^\d+$/, "Можно вводить только цифры")
      .max(15, "максимум 15 символов"),
    descriptionProduct: Yup.string().max(150, "максимум 150 символов"),
  });

  const handlerCreateCard = () => {
    setProductInfo({
      nameProduct: formik.values.nameProduct,
      priceProduct: formik.values.priceProduct,
      descriptionProduct: formik.values.descriptionProduct
    
    })
  }

  const formik = useFormik({
    initialValues: {
      nameProduct: "",
      priceProduct: "",
      descriptionProduct: "",
    },
    validationSchema: shema,
    validateOnChange: true,
    validateOnBlur: true,
    onSubmit: (values, actions) => {
      console.log(values);
      setShowCard(true);
      handlerCreateCard();
    },
  });

  return (
    <Homework25Wrapper>
      <InputProductForm onSubmit={formik.handleSubmit}>
        <Text>Product creation</Text>
        <Input
          error={formik.errors.nameProduct}
          name="nameProduct"
          value={formik.values.nameProduct}
          onChange={formik.handleChange}
          labelName="Название товара"
          placeholder="Введите название товара"
        />
        <Input
          error={formik.errors.priceProduct}
          name="priceProduct"
          value={formik.values.priceProduct}
          onChange={formik.handleChange}
          labelName="Цена товара"
          placeholder="Введите цену товара"
        />
        <TextArea
          error={formik.errors.descriptionProduct}
          name="descriptionProduct"
          value={formik.values.descriptionProduct}
          onChange={formik.handleChange}
          labelName="Описание товара"
          placeholder="Введите описание товара"
        ></TextArea>

        <Button
          disabled={!formik.isValid || !formik.values.nameProduct}
          name="Создать товар"
          type="submit"
        />
      </InputProductForm>

      {showCard && <ProductCard>
        <ProductContainer>
          <ParagraphStylesTitle>Название товара</ParagraphStylesTitle>
          <ParagraphStylesBody>{productInfo.nameProduct}</ParagraphStylesBody>
        </ProductContainer>
        <ProductContainer>
          <ParagraphStylesTitle>Цена товара</ParagraphStylesTitle>
          <ParagraphStylesBody>
            {productInfo.priceProduct}
          </ParagraphStylesBody>
        </ProductContainer>
        <ProductContainer>
          <ParagraphStylesTitle>Описание товара</ParagraphStylesTitle>
          <ParagraphStylesBody>
            {productInfo.descriptionProduct}
          </ParagraphStylesBody>
        </ProductContainer>

      </ProductCard>}
    </Homework25Wrapper>
  );
}

export default Homework25;
