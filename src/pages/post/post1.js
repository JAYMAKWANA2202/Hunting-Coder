import Navbar from "../Navbar";

export default function post() {
  return (
    <>
      <style jsx>{`
        h1 {
          color: orange;
          margin-top: 12px;
          align-items: center;
          text-align: center;
        }
      `}</style>
      <Navbar />
      <h1>this is post inside post</h1>
    </>
  );
}
