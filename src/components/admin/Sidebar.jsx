import { useState } from "react";

export default function Sidebar({sidebarStyle, setSidebarStyle}) {
  const [openId, setOpenId] = useState(null);

  const toggle = (id) => {
    setOpenId(openId === id ? null : id);
  };
  const sidelinks = [
    {
      id: 1,
      title: "Dashboard",
      sublinks: [
        {
          id: 1,
          title: "Overview",
          link: "/admin/dashboard",
        },
      ],
    },
    {
      id: 2,
      title: "Products",
      sublinks: [
        {
          id: 1,
          title: "All Products",
          link: "/admin/products",
        },
        {
          id: 2,
          title: "Add Product",
          link: "/admin/products/add",
        },
      ],
    },
    {
      id: 3,
      title: "Categories",
      sublinks: [
        {
          id: 1,
          title: "All Categories",
          link: "/admin/categories",
        },
        {
          id: 2,
          title: "Add Category",
          link: "/admin/categories/add",
        },
      ],
    },
    {
      id: 4,
      title: "Orders",
      sublinks: [
        {
          id: 1,
          title: "All Orders",
          link: "/admin/orders",
        },
        {
          id: 2,
          title: "Pending Orders",
          link: "/admin/orders/pending",
        },
        {
          id: 3,
          title: "Completed Orders",
          link: "/admin/orders/completed",
        },
      ],
    },
    {
      id: 5,
      title: "Customers",
      sublinks: [
        {
          id: 1,
          title: "All Customers",
          link: "/admin/customers",
        },
      ],
    },
    {
      id: 6,
      title: "Coupons",
      sublinks: [
        {
          id: 1,
          title: "All Coupons",
          link: "/admin/coupons",
        },
        {
          id: 2,
          title: "Create Coupon",
          link: "/admin/coupons/create",
        },
      ],
    },
    {
      id: 7,
      title: "Analytics",
      sublinks: [
        {
          id: 1,
          title: "Sales Report",
          link: "/admin/analytics",
        },
      ],
    },
    {
      id: 8,
      title: "Settings",
      sublinks: [
        {
          id: 1,
          title: "Store Settings",
          link: "/admin/settings",
        },
        {
          id: 2,
          title: "Admin Accounts",
          link: "/admin/settings/admins",
        },
      ],
    },
  ];
  return (
    <div style={sidebarStyle}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          overflow: "hidden",
          height: "70px",
        }}
      >
        <img
          src="/vite.svg"
          style={{ position: "relative", display: "block" }}
          alt=""
        />
      </div>
      <div style={{ padding: "10px", display: "grid" }}>
        {sidelinks.map((item) => (
          <div key={item.id} style={{ marginBottom: "10px" }}>
            <h3
              onClick={() => toggle(item.id)}
              style={{
                cursor: "pointer",
                padding: "10px",
                background: "#1e1e1e",
                margin: 0,
                borderRadius: "5px",
                color: "#fff",
              }}
            >
              {item.title}
            </h3>

            <div
              style={{
                maxHeight: openId === item.id ? "500px" : "0px",
                overflow: "hidden",
                transition: "max-height 0.3s ease",
              }}
            >
              {item.sublinks.map((link) => (
                <a
                  key={link.id}
                  href={link.link}
                  style={{
                    display: "block",
                    padding: "8px 12px",
                    textDecoration: "none",
                    color: "#424242",
                  }}
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
