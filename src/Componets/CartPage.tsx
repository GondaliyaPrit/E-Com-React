import * as React from "react";
import Box from "@mui/material/Box";
import Drawer from "@mui/material/Drawer";
import bag from "../img/bag.png";
import Button from "@mui/material/Button";
type Anchor = "top" | "left" | "bottom" | "right";

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
      sx={{ width: anchor === "top" || anchor === "bottom" ? "auto" : 450 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}
    >
      <div className="cart-wrap">
        <div className="cart-head">
        <h2 className="cart-tittle">Shopping cart</h2>
        </div>
      </div>
    </Box>
  );

  return(
    <div>
      <React.Fragment key={"right"}>
      <img src={bag} alt="cart" className="cart-btn" onClick={toggleDrawer("right", true)}/>
        {/* <Button onClick={toggleDrawer("right", true)}>{""}</Button> */}
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
