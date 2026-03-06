import { useEffect, useState } from "react";
import Search from "../../components/user/Search";
import { products } from "../../tests/data";

export default function Home() {
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

  return (
    <>
      <Search searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
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
                  justifyContent: "space-between",
                  alignItems: "center",
                }}
              >
                <h3>{product.name}</h3>
                <div>
                  <span style={{ fontWeight: "bolder", color:"rgb(21, 255, 0)" }}>{product.currency}</span>
                  <span style={{fontWeight:"bold"}}>{product.price}</span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
