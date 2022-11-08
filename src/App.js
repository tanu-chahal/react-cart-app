// import logo from './logo.svg';
import './App.css';
import Navbar from './components/navbar';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import AddItem from './components/AddItem.js';
import React,{useState} from 'react'
function App() {
  const products = [
    {
      price: 299,
      name: 'Journal Diary',
      quantity: 0,
    },
    {
      price: 49,
      name: 'Magical Pen',
      quantity: 0,
    },
    {
      price: 499,
      name: 'Dora\'s Backpack',
      quantity: 0,
    },
  ];

  let [productList,setProductList] = useState(products);
  let [totalAmount,setTotalAmount] = useState(0);

  const incrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newProductList[index].quantity++;
    newTotalAmount += newProductList[index].price;
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const decrementQuantity = (index) => {
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    if (newProductList[index].quantity > 0) {
      newProductList[index].quantity--;
      newTotalAmount -= newProductList[index].price;
    }
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }
  const resetCart =() => {
    let newProductList = [...productList];
    newProductList.forEach(index =>index.quantity =0);
    setTotalAmount(0);
    setProductList(newProductList);
  }

  const removeItem= (index) =>{
    let newProductList = [...productList];
    let newTotalAmount = totalAmount;
    newTotalAmount -= (newProductList[index].quantity * newProductList[index].price);
    newProductList.splice(index,1);
    setTotalAmount(newTotalAmount);
    setProductList(newProductList);
  }

  const addItem =(itemName,price) =>{
    let newProductList = [...productList];
    newProductList.push({
      name: itemName,
      price: price,
      quantity: 0
    });
    setProductList(newProductList);
  }
    
  return (
   <>
    <Navbar/>
   <main className='container mt-5'>
    <AddItem addItem={addItem}/>
    <ProductList productList={productList} incrementQuantity = {incrementQuantity} decrementQuantity = {decrementQuantity} removeItem={removeItem}/>
    </main>
    <Footer totalAmount={totalAmount} resetCart ={resetCart} />
   </>
  );
}

export default App;
