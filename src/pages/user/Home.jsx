export default function Home() {
  return (
    <>
      <div
        style={{
          width: "100%",
          overflow: "hidden",
        }}
      >
        <div
          style={{
            display: "flex",
            justifyContent: "center",
            gap: 10,
            padding: "20px",
          }}
        >
          <input
            style={{ padding: "10px", width: "400px" }}
            placeholder="Search for products"
            type="text"
          />
          <button>
            Search
          </button>
        </div>
      </div>
    </>
  );
}
