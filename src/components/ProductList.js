import Product from "./Product";

const ProductList = (props) => {
  console.log(props.products);
  return (
    <section className="productlistcontainer">
      {props.products.map((product) => (
        <Product
          key={product.id}
          id={product.id}
          image={product.image}
          altimage={product.altimage}
          title={product.title}
          description={product.description}
          price={product.price}
          quantity={product.quantity}
          location={product.location}
        />
      ))}
    </section>
  );
};

export default ProductList;
