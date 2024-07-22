import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const AllProductsPage = () => {
  const [products, setProducts] = useState([])

  const getAllProducts = async () => {
    try {
      const response = await fetch(`${import.meta.env.VITE_API_URL}/api/products`)
      if (response.ok) {
        const productsData = await response.json()
        setProducts(productsData)
      }
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getAllProducts()
  }, [])

  return (
    <>
      <h1>All products</h1> {/*toDO: add skeleton as placeholder while data is loading */}
      <ul>
        {products.map(currentProduct => (
          <li key={currentProduct._id}>
            <Link to={`/recipes/${currentProduct._id}`}>{currentProduct.title}</Link>
          </li>
        ))}
      </ul>
    </>
  )
}

export default AllProductsPage;
