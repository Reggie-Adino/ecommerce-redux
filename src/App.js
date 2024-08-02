import './App.css';
import {useSelector, useDispatch} from "react-redux";
import { addToCart } from './store/reducers/cartSlice';


function App() {
  const {products,cart,total} = useSelector(state => state.cart);
  const dispatch = useDispatch();

  const handleOnChange = (e) => {
       let name = e?.target.options[e.target.selectedIndex].text;
       let price = parseInt(e.target.value);
       let itemObj = {name, price};
       dispatch(addToCart(itemObj))
       console.log(itemObj)
  }

  // console.log(first)


  return (
    <div className="App">
      <h1>PRODUCTS</h1>
      <select name="" id="" onChange={(e)=> handleOnChange(e)}>
        {products.map((product, index)=> {
          return <option key={index} value={product.price}>{product.name} {product.price}</option>
        })}
      </select>
      <hr />
      <h2>CARTS</h2>
        {cart.map( item => <p className="">{item.name}</p>)}
      <hr />
      <h2>TOTAL</h2>
      <p>{total}</p>
    </div>
  );
}

export default App;
