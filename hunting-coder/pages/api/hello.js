export default function hangler(req, res) {
  console.log("req: ", req);
  res.status(200).json({ name: "jay makwana" });
}
