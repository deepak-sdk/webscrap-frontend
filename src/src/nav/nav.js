import React from "react";
import "./nav.css";

function Nav({ cart }) {
  return (
    <div className="elaunch-nav">
      <div className="elaunch-title">
        <p>e`launch</p>
        <span>shop all</span>
      </div>

      <div className="elaunch-search">
        <input type="search" placeholder="search" />
        <button>Search</button>
      </div>
      <div className="elaunch-cart">
        <button>
          <span>{cart}</span> Items
        </button>
      </div>

      <div className="elaunch-login-signup">
        <button>Login</button>
        <button>Sign up</button>
      </div>
    </div>
  );
}

export default Nav;
