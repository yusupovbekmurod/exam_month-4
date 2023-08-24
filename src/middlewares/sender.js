import nodemailer from "nodemailer";

const sendMail = (to, subject, code) => {
    let transporter = nodemailer.createTransport({
        service: "gmail",
        auth: {
            user: "yusupovbekmurod69@gmail.com",
            pass: "pvbythkginorfcqj",
        },
    });
    let mailOptions = {
        from: "yusupovbekmurod69@gmail.com",
        to,
        subject,
        html: `<h1>Login qilish uchun parolni oling</h1>
       <p>${code}</p> `
    };
    return transporter.sendMail(mailOptions);
};

export default sendMail;
