import Photo from "../models/photoModel.js";

const createPhoto = async (req, res) => {
    const photo = await Photo.create(req.body);
    res.status(201).json({
        succeded: true,
        photo,
    });
};

const getAllPhotos = async (req, res) => {
    const photos = await Photo.find({});
    res.status(200).render('photos.ejs', {
        photos,
        link: "photos",
    });

}

const getOnePhoto = async (req, res) => {
    try {
        const photo = await Photo.findById({ _id: req.params.id });
        res.status(200).render('photo.ejs', {
            photo,
            link: "photos",
        });
    } catch (err) {
        res.status(500).json({
            succeded: false,
            err
        })

    }
}
export { createPhoto, getAllPhotos, getOnePhoto };