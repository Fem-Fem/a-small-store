import Link from 'next/link';
import {useSelector, useDispatch} from 'react-redux';


const linkStyle = {
	marginRight: 15
}

function isEmpty(obj) {
	for (var key in obj) {
		if(obj.hasOwnProperty(key)) {
			return false;
		}
	}
	return true;
}

function Filter() {
	const current_user = useSelector(state => state.users.current_user);
	console.log(current_user)
	if (!isEmpty(current_user)) {
		return (
			<div>
				<Link href="/">
					<a style={linkStyle}>Home</a>
				</Link>
				<Link href="/menu">
					<a style={linkStyle}>Menu</a>
				</Link>
				<Link href="/cart">
					<a style={linkStyle}>Cart</a>
				</Link>
				<Link href="/account">
					<a style={linkStyle}>Account</a>
				</Link>
				<Link href="/logout">
					<a style={linkStyle}>Log Out</a>
				</Link>
			</div>
		 )
	}
	return (	
		<div>
			<Link href="/">
				<a style={linkStyle}>Home</a>
			</Link>
			<Link href="/menu">
				<a style={linkStyle}>Menu</a>
			</Link>
			<Link href="/cart">
				<a style={linkStyle}>Cart</a>
			</Link>
			<Link href="/signup">
				<a style={linkStyle}>Sign Up</a>
			</Link>
			<Link href="/login">
				<a style={linkStyle}>Log In</a>
			</Link>
			<Link href="/account">
				<a style={linkStyle}>Account</a>
			</Link>
		</div>
	)
}

const Header = () => (
	< Filter />
);

export default Header;