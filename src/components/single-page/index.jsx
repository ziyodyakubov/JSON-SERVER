import * as React from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { useEffect,useState } from 'react'

export default function SinglePage() {
  const {id} = useParams()

  const [products,setProducts] = useState([])
 
    useEffect(()=>{
        axios.get(`http://localhost:3000/users`).then(response=>{
            setProducts(response.data)
        })
    },[])

    const product = products.find(p => p.id === parseInt(id));

    if (!product) {
      return <h1>Product not found</h1>;
    }


  return (
    <div className="flex justify-center">
      <h1>{product.name}</h1>
    </div>
  );
}
