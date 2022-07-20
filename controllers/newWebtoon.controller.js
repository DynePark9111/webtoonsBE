const NewWebtoon = require("../models/newWebtoon.model");

const getNewWebtoons = async (req, res) => {
  const platform = req.query.platform || "전체";
  const platformArray = platform.split(",");
  const page = parseInt(req.query.page) || 1;

  const limit = 20;
  const startIndex = (page - 1) * limit;
  const endIndex = page * limit;
  const results = {};
  const query = {};
  const total = await NewWebtoon.countDocuments(query).exec();

  function setMeta() {
    if (endIndex < total) return { nextPage: page + 1, limit, total };
    if (startIndex > 0) return { previousPage: page - 1, limit, total };
    return { limit, total };
  }
  results.meta = setMeta();

  try {
    platform === "전체"
      ? (result = await NewWebtoon.find().limit(limit).sort({ updatedAt: -1 }))
      : (result = await NewWebtoon.find({
          platform: { $in: platformArray },
        })
          .limit(limit)
          .sort({ updatedAt: -1 }));
    res.json(result);
  } catch (error) {
    res.status(404).json({ message: error.message });
  }
};

module.exports = {
  getNewWebtoons,
};
