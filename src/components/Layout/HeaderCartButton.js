import classes from "./HeaderCartButton.module.css";
import CartIcon from "../Cart/CartIcon";
import { useContext, useEffect, useState } from "react";
import CartContext from "../../store/cart-context";

const HeaderCartButton = (props) => {
	const [btnIsHighLighted, setBtnIsHighLighted] = useState(false);

	const cartCtx = useContext(CartContext);

	//reduce fxn

	const numberOfCartItems = cartCtx.items.reduce((curNumber, item) => {
		return curNumber + item.amount;
	}, 0);

	const { items } = cartCtx;

	const btnClasses = `${classes.button} ${
		btnIsHighLighted ? classes.bump : ""
	}`;

	useEffect(() => {
		if (items.length === 0) {
			return;
		}
		setBtnIsHighLighted(true);
		const timer = setTimeout(() => {
			setBtnIsHighLighted(false);
		}, 300);

		//cleanup fxn
		return () => {
			clearTimeout(timer);
		};

		// }, [cartCtx.items]);
	}, [items]);

	return (
		<button className={btnClasses} onClick={props.onClick}>
			<span className={classes.icon}>
				<CartIcon />
			</span>
			<span>Your Cart</span>
			<span className={classes.badge}>{numberOfCartItems}</span>
		</button>
	);
};

export default HeaderCartButton;
