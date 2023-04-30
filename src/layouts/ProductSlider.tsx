import Box from "@/components/ui/Box";
import { FC } from "react";
import "react-multi-carousel/lib/styles.css";
import Carousel from "react-multi-carousel";

interface ProductSliderProps {
  productData: Object[];
}

const ProductSlider: FC<ProductSliderProps> = ({ productData }) => {
  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 6,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1400 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1400, min: 750 },
      items: 3,
    },
    mobile: {
      breakpoint: { max: 750, min: 450 },
      items: 2,
    },
    mobile2: {
      breakpoint: { max: 450, min: 0 },
      items: 2,
    },
  };

  return (
    <div className="ProductSlider">
      {!productData ? null : (
        <Carousel responsive={responsive} className="related-slider-box slider">
          {productData?.map((data) => {
            return (
              <Box key={Math.floor(Math.random() * 10000000000)} data={data} width={"auto"} />
            );
          })}
        </Carousel>
      )}
    </div>
  );
};

export default ProductSlider;
