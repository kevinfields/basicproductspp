import { useRef } from "react";

const NewProductForm = (props) => {
  const titleInputRef = useRef();
  const imageInputRef = useRef();
  const altImageInputRef = useRef();
  const descriptionInputRef = useRef();
  const priceInputRef = useRef();
  const quantityInputRef = useRef();
  const locationInputRef = useRef();

  const submitHandler = (event) => {
    event.preventDefault();
    const enteredTitle = titleInputRef.current.value;
    const enteredImage = imageInputRef.current.value;
    const enteredAltImage = altImageInputRef.current.value;
    const enteredDescription = descriptionInputRef.current.value;
    const enteredPrice = priceInputRef.current.value;
    const enteredQuantity = quantityInputRef.current.value;
    const enteredLocation = locationInputRef.current.value;

    const productData = {
      title: enteredTitle,
      image: enteredImage,
      altimage: enteredAltImage,
      description: enteredDescription,
      price: enteredPrice,
      quantity: enteredQuantity,
      location: enteredLocation,
    };
    props.onAddProduct(productData);
  };
  return (
    <form className="form" onSubmit={submitHandler}>
      <ul className="container">
        <li className="item">
          <p>
            <label htmlFor="title">Product Name</label>
          </p>
          <p>
            <input
              type="text"
              required
              id="title"
              ref={titleInputRef}
              className="input"
              maxLength={25}
            />
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="image">Image Link</label>
          </p>
          <p>
            <input
              type="url"
              required
              id="image"
              ref={imageInputRef}
              className="input"
            />
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="altimage">Second Image Link</label>
          </p>
          <p>
            <input
              type="url"
              id="altimage"
              ref={altImageInputRef}
              className="input"
            />
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="location">Location</label>
          </p>
          <p>
            <input
              id="location"
              type="text"
              required
              rows={8}
              ref={locationInputRef}
              className="input"
              maxLength={25}
            ></input>
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="price">Price ($)</label>
          </p>
          <p>
            <input
              type="number"
              required
              id="price"
              ref={priceInputRef}
              className="input"
              maxLength={12}
              min={0}
            />
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="quantity">Number Available</label>
          </p>
          <p>
            <input
              type="number"
              required
              id="quantity"
              ref={quantityInputRef}
              className="input"
              maxLength={8}
              min={1}
            />
          </p>
        </li>
        <li className="item">
          <p>
            <label htmlFor="description">Description</label>
          </p>
          <p>
            <textarea
              required
              id="description"
              ref={descriptionInputRef}
              className="input"
              rows={15}
              maxLength={22 * 15}
            ></textarea>
          </p>
        </li>
        <li>
          <button className="addproductbutton">Add Product</button>
        </li>
      </ul>
    </form>
  );
};

export default NewProductForm;
