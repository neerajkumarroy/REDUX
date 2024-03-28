import React from "react";

function Home(props) {
  console.log("Props", props);
  return (
    <div>
      <span className="cart-count">{props.data.length}</span>
      <div className="add-to-cart img">
        <img
          src="https://cdn-icons-png.flaticon.com/512/4357/4357325.png"
          alt=""
        />
      </div>
      <h1>
        {" "}
        <span style={{ color: "orange" }}>FooD-</span>Dashboard
      </h1>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://img.freepik.com/free-photo/vertical-view-vegan-tofu-pancakes-with-fruits-white-plate_181624-17934.jpg"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Pancake</span>
          <br />
          <span>Price: ₹499</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 499, name: "Pancake" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>

      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>SeaFood</span>
          <br />
          <span>Price: ₹599</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 599, name: "SeaFood" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.pexels.com/photos/323682/pexels-photo-323682.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Chicken</span>
          <br />
          <span>Price: ₹799</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 799, name: "Chicken" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.pexels.com/photos/842571/pexels-photo-842571.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg?auto=compress&cs=tinysrgb&w=600"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Salade</span>
          <br />
          <span>Price: ₹199</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 199, name: "Salade" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
      <div className="cart-wrapper">
        <div className="img-wrapper item">
          <img
            src="https://images.pexels.com/photos/291528/pexels-photo-291528.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
            alt=""
          />
        </div>
        <div className="text-wrapper item">
          <span>Chocolate Cake</span>
          <br />
          <span>Price: ₹399</span>
        </div>
        <div className="btn-wrapper item">
          <button
            onClick={() => {
              props.addToCartHandler({ pice: 399, name: "Chocolate Cake" });
            }}
          >
            Add To Cart
          </button>
          <button
            className="remove-btn"
            onClick={() => {
              props.removeToCartHandler();
            }}
          >
            Remove To Cart
          </button>
        </div>
      </div>
    </div>
  );
}
export default Home;
