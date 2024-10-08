const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require('multer-storage-cloudinary');

cloudinary.config({
    cloud_name: 'dkhjhx3mx',
    api_key: '854684556544385',
    api_secret: '3WowO7RV9Q-wGZ56Fa9Gxpkbdh8'
});


// let uploadImage = (path) => {
//     return cloudinary.uploader.upload(path,
//         { public_id: "BhagvatGita" },
//         function (error, result) { return result });
// }

const storage = new CloudinaryStorage({
    cloudinary: cloudinary,
    params: {
        folder: 'library_books',
    },
});



module.exports = storage;