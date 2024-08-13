// import { useState,useEffect } from "react";
import menuData from "./menus.json";
import { useParams, useNavigate } from "react-router-dom";
import ShoppingCartIcon from "@mui/icons-material/ShoppingCart";
import { useDispatch, useSelector } from "react-redux";
import { addToCart, removeFromCart } from "./cartActions";

const vegLogoUrl =
  "https://img.icons8.com/?size=100&id=61083&format=png&color=000000";
const nonVegLogoUrl =
  "https://img.icons8.com/?size=100&id=61082&format=png&color=000000";

const OutletPage = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { outletName } = useParams();

  const readingCart = useSelector((state) => state.cartReducer.redCart);
  console.log(readingCart);
  // handles**********
  const handleAddToCart = (item) => {
    dispatch(addToCart(outletName, item));
  };

  const handleRemoveFromCart = (item) => {
    dispatch(removeFromCart(outletName, item));
  };

  // totals**********
  const getTotalItems = () => {
    return readingCart.reduce((total, item) => total + item.quantity, 0);
  };

  const getTotalAmount = () => {
    return readingCart.reduce(
      (total, item) => total + item.price * item.quantity,
      0
    );
  };

  // navigation**********
  const openCart = () => {
    navigate(`/cart/outlet/${outletName}`);
  };

  const backHome = () => {
    navigate("/");
  };
  return (
    <div>
      <nav className="p-4 bg-slate-100">
        <div className="absolute right-5 h-16 w-16">
          <ShoppingCartIcon
            fontSize="large"
            onClick={openCart}
            className="hover:cursor-pointer"
          />
          {getTotalItems()}
        </div>
        <div className="absolute right-20 top-5 px-5">
          Total Amount: ₹{getTotalAmount()}
        </div>
        <div onClick={backHome} className="w-40">
          <h3 className="text-2xl font-bold hover:cursor-pointer">Menu</h3>
        </div>
      </nav>
      <div className="flex flex-row flex-wrap justify-items-center container mx-auto px-10">
        {menuData[outletName].map((item) => {
          const logoUrl = item.category === "Veg" ? vegLogoUrl : nonVegLogoUrl;

          const cartItemId = `${outletName}-${item.id}`;
          const cartItem = readingCart.find((it) => it.id === cartItemId);

          return (
            <div
              key={item.id}
              className="shadow-md hover:shadow-lg p-8 m-4 rounded-xl"
            >
              <img
                src={item.image}
                alt={item.name}
                style={{ width: "200px" }}
              />
              <div className="flex flex-wrap justify-center text-lg">
                {item.name}
                <img
                  src={logoUrl}
                  alt={item.category}
                  style={{ width: "24px", height: "24px", margin: "2px" }}
                />
              </div>
              <div className="text-center text-md">₹{item.price}</div>
              <div className="flex items-center justify-center">
                <button
                  onClick={() => handleRemoveFromCart(item)}
                  className="px-6 py-2 m-2 hover:shadow-md rounded-md bg-slate-100"
                >
                  -
                </button>
                <span>QTY: {cartItem ? cartItem.quantity : 0}</span>
                <button
                  onClick={() => handleAddToCart(item)}
                  className="px-6 py-2 m-2 hover:shadow-md rounded-md bg-slate-100"
                >
                  +
                </button>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default OutletPage;

// const addToCart = (item) => {
//   cartWrap.setCart(prevCart => {
//     const updatedCart = { ...prevCart };
//     if (updatedCart[item.id]) {
//       updatedCart[item.id].quantity += 1;
//     } else {
//       updatedCart[item.id] = {
//         ...item,
//         quantity: 1,
//       };
//     }
//     return updatedCart;
//   });
// };

// const removeFromCart = (item) => {
//   cartWrap.setCart((prevCart) => {
//     const updatedCart = { ...prevCart };
//     if (updatedCart[item.id] && updatedCart[item.id].quantity > 1) {
//       updatedCart[item.id].quantity -= 1;
//     } else {
//       delete updatedCart[item.id];
//     }
//     return updatedCart;
//   });
// };

// const location = useLocation();

// useEffect(() => {
//   if (location.state?.cartWrap.readingCart) {
//     cartWrap.setCart(location.state.cartWrap.readingCart);
//   }
// }, [location.state]);

// const addToCart = (item) => {
//   const cartItem = { ...item, id: `${outletName}-${item.id}` };
//   cartWrap.setCart((prevCart) => {
//     const existingItemIndex = prevCart.findIndex(
//       (it) => it.id === cartItem.id
//     );
//     if (existingItemIndex !== -1) {
//       const updatedCart = [...prevCart];
//       updatedCart[existingItemIndex].quantity += 1;
//       return updatedCart;
//     } else {
//       return [...prevCart, { ...cartItem, quantity: 1 }];
//     }
//   });
// };

// const removeFromCart = (item) => {
//   cartWrap.setCart((prevCart) => {
//     const cartItemId = `${outletName}-${item.id}`;
//     const existingItem = prevCart.find((it) => it.id === cartItemId);

//     if (existingItem) {
//       if (existingItem.quantity > 1) {
//         return prevCart.map((it) =>
//           it.id === cartItemId ? { ...it, quantity: it.quantity - 1 } : it
//         );
//       } else {
//         return prevCart.filter((it) => it.id !== cartItemId);
//       }
//     }

//     return prevCart;
//   });
// };

// const getTotalItems = () => {
//   return cartWrap.readingCart.reduce((total, item) => total + item.quantity, 0);
// };

// const getTotalAmount = () => {
//   return cartWrap.readingCart.reduce((total, item) => total + item.price * item.quantity, 0);
// };
