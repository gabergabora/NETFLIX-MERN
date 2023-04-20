const User = require("../models/User");

const CryptoJS = require("crypto-js");

const updateUser = async (req, res) => {
  const { id } = req.params;

  if (req.user.id === id || req.user.isAdmin) {
    if (req.body.password) {
      req.body.password = CryptoJS.AES.encrypt(
        req.body.password,
        process.env.SECRET_KEY_FOR_CRYPTOJS
      ).toString();
    }

    try {
      const updatedUser = await User.findByIdAndUpdate(
        id,
        {
          $set: req.body, // will replace the whole document with the new one except the id
        },
        { new: true }
      );

      res.status(200).json({
        success: true,
        updatedUser,
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        errorMessage: error.message,
      });
    }
  } else {
    res.status(403).json({
      success: false,
      message: "You can update only your account!",
    });
  }
};

const deleteUser = async (req, res) => {
  const { id } = req.params;

  if (req.user.id === id || req.user.isAdmin) {
    try {
      await User.findByIdAndDelete(id);

      res.status(200).json({
        success: true,
        message: "User has been deleted successfully!",
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error",
        errorMessage: error.message,
      });
    }
  } else {
    res.status(403).json({
      success: false,
      message: "You can delete only your account!",
    });
  }
};

module.exports = { updateUser, deleteUser };
