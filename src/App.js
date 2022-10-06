import { Fragment } from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import Welcome from './pages/Welcome';
import Products from './pages/Products';
import ProductDetail from './pages/ProductDetail';
import MainHeader from './components/MainHeader';

const App = () => {
  return (
  	<Fragment>
  		<MainHeader/>
  		<main>
  			<Switch>
  			<Route path="/" exact>
  				<Redirect to="/welcome" />
  			</Route>
  			<Route path="/welcome">
      		<Welcome />
      	</Route>
      	<Route path="/products" exact>
      		<Products />
      	</Route>
      	<Route path="/products/:productId">
      		<ProductDetail />
      	</Route>
      	</Switch>
  		</main>
  	</Fragment>
  );
}

export default App;
