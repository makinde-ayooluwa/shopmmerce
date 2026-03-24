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
      alertSuccess.innerHTML = `
      <i class="bi bi-check-lg"></i>
      <p>${alertText.textContent}</p>
      <span></span>
      `;
      alertDisplay.current.appendChild(alertSuccess);
      setTimeout(() => {
        alertDisplay.current.removeChild(alertSuccess);
      }, 4000);
    } else if (productIsInCart) {
      const alertError = document.createElement("div");
      alertError.className = "alert alert-success";
      const alertText = new Alert().cartError(product);
      alertError.innerHTML = `
      <i class="bi bi-exclamation-triangle"></i>
      <p>${alertText.textContent}</p>
      <span></span>
      `;
      alertDisplay.current.appendChild(alertError);
      setTimeout(() => {
        alertDisplay.current.removeChild(alertError);
      }, 4000);
    }
  }
  const categories = [
    {
      id: 1,
      image: "/vite.svg",
      name: "Nails",
    },
    {
      id: 2,
      image: "/vite.svg",
      name: "Combs",
    },
    {
      id: 3,
      image: "/vite.svg",
      name: "Nails",
    },
    {
      id: 4,
      image: "/vite.svg",
      name: "Combs",
    },
    {
      id: 5,
      image: "/vite.svg",
      name: "Nails",
    },
    {
      id: 6,
      image: "/vite.svg",
      name: "Combs",
    },
    {
      id: 7,
      image: "/vite.svg",
      name: "Nails",
    },
    {
      id: 8,
      image: "/vite.svg",
      name: "Combs",
    },
    {
      id: 9,
      image: "/vite.svg",
      name: "Combs",
    },
    {
      id: 10,
      image: "/vite.svg",
      name: "Combs",
    },
  ];

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
      <div ref={alertDisplay}></div>
      <h4>Categories</h4>
      <div
        style={{
          display: "flex",
          gap: "30px",
          flexWrap: "nowrap",
          padding: 10,
          overflow: 'hidden',
          overflowX: 'scroll',
          scrollbarColor:"transparent",
          scrollbarWidth:"thin",
          msScrollbarArrowColor:"transparent"
        }}
      >
        {categories.map((category) => (
          <div key={category.id}>
            <img
              style={{
                border: "1px solid black",
                borderRadius: "50%",
                width: "50px",
              }}
              src={category.image}
              alt=""
            />
            <p>{category.name}</p>
          </div>
        ))}
      </div>
      <h4>Products</h4>
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
