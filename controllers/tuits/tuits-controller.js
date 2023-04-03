import posts from "./tuits.js";

let tuits = posts;

const currentUser = {
    "userName": "NASA",
    "handle": "@nasa",
    "image": "nasa-logo.jpg",
};

const templateTuit = {
    ...currentUser,
    "topic": "Space",
    "time": "2h",
    "liked": false,
    "disliked": false,
    "replies": 0,
    "retuits": 0,
    "likes": 0,
    "dislikes": 0,
}

const createTuit = (req, res) => {
    let newTuit = req.body;
    newTuit._id = (new Date()).getTime();
    newTuit = {
        ...templateTuit,
        ...newTuit
    }
    tuits.unshift(newTuit);
    res.json(newTuit);
}

const findTuits  = (req, res) => res.json(tuits);

const updateTuit = (req, res) => {
    const tuitIdToUpdate = req.params.tid;
    const updates = req.body;
    const tuitsIndex = tuits.findIndex(tuit => tuit._id === parseInt(tuitIdToUpdate));
    tuits[tuitsIndex] = {
        ...tuits[tuitsIndex],
        ...updates
    };
    res.sendStatus(200);
}

const deleteTuit = (req, res) => {
    const tuitIdToDelete = req.params['tid'];
    tuits = tuits.filter(tuit => tuit._id !== parseInt(tuitIdToDelete));
    res.sendStatus(200);
}

export default (app) => {
    app.post('/api/tuits', createTuit);
    app.get('/api/tuits', findTuits);
    app.put('/api/tuits/:tid', updateTuit);
    app.delete('/api/tuits/:tid', deleteTuit);
}
