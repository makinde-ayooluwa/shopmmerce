import { useContext } from "react";
import { Mode } from "../../theme/Mode";
import { Colors } from "../../constants/Colors";

export default function Dashboard() {
  const { mode, setMode } = useContext(Mode);
  const colors = Colors[mode];
  const stats = [
    {
      id: 1,
      title: "Total Earnings",
      icon: "bi bi-cash",
      value: "2,968.90",
      currency: "$",
    },
    {
      id: 2,
      title: "Total Items",
      icon: "bi bi-basket",
      value: "2600",
      currency: "",
    },
    {
      id: 3,
      title: "In Stock",
      icon: "bi bi-infinity",
      value: "18.6K",
      currency: "",
    },
    {
      id: 4,
      title: "Out of Stock",
      icon: "bi bi-infinity",
      value: "190",
      currency: "",
    },
    {
      id: 5,
      title: "Waiting for comfirmation",
      icon: "bi bi-infinity",
      value: "15",
      currency: "",
    },
    {
      id: 6,
      title: "Processing Order",
      icon: "bi bi-infinity",
      value: "70",
      currency: "",
    },
    {
      id: 7,
      title: "Ready for delivery",
      icon: "bi bi-infinity",
      value: "42",
      currency: "",
    },
    {
      id: 8,
      title: "Delivered Order",
      icon: "bi bi-infinity",
      value: "15K",
      currency: "",
    },
  ];
  const statStyle = {
    width: "18%",
    borderRadius: 10,
    background: colors.statCardBackground,
    display: "grid",
    padding: 20,
    color: colors.statColor,
    border: "1px solid " + colors.statBorderColor,
  };
  const tableStyle = {
    borderBottom: "1px solid #000",
    display: "flex",
    justifyContent: "space-between",
    padding: 10,
    alignItems: 'center',
  };
  return (
    <>
      <div style={{ width: "100%", overflow: "hidden" }}>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            padding: 10,
          }}
        >
          {stats.map((stat) => (
            <div key={stat.id} style={statStyle}>
              <div style={{ display: "grid" }}>
                <i className={stat.icon} style={{ padding: 10 }}></i>
                <b style={{ fontSize: 30 }}>
                  {stat.currency} {stat.value}
                </b>
                <small>{stat.title}</small>
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            display: "flex",
            flexWrap: "wrap",
            gap: 10,
            justifyContent: "center",
            alignItems: "center",
            marginTop: 20,
            padding: 10,
          }}
        >
          {/* Top selling products */}
          <div style={{ ...statStyle, width: "40%" }}>
            <div>
              <h2>Top Selling Product</h2>
              <table style={{ borderTop: "1px solid #000", width: "100%", alignItems:"center" }}>
                <thead>
                  <tr style={{ ...tableStyle, color: "#636363" }}>
                    <th>&nbsp;</th>
                    <th>Product Name</th>
                    <th>Category</th>
                    <th>Price</th>
                    <th>Sold</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ ...tableStyle , fontWeight:"bolder"}}>
                    <td>
                      <img src="/vite.svg" alt="" />
                    </td>
                    <td>Apple Watch Series 7</td>
                    <td>Electronics</td>
                    <td>$300</td>
                    <td>26</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          {/* Top Rated items */}
          <div style={{ ...statStyle, width: "40%" }}></div>
        </div>
      </div>
    </>
  );
}
