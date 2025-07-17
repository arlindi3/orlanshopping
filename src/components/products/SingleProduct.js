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

export default function SingleProduct({ product, matches }) {
  // WhatsApp's "Click to Chat" API does not support sending images directly via URL parameters.
  // Only text messages can be pre-filled. To share an image, users must manually upload it in WhatsApp.
  // You can include the image URL in the message text for reference.

  const whatsappMessage = `Jam i interesuar per produktin ${product.name}. ${product.image}`;

  return (
    <>
      <Product>
        <ProductImage src={product.image}></ProductImage>

        <ProductMeta product={product} matches={matches}></ProductMeta>

        <ProductActionsWrapper>
          <Stack direction="row">
            {/* <ProductFavButton isfav={1}>
              <FavoriteBorderOutlined></FavoriteBorderOutlined>
            </ProductFavButton> */}
            {/* <ProductActionButton>
              <ShareOutlinedIcon></ShareOutlinedIcon>
            </ProductActionButton>
            <ProductActionButton>
              <FitScreenOutlinedIcon></FitScreenOutlinedIcon>
            </ProductActionButton> */}
          </Stack>
        </ProductActionsWrapper>
        <a
          href={`https://wa.me/355674152486?text=${encodeURIComponent(
            whatsappMessage
          )}`}
          target="_blank"
          rel="noopener noreferrer"
          style={{ textDecoration: "none" }}
        >
          <ProductAddToCart>Shiko Gjëndjen</ProductAddToCart>
        </a>
      </Product>
    </>
  );
}
