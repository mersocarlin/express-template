function list(req, res) {
  res.status(200).send([{ status: 0 }, { status: 1 }, { status: 2 }])
}

export default {
  list: list.bind(this),
}
