const db = require("../models/index");
const Tutorial = db.tutorials;
const Op = db.Sequelize.Op;

const getPagination = (page, size) => {
  const limit = size ? +size : 3;
  const offset = page ? page * limit : 0;

  return { limit, offset };
};

const getPagingData = (data, page, limit) => {
  const { count: totalItems, rows: tutorials } = data;
  console.log(tutorials);
  const currentPage = page ? +page : 0;

  const totalPages = Math.ceil(totalItems / limit);

  return { totalItems, tutorials, totalPages, currentPage };
};

exports.findAll = (req, res) => {
  const { page, size, title } = req.query;

  const condition = title
    ? {
        title: {
          [Op.like]: `%${title}%`,
        },
      }
    : null;

  const { limit, offset } = getPagination(page, size);

  Tutorial.findAndCountAll({
    where: condition,
    limit,
    offset,
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);

      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ...",
      });
    });
};

exports.findAllPublished = (req, res) => {
  const { page, size } = req.query;
  const { limit, offset } = getPagination(page, size);

  Tutorial.findAndCountAll({
    where: {
      published: true,
    },
    limit,
    offset,
  })
    .then((data) => {
      const response = getPagingData(data, page, limit);

      res.send(response);
    })
    .catch((err) => {
      res.status(500).send({
        message: err.message || "Some error ...",
      });
    });
};
