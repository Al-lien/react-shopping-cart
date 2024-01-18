// components
import CartItem from "../cartItem/CartItem";

// styles
import { Wrapper } from "./Cart.styles";

// types
import { CartItemType } from "../App";

type Props = {
  cartItems: CartItemType[];
  handleAddToCart: (clickedItem: CartItemType) => void;
  handleRemoveFromCart: (id: number) => void;
};

const Cart: React.FC<Props> = ({
  cartItems,
  handleAddToCart,
  handleRemoveFromCart,
}) => {
  const calculateTotal = (items: CartItemType[]) =>
    items.reduce((acc: number, item) => acc + item.amount * item.price, 0);

  return (
    <Wrapper>
      <h2>You shopping cart</h2>
      {cartItems.length === 0 ? <p>No items to cart</p> : null}
      {cartItems.map((item) => (
        <CartItem
          key={item.id}
          item={item}
          handleAddToCart={handleAddToCart}
          handleRemoveFromCart={handleRemoveFromCart}
        />
      ))}
      <h2>Total: ${calculateTotal(cartItems).toFixed(2)}</h2>
    </Wrapper>
  );
};

export default Cart;
