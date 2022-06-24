function respondSuccess(res, data) {
  res.setHeader('Site', 'Server');
  res.status(200).send(data);
}

module.exports = respondSuccess;
