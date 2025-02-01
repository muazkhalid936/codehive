// components/VideoLoader.js
export default function Loader() {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100vh",
      }}
    >
      <video autoPlay loop muted style={{ height: "50vh" }}>
        <source src="/1.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>
    </div>
  );
}
