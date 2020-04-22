import Layout from '../components/MyLayout';
import Product from '../components/Product';
import { connect } from 'react-redux';
import Client from 'shopify-buy';
import {useSelector, useDispatch} from 'react-redux';
import { bindActionCreators } from 'redux';
import { getProducts } from '../redux/actions/product_actions';

let arr = []
const client = Client.buildClient({
	storefrontAccessToken: '26853603f3b67fead6e3bcf3ee602758',
	domain: 'a-very-small-store.myshopify.com'
})


client.product.fetchAll().then(res =>
	res.forEach(i => arr.push(i)
	)
);
class Menu extends React.Component {
	constructor(props) {
		super(props);

		this.state = {
			products: []
		};
	}

	componentDidMount() {
		this.props.getProducts()

		client.product.fetchAll().then(res => {
			this.setState({
				products: [res]
			});
		});
	}


	// dispatch(getProducts())
	render() {
		return (
			<Layout>
				<p>Menu</p>
				{this.props.products.map(product => <Product key={product.title} this_product={product}/>)}
			</Layout>
		);
	}
}

function mapStateToProps(state) {
	return {
		products: state.products.products
	}
}

function mapDispatchToProps(dispatch) {
	return {
		getProducts: () => dispatch(getProducts())
	};
}

// const mapDispatchToProps = (dispatch) => {
// 	return {
// 		getProducts: (client) => { dispatch({type: 'GET_PRODUCTS', payload: arr})}
// 	}
// }

// function mapDispatchToProps(dispatch) {
// 	return {
// 		actions: bindActionCreators(getProducts)
// 	};
// }


export default connect(mapStateToProps, mapDispatchToProps)(Menu);