import React from "react";
function Header(props) {
  console.warn(props.data);
  return (
    <div>
      <div className="add-to-cart img">
        {/* <img
          src="https://cdn-icons-png.flaticon.com/512/4357/4357325.png"
          alt=""
        /> */}
      </div>
    </div>
  );
}

export default Header;
