import React from "react";

const CartContext = React.createContext({
	items: [],
	totalAmount: 0,
	addItems: (id) => {},
	removeItem: (id) => {},
	clearCart: () => {},
});

export default CartContext;

//ab sun ki yeh main file h iske baad provider bnaya provide krdiya ab hr jagah ja chaiye then consume kelia issi main file ko import krke useContext kiya .. now props kiya jagah const jo bnaya use that jisse iski 2nd main file provider vali meh data change ho sake
