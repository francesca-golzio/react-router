import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'

export default function SingleProduct() {
  //const { id, title, price, description, category, image, rating } = useParams();
  const { id } = useParams();
  console.log(id);
  const product_api = `https://fakestoreapi.com/products/${id}`
  const [fetchedProduct, setFetchedProduct] = useState(null);

  useEffect(() => {

    fetch(product_api)
      .then(res => res.json())
      .then(prodotto => {
        console.log('🟢', prodotto, id);
        console.log('🟢', id);
        setFetchedProduct(prodotto)
      })
      .catch((error) => console.log(error));

  }, [id])

  /*   if(fetchedProduct === null) { */
  if (!fetchedProduct) {
    console.log('loading');
    return (
      <div>loading</div>
    )
  }

  const { title, price, description, category, image, rating } = fetchedProduct;

  return (
    <>
      <main>
        <div className="container container_product_page">


          <img src={image} alt="" />
          <h2 className='product_title'>{title}</h2>
          <p className='product_description'>{description}</p>
          <div className='product_category'>{`# ${category}`}</div>
          <div className='product_price'>{price}</div>
          <div className='product_price'>{price}</div>










        </div>
      </main >
    </>
  )
}