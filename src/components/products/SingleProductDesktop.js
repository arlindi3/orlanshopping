import FavoriteBorderOutlined from "@mui/icons-material/FavoriteBorderOutlined";
import ShareOutlinedIcon from "@mui/icons-material/ShareOutlined";
import FitScreenOutlinedIcon from "@mui/icons-material/FitScreenOutlined";
import { Stack } from "@mui/material";
import {
  ProductActionsWrapper,
  Product,
  ProductActionButton,
  ProductAddToCart,
  ProductFavButton,
  ProductImage,
  Productmetawrapper,
} from "../../styles/product";
import ProductMeta from "./ProductMeta";
import { useState } from "react";

export default function SingleProductDesktop({ product, matches }) {
  const [showOptions, setShowOptions] = useState(false);

  const handleMouseEnter = () => {
    setShowOptions(true);
  };
  const handleMouseLeave = () => {
    setShowOptions(false);
  };

  const handleAddToCartClick = () => {
    const whatsappNumber = "355674152486";
    // Send product name and image URL as a message
    const whatsappMessage = `Jam i interesuar per produktin ${product.name}. ${product.image}`;

    // WhatsApp does not embed images directly from URLs in chat messages.
    // The recipient will see the image URL as a clickable link.
    // To view the image, the recipient must click the link.

    const url = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(
      whatsappMessage
    )}`;
    window.open(url, "_blank");
  };

  return (
    <>
      <Product onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave}>
        <ProductImage src={product.image}></ProductImage>
        <ProductFavButton isfav={1}>
          <FavoriteBorderOutlined></FavoriteBorderOutlined>
        </ProductFavButton>
        {showOptions && (
          <ProductAddToCart
            variant="contained"
            show={showOptions}
            onClick={handleAddToCartClick}
          >
            Shiko Gjëndjen
          </ProductAddToCart>
        )}
        <ProductActionsWrapper show={showOptions}>
          <Stack direction="column">
            {/* <ProductActionButton>
              <ShareOutlinedIcon></ShareOutlinedIcon>
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenOutlinedIcon></FitScreenOutlinedIcon>
            </ProductActionButton> */}
          </Stack>
        </ProductActionsWrapper>
      </Product>
      <ProductMeta product={product} matches={matches}></ProductMeta>
    </>
  );
}
