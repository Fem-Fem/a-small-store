import Link from 'next/link';

const linkStyle = {
	marginRight: 15
}

const Header = () => (
	<div>
		<Link href="/">
			<a style={linkStyle}>Home</a>
		</Link>
		<Link href="/menu">
			<a style={linkStyle}>Menu</a>
		</Link>
		<Link href="/signup">
			<a style={linkStyle}>Sign Up</a>
		</Link>
		<Link href="/login">
			<a style={linkStyle}>Log In</a>
		</Link>
		<Link href="/cart">
			<a style={linkStyle}>Cart</a>
		</Link>
		<Link href="/account">
			<a style={linkStyle}>Account</a>
		</Link>
	</div>
);

export default Header;