import mealsImage from "../../assets/meals.jpeg"; //image ko import krvake daal skta
import classes from "./Header.module.css"; //modules meh aise krna hota tha
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
	return (
		<>
			<header className={classes.header}>
				<h1>ReactMeals</h1>
				{/* yeh on click apna name diya h jisse HeaderCartButton meh access kr sake and udhr onclick 
				button peh h toh vo toh html wala h udhr name kuch bhi nhi rkh skte idhr rkh skte kyuki apna component h */}
				<HeaderCartButton onClick={props.onShowCart} />
			</header>
			<div className={classes["main-image"]}>
				{/* <img stc="online hoti toh https:... krke" /> */}
				<img src={mealsImage} alt="A table full of delicious food!" />
			</div>
		</>
	);
};

export default Header;
