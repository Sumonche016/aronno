import { Spin } from "antd";
// Import Ant Design styles
import "./loading.css"; // Import custom styles

const loading = () => {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <Spin className="custom-spinner" size="large" />
    </div>
  );
};

export default loading;
