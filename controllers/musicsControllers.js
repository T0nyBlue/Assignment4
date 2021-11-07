const Musics = require('../models/music');

//Get Musics List
exports.getMusicsList = async (req, res) => {
    try {
        const musics = await Musics.find();
        res.status(200).json(musics);
    }catch(err) {
        res.status(500).json({ message:err });
    };
};

//Create Music
exports.createMusic = async (req, res) => {
    const music = new Musics({
        SongName: req.body.SongName,
        Author: req.body.Author,
        Singer: req.body.Singer
    });
    try {
        const savedMusic = await music.save();
        res.status(200).json(savedMusic);
    }catch(err) {
        res.status(500).json({ message:err });
    };
};

//Get Music by Id
exports.getMusic = async (req,res) =>{
    try{
        const music = await Musics.findById(req.params.musicId);
        res.status(200).json(music);
    }catch(err) {
        res.status(500).json({ message:err });
    };
};

//Update Music by Id
exports.updateMusic = async (req,res) =>{
    try{
        const updatedmusic = await Musics.updateOne(
            { _id: req.params.musicId },
            { $set: { 
                SongName: req.body.SongName,
                Author: req.body.Author,
                Singer: req.body.Singer
            }}
        );
        res.status(200).json(updatedmusic);
    }catch(err) {
        res.status(500).json({ message:err });
    };
};

//Remove Music by Id
exports.removeMusic = async (req,res) =>{
    try{
        const removeMusic = await Musics.remove({ _id: req.params.musicId });
        res.status(200).json(removeMusic);
    }catch(err) {
        res.status(500).json({ message:err });
    };
};