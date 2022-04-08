export default function handler(req, res) {
  const { slugs } = req.query;
  res.status(200).json({ slugs });
}
