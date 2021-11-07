const mongoose = require('mongoose');

const musicSchema = mongoose.Schema({
    SongName: {
        type: 'string',
        required: true
    },
    Author: {
        type: 'string',
        required: true
    },
    Singer: {
        type: 'string',
        required: true
    },
    CreateDate: {
        type: 'date',
        default: Date.now
    }
});

module.exports = mongoose.model('Musics', musicSchema);