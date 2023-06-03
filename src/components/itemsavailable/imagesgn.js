import React, { useContext } from "react";
import CartContext from "../context/context"
import { Link } from "react-router-dom";
import classes from "./images.module.css";
import { Button, Card } from "react-bootstrap";

const Items = (props) => {
  const cartcxt = useContext(CartContext);

  return (
    <div>
      <div>
        {" "}
        <h1 className={classes.h1}>Shopping Bazar</h1>
       
      </div>

      <div className={classes.item} key={props.Item[0].title}>
        <Card style={{ width: "18rem", height: "22.1rem" }}class="card bg-secondary">
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[0].title}
          </Card.Title>
      

          <Link to="store2">
            {" "}
            <Card.Img src={props.Item[0].imageUrl}style={{height:'18rem'}} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[0].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[0],
                    amount: 1,
                    id: Math.random().toString(36),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ****************** ********************/}
      <div className={classes.item} key={props.Item[1].title}>
        <Card style={{ width: "18rem", height: "22.1rem" }}class="card bg-secondary">
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[1].title}
          </Card.Title>

          <Link to="store1">
            {" "}
            <Card.Img src={props.Item[1].imageUrl} alt="colorimg" style={{height:'18rem'}}/>
          </Link>

          <Card.Body>
            {props.Item[1].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[1],
                    amount: 12,
                    id: Math.random().toString(),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ***************************** */}
      <div className={classes.item} key={props.Item[2].title}>
        <Card style={{ width: "18rem", height: "22.1rem" }}class="card bg-secondary">
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[2].title}
          </Card.Title>

          <Link to="/Store3">
            {" "}
            <Card.Img src={props.Item[2].imageUrl} style={{height:'18rem'}} alt="colorimg" />
          </Link>

          <Card.Body>
            {props.Item[2].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[2],
                    amount: 1,
                    id: Math.random().toString(36),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ***************************** */}
      <div className={classes.item} key={props.Item[3].title}>
        <Card style={{ width: "18rem", height: "22.1rem" }}class="card bg-secondary">
          <Card.Title
            style={{ color: "black", textAlign: "center", margin: "20px" }}
          >
            {props.Item[3].title}
          </Card.Title>

          <Link to="/store4">
            {" "}
            <Card.Img src={props.Item[3].imageUrl} alt="colorimg" style={{height:'18rem'}}/>
          </Link>

          <Card.Body>
            {props.Item[3].price}₹
            <span>
              <Button
                variant="info"
                style={{ color: "white", textDecorationStyle: "bold" }}
                as="input"
                type="submit"
                value="ADD TO CART"
                size="sm"
                onClick={() =>
                  cartcxt.addItem({
                    ...props.Item[3],
                    amount: 1,
                    id: Math.random().toString(),
                  })
                }
              />
            </span>
          </Card.Body>
        </Card>
      </div>
      {/* ********************** */}
      <div
        style={{
          color: "skyblue",
          textAlign: "center",
          marginTop: "20px",
          marginBottom: "20px",
        }}
      >
        <Button
          variant="secondary"
          style={{ color: "skyblue", textAlign: "center" }}
        >
          See the cart
        </Button>
      </div>
    </div>
  );
};
export default Items;