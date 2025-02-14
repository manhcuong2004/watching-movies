const Customer = require("../../models/customer-model")
const bcrypt = require("bcrypt");
const crypto = require("crypto");

module.exports.registerPost = async (req, res) => {
    try {
        const { email, password, username } = req.body;
        if (!username || !email || !password) {
            return res.status(400).json({ error: "Thiếu thông tin bắt buộc!" });
        }
        const existEmail = await Customer.findOne({ email });
        if (existEmail) {
            return res.status(400).json({ error: "Email đã tồn tại!" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);
        const tokenUser = crypto.randomBytes(32).toString("hex");

        const newUser = new Customer({ username, email, password: hashedPassword, tokenUser });

        await newUser.save();

        res.status(201).json({ message: "Đăng ký thành công!", email });
    } catch (error) {
        console.error("Lỗi server:", error);
        res.status(500).json({ error: "Lỗi server, vui lòng tử lại!" });
    }
};

module.exports.loginPost = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email || !password) {
            return res.status(400).json({ error: "Thiếu thông tin!" });
        }
        const user = await Customer.findOne({ email });
        if (!user) {
            return res.status(400).json({ error: "Email không tồn tại" });
        }
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ error: "Password không đúng!" });
        }
        const newToken = crypto.randomBytes(32).toString("hex");

        user.tokenUser = newToken;
        await user.save();

        res.cookie("token", user.tokenUser, {
            httpOnly: true,
            secure: true,
            sameSite: "Strict",
            maxAge: 7 * 24 * 60 * 60 * 1000,
        });

        res.status(200).json({ message: "Đăng nhập thành công!", tokenUser: newToken });
    } catch (error) {
        console.error("Lỗi server:", error);
        res.status(500).json({ error: "Lỗi server, vui lòng tử lại!" });
    }
};