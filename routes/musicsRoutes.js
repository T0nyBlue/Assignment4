module.exports = (router) => {
    const musicsControllers = require('../controllers/musicsControllers.js');
    router
        .route('/musics')
        .get(musicsControllers.getMusicsList)
        .post(musicsControllers.createMusic);
    
    router
        .route('/musics/:musicId',)
        .get(musicsControllers.getMusic)
        .patch(musicsControllers.updateMusic)
        .delete(musicsControllers.removeMusic);
};


