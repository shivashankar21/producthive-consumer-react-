import React, {  useEffect, useState } from 'react';//rfce for normal function 
import ProductService from '../services/ProductService';


function Products() {
  //using state management using UseState() react hook method
  const [products, setProducts] = useState([]);
  const [message, setMessage] = useState('');
  const [user, setUser] = useState(''); //ush shortcut

 /*
    The useEffect hook in React is use to handle the side effects in React such as 
    fetching data, and updating DOM. This hook runs on every render but there is 
    also a way of using a dependency array using which we can control the effect of 
    rendering.

    The motivation behind the introduction of useEffect Hook is to eliminate the 
    side effects of using class-based components.

    Syntax: useEffect(<FUNCTION>, <DEPENDECY>)
     - To run useEffect on every render do not pass any dependency
     - To run useEffect only once on the first render pass any empty array in the dependecy
     - To run useEffect on change of a particular value. Pass the state and props in the dependency array
     */

    // handling componentDidMount()

  //react hook-runs only once on the first render -ueh for shortcut
  useEffect(() => { 
    fetchProducts();
  }, []);

  const fetchProducts = () => { 
    ProductService.getProducts().then((response)=>{
      setProducts(response.data);
    } );
  }//nfn for normal arrow function
  
  /*
    We are using the map operator to loop over our products list and create the view
    */
  return (
    <div>

<h1 className="text-warning">Products List</h1>
   
   
   <div className="row justify-content-center" >
                    <table className="table table-success w-auto">
                     <thead>
                        <tr className="table-danger">
                            <th> Product Id</th>
                            <th> Product Name</th>
                            <th> Brand</th>
                            <th> MadeIn</th>
                            <th> Price</th>
                            <th> Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                            {products.map(
                                    prod => 
                                    <tr key={prod.id}>
                                        <td> {prod.pid} </td>
                                        <td> {prod.name} </td>
                                        <td> {prod.brand} </td>
                                        <td> {prod.madein} </td>
                                        <td> {prod.price} </td>
                                        </tr>
                                )
                            }
                    </tbody>
                    </table>
    </div>
    </div>
  )
}

export default Products;