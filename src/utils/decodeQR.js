
import Jimp from "jimp";
import qrCode from 'qrcode-reader';

const decodeQR = (fileBuffer) => new Promise((resolve, reject) => {
    Jimp.read(fileBuffer, function (err, image) {
        if (err) {
            console.error(err);
        }
        // Creating an instance of qrcode-reader module
        let qrcode = new qrCode();
        qrcode.callback = function (err, value) {
            if (err) {
                console.error(err);
            }
            // Printing the decrypted value
            console.log("line 56 - ", value.result);
            resolve(value.result);
        };
        // Decoding the QR code
        qrcode.decode(image.bitmap);
    });
});

export default decodeQR;