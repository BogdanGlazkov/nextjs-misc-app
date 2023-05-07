export default function handler(req, res) {
  res.setPreviewData({ user: "GBA" });
  res.redirect(req.query.redirect);
}
