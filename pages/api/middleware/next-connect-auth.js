import nc from "next-connect";

export function withAuth(req, res, next) {
  if (!req.headers.authentication) {
    res.status(401).json({ name: "Error" });
  }

  return next();
}

export default nc()
  .use(withAuth)
  .get((req, res) => res.json({ message: "GET" }))
  .post((req, res) => res.status(200).json({ message: "POST" }))
  .patch((req, res) => res.status(200).json({ message: "PATCH" }))
  .put((req, res) => res.status(200).json({ message: "PUT" }))
  .delete((req, res) => res.status(200).json({ message: "DELETE" }));
