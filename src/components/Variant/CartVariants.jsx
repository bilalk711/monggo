import React from "react"
import CartVariant from "./CartVariant"
import { Row, Col } from "antd"

const cartVariants = props => {
  if(props.variants){
      return (
        <Row>
           {props.variants.map((variant, index) => {
            return (
              <Col md={24} key={index}>
                <CartVariant
                  name={variant.name}
                  value={variant.value}
                  imageUrl={variant.imageUrl}
                />
              </Col>
            );
          })}
        </Row>
      );
  }
  else{
    return null
  }
};

export default cartVariants;
