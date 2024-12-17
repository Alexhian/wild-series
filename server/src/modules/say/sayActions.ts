import type{ RequestHandler } from "express";

const sayWelcome : RequestHandler = (req, res) => {
    res.send("Welcome to wild Series !");
};

export default { sayWelcome };
