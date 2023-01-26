import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    console.log("   REQ BODY", req.body);
    const photo = await Photo.create(req.body);
    res.status(201).json({
        succeded: true,
        photo,
    });
};

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({});
    res.status(200).json({
        succeded: true,
        photos,
    })

}

export { createPhoto, getAllPhotos };