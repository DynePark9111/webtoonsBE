const User = require("../models/user.model");

const getUser = (req, res) => {
  const { _id, username, email, bookmark, watchLater, likedWebtoon } =
    res.locals.user;
  try {
    res
      .status(200)
      .json({ _id, username, email, bookmark, watchLater, likedWebtoon });
  } catch (error) {
    res.status(409).json({ message: error.message });
  }
};

const patchBookmark = async (req, res) => {
  const { bookmark, _id } = res.locals.user;
  const webtoon = req.body.bookmark;
  const options = { new: true };

  async function removeBookmark() {
    const removed = bookmark.filter((i) => i !== webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { bookmark: removed },
      options
    );
    res.status(201).json({ bookmark: data.bookmark });
  }

  async function addBookmark() {
    const added = bookmark.concat(webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { bookmark: added },
      options
    );
    res.status(201).json({ bookmark: data.bookmark });
  }

  try {
    if (bookmark.includes(webtoon)) {
      removeBookmark();
    } else {
      addBookmark();
    }
  } catch (error) {
    if (res.locals.user === null) {
      res.status(401).json({ error: "no user" });
    } else {
      res.status(409).json({ message: error.message });
    }
  }
};

const patchWatchLater = async (req, res) => {
  const { watchLater, _id } = res.locals.user;
  const webtoon = req.body.watchLater;
  const options = { new: true };

  async function remove() {
    const removed = watchLater.filter((i) => i !== webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { watchLater: removed },
      options
    );
    res.status(201).json({ watchLater: data.watchLater });
  }

  async function add() {
    const added = watchLater.concat(webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { watchLater: added },
      options
    );
    res.status(201).json({ watchLater: data.watchLater });
  }

  try {
    if (watchLater.includes(webtoon)) {
      remove();
    } else {
      add();
    }
  } catch (error) {
    if (res.locals.user === null) {
      res.status(401).json({ error: "no user" });
    } else {
      res.status(409).json({ message: error.message });
    }
  }
};

const patchLiked = async (req, res) => {
  const { likedWebtoon, _id } = res.locals.user;
  const webtoon = req.body.likedWebtoon;
  const options = { new: true };

  async function remove() {
    const removed = likedWebtoon.filter((i) => i !== webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { likedWebtoon: removed },
      options
    );
    res.status(201).json({ likedWebtoon: data.likedWebtoon });
  }

  async function add() {
    const added = likedWebtoon.concat(webtoon);
    const data = await User.findByIdAndUpdate(
      _id,
      { likedWebtoon: added },
      options
    );
    res.status(201).json({ likedWebtoon: data.likedWebtoon });
  }

  try {
    if (likedWebtoon.includes(webtoon)) {
      remove();
    } else {
      add();
    }
  } catch (error) {
    if (res.locals.user === null) {
      res.status(401).json({ error: "no user" });
    } else {
      res.status(409).json({ message: error.message });
    }
  }
};

module.exports = {
  getUser,
  patchBookmark,
  patchWatchLater,
  patchLiked,
};
