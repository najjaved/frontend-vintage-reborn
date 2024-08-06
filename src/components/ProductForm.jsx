import React, { useState, useEffect, useContext } from "react";
import { Modal, TextInput, NumberInput, Select, Textarea, Button, Group, Divider, Grid, Space } from "@mantine/core";
import { SessionContext } from "../contexts/SessionContext";
import { CartContext } from "../contexts/CartContext";

const resetInitialStates = () => ({
  category: "",
  name: "",
  description: "",
  price: 0,
  discount: 0,
  stock: 0,
  images:""
});

const ProductForm = ({ isOpen, onClose, product: initialProduct }) => {
  const { fetchWithToken, token } = useContext(SessionContext);
  const { getAllProducts } = useContext(CartContext);

  const [product, setProduct] = useState(resetInitialStates());

  useEffect(() => {
    if (initialProduct) {
      setProduct({
        ...resetInitialStates(),
        ...initialProduct
      });
    } else {
      setProduct(resetInitialStates());
    }
  }, [initialProduct]);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const url = `/products${initialProduct ? `/${initialProduct._id}` : ""}`; 
    const method = initialProduct ? "PUT" : "POST";
    const payload = product;
    try {
      const responseStatus = await fetchWithToken(url, method, payload);

      if (responseStatus === 201) {
          setProduct(resetInitialStates()); // reset form entries
          getAllProducts();
          onClose();
      }

    }
    catch (error) {
      console.log("Error adding new product:", error);
    }
  }  

  const handleChange = (event) => {
    const { name, value } = event.target;
    setProduct((prevData) => ({...prevData, [name]: value,}));
  };

  return (
    <Modal opened={isOpen} onClose={onClose} title={initialProduct ? "Edit Product" : "New Product"}>
      <form onSubmit={handleSubmit}>
        <Grid>
          <Grid.Col span={6}>
            <Select
              label="Product Category"
              name="category"
              value={product.category || ""}
              onChange={(value) => setProduct({ ...product, category: value })}
              data={[
                { value: "Electronics", label: "Electronics" },
                { value: "Clothing", label: "Clothing" },
                { value: "Shoes", label: "Shoes" },
                { value: "Home", label: "Home" },
              ]}
              placeholder="Select category"
              style={{ width: "100%" }}
            />
            <Space h="md" />
            <TextInput
              label="Name"
              name="name"
              value={product.name || ""}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            <Space h="md" />
            <NumberInput
              label="Price"
              name="price"
              value={product.price || 0}
              onChange={(value) => setProduct({ ...product, price: value })}
              style={{ width: "100%" }}
              hideControls
            />
            <Space h="md" />
            <Select
              label="Discount"
              name="discount"
              value={product.discount.toString() || "0"}
              onChange={(value) => setProduct({ ...product, discount: parseFloat(value) })}
              data={[
                { value: "0", label: "0%" },
                { value: "0.05", label: "5%" },
                { value: "0.10", label: "10%" },
                { value: "0.15", label: "15%" },
                { value: "0.20", label: "20%" },
                { value: "0.25", label: "25%" },
                { value: "0.30", label: "30%" },
                { value: "0.35", label: "35%" },
                { value: "0.40", label: "40%" },
                { value: "0.45", label: "45%" },
                { value: "0.50", label: "50%" },
              ]}
              placeholder="Select discount"
              style={{ width: "100%" }}
            />
          </Grid.Col>

          <Grid.Col span={6}>
            <TextInput
              label="Product Image URL"
              name="images"
              value={product.images || ""}
              onChange={handleChange}
              style={{ width: "100%" }}
            />
            {product.images.length > 0 && product.images && (
              <div className="image-preview">
                <img
                  src={product.images}
                  alt="Product preview"
                  style={{ maxHeight: "200px", maxWidth: "100%" }}
                />
              </div>
            )}
            <Space h="md" />
            <Textarea
              label="Description"
              name="description"
              value={product.description || ""}
              onChange={handleChange}
              rows={5}
              cols={25}
              style={{ width: "100%" }}
            />
            <Space h="md" />
            <NumberInput
              label="Stock"
              name="stock"
              value={product.stock || 0}
              onChange={(value) => setProduct({ ...product, stock: value })}
              style={{ width: "100%" }}
              hideControls
            />
          </Grid.Col>
        </Grid>
        <Divider my="lg" />
        <Group position="apart">
          <Button type="submit" variant="filled" size="md" radius="md">
            {initialProduct ? "Update Product" : "Save Product"}
          </Button>
          <Button type="button" variant="filled" size="md" radius="md" onClick={onClose}>
            Cancel
          </Button>
        </Group>
      </form>
    </Modal>
  );
};

export default ProductForm;
