// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import * as fs from "fs";
export default function handler(req, res) {
  fs.readFile(`blogdata/${req.query.slug}.json`, "utf-8", (err, data) => {
    console.log("req.query.slug: ", req.query.slug);
    if (data) {
      res.status(200).json(JSON.parse(data));
    } else {
      res.status(500).json({ error: "No data found" });
    }
  });
}
