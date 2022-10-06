import * as React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import bag from "../img/bag.svg"
import close from "../img/close.svg"
import cartemp from "../img/empcart.png"
import { faUser } from "@fortawesome/free-solid-svg-icons";

type Anchor = "right";

function CartPages() {
  const [state, setState] = React.useState({
    right: false,
  });
  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent
  ) => {
    if (
      event.type === "keydown" &&
      ((event as React.KeyboardEvent).key === "Tab" ||
        (event as React.KeyboardEvent).key === "Shift")
    ) {
      return;
    }
    setState({ ...state, [anchor]: open });
  };
  
  const list = (anchor: Anchor) => (
    <Box
      sx={{ width:450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-wrap">
        <div className="cart-head">
        <h2 className="cart-tittle">Shopping cart</h2>
        <img src={close} alt="cart" className="cart-btn" onClick={toggleDrawer("right", false)}/>
        </div>
        <div className="card-mid-wrap">
        <img src={cartemp} alt="cart" className="empcart" onClick={toggleDrawer("right", false)}/>
        <h2 className="cart-emp-tittle" >Your cart is empty !</h2>
        </div>
        
        <div className="checkout-btn" onClick={onclick}>
          <h3 className="checkout-btn-tittle">Proceed To Checkout</h3>
          <h3 className="checkout-total">| {"$0.0"}</h3>
        </div> 
      </div>
    </Box>
  );
  const onclick = () => console.log('hi');

  return(
    <div>
      <React.Fragment key={"right"}>
      <img src={bag} alt="cart" className="cart-btn" onClick={toggleDrawer("right", true)}/>
        <Drawer
          anchor={"right"}
          open={state["right"]}
          onClose={toggleDrawer("right", false)}
        >
          {list("right")}
        </Drawer>
      </React.Fragment>
    </div>
  );
}

export default CartPages;
