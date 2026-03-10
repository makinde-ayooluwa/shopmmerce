import { useEffect, useRef, useState } from "react";
import Search from "../../components/user/Search";
import { products } from "../../tests/data";
import Alert from "../../resources/Alert";

export default function Home() {
  const alertDisplay = useRef(null);

  const [searchQuery, setSearchQuery] = useState("");
  const [dbProducts, setDbProducts] = useState(products); // <-- use state
  const productGrid = () => {
    if (innerWidth < 768) {
      return {
        width: "50%",
      };
    } else if (innerWidth < 992) {
      return {
        width: "33.3%",
      };
    } else if (innerWidth < 1024) {
      return {
        width: "25%",
      };
    } else {
      return {
        width: "20%",
      };
    }
  };
  const productAdditionalStyle = productGrid();

  useEffect(() => {
    function fetchData(query) {
      const filtered = products.filter((product) =>
        product.name.toLowerCase().includes(query.toLowerCase()),
      );
      setDbProducts(filtered); // <-- update state, triggers re-render
    }

    fetchData(searchQuery);
  }, [searchQuery]);

  function addToCart(id) {
    const cart = localStorage.getItem("cart")
      ? JSON.parse(localStorage.getItem("cart"))
      : [];
    const product = products.find((x) => x.id == id);
    const productIsInCart = cart.find((x) => x.id == id);
    if (product && !productIsInCart) {
      cart.push(product);
      localStorage.setItem("cart", JSON.stringify(cart));
      const alertSuccess = document.createElement("div");
      alertSuccess.className = "alert alert-success";
      const alertText = new Alert().cartSuccess(product);
      alertSuccess.appendChild(alertText);
      alertDisplay.current.appendChild(alertSuccess);
    }
  }

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div ref={alertDisplay}>Hi</div>
      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
        }}
      >
        {dbProducts.map((product) => (
          <div
            style={{ flex: "0 0 auto", ...productAdditionalStyle }}
            key={product.id}
          >
            <div
              style={{
                borderRadius: "12px",
                boxShadow: "0 4px 15px rgba(0,0,0,0.2)",
                width: "95%",
              }}
            >
              <div style={{ height: "200px", overflow: "hidden" }}>
                <img
                  src={product.image}
                  style={{ width: "100%", height: "auto" }}
                  alt=""
                />
              </div>
              <div
                style={{
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  padding: 20,
                }}
              >
                <h3>{product.name}</h3>
              </div>
              <div style={{ textAlign: "center", padding: 20 }}>
                <span
                  style={{ fontWeight: "bolder", color: "rgb(85, 85, 85)" }}
                >
                  {product.currency}
                </span>
                <span style={{ fontWeight: "bold" }}>{product.price}</span>
              </div>
              <div
                style={{
                  alignSelf: "center",
                  display: "flex",
                  justifyContent: "center",
                  padding: 20,
                }}
              >
                <button
                  onClick={() => {
                    addToCart(product.id);
                  }}
                  style={{
                    border: "none",
                    cursor: "pointer",
                    width: "50%",
                    justifySelf: "center",
                    padding: 10,
                    borderRadius: 12,
                    background: "#ea3",
                    color: "#fff",
                  }}
                >
                  <i className="bi bi-cart"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
