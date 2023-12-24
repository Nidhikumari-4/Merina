import React from "react";
import "./SideBar.scss";
import { Image } from "primereact/image";

const SideBar = () => {
  const SideBarItems = [
    {
      icon: <Image src="/home.svg" alt="Image" width="20" />,
      label: "Dashboard",
    },
    {
      icon: <Image src="/document-text.svg" alt="Image" width="20" />,
      label: "Content",
    },
    {
      icon: <Image src="/profile-2user.svg" alt="Image" width="20" />,
      label: "Team",
    },
    {
      icon: <Image src="/user-square.svg" alt="Image" width="20" />,
      label: "User",
    },
    {
      icon: <Image src="/monitor-mobbile.svg" alt="Image" width="20" />,
      label: "App/Web",
    },
    {
      icon: <Image src="/status-up.svg" alt="Image" width="20" />,
      label: "Analytics",
    },
    {
      icon: <Image src="/video-square.svg" alt="Image" width="20" />,
      label: "Media",
    },
    {
      icon: <Image src="/notification.svg" alt="Image" width="20" />,
      label: "Notification",
    },
    {
      icon: (
        <Image
          src="/subscription_youtube_menu_icon.svg"
          alt="Image"
          width="20"
        />
      ),
      label: "Subscription",
    },
    {
      icon: <Image src="/Setting.svg" alt="Image" width="20" />,
      label: "Settings",
    },
  ];
  return (
    <div className="side_bar">
      <span className="logo">
        <Image src="/logo.png" alt="Image" width="110" />
      </span>
      {SideBarItems.map((items, index) => (
        <span
          key={index}
          className="icons"
          style={
            items.label === "Dashboard"
              ? {
                  backgroundColor: "#7950F2",
                  borderRadius: "0.75rem",
                }
              : {}
          }
        >
          <span>{items.icon}</span>
          <p
            className="text_content"
            style={
              items.label === "Dashboard"
                ? {
                    color: "white",
                  }
                : {}
            }
          >
            {items.label}{" "}
          </p>
        </span>
      ))}
      <span className="support">
        <Image src="/headphones.svg" alt="Image" width="20" />
        <p className="text_content"> Contact Support</p>
      </span>
    </div>
  );
};

export default SideBar;
