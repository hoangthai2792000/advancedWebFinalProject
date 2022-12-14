const { check } = require("express-validator");

const changePassValidator = [
  check("oldPass")
    .exists()
    .withMessage("Vui lòng nhập mật khẩu cũ")
    .notEmpty()
    .withMessage("Không được để trống mật khẩu cũ")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu phải từ 6 ký tự"),
  check("newPass")
    .exists()
    .withMessage("Vui lòng nhập mật khẩu mới")
    .notEmpty()
    .withMessage("Không được để trống mật khẩu mới")
    .isLength({ min: 6 })
    .withMessage("Mật khẩu phải từ 6 ký tự"),

  check("rePassword")
    .exists()
    .withMessage("Vui lòng nhập xác nhận mật khẩu")
    .notEmpty()
    .withMessage("Vui lòng nhập xác nhận mật khẩu")
    .custom((value, { req }) => {
      if (value !== req.body.newPass) {
        throw new Error("Mật khẩu không khớp");
      }
      return true;
    }),
];

module.exports = changePassValidator;
