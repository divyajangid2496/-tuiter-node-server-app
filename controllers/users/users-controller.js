import people from './users.js'

let users = people

// The user controller below will implement several HTTP endpoints to create, read, update, and delete users.
// use express instance app to declare HTTP GET request pattern /api/users to call a function
const UserController = (app) => {
    // map path pattern ('/api/users') to handler function (findUsers)
    // requesting data from a server
    app.get('/api/users', findUsers)

    // The colon (:) followed by uid declares a placeholder that matches any literal string.
    // The actual value in the placeholder can be retrieved using uid as a key into the request's params map.
    app.get('/api/users/:uid', findUserById);

    app.post('/api/users', createUser);

    app.delete('/api/users/:uid', deleteUser);

    app.put('/api/users/:uid', updateUser);
}

// responds with array of users
const findUsers = (req, res) => {
    // send data to server as querying string parameters, path parameters, or in the request body
    // query string parameters encoded at the end of a URL after a question mark (?).
    // Query string parameters are name value pairs separated by ampersands (&).
    // retrieve type parameter from query
    // test with http://localhost:4000/api/users?type=STUDENT
    const type = req.query.type
    // const type = req.query['type']
    if(type) {
        // if type parameter in query find users of that type
        const usersOfType = users.filter(u => u.type === type)
        // respond with users of that type
        res.json(usersOfType)
        // return so it doesn't continue
        return
    }
    // send data in a json format
    res.json(users)
    // // send data in string format
    // res.send(users)
}

const findUserById = (req, res) => {
    // get uid from request parameter map
    const userId = req.params.uid;
    // const userId = req.params['uid'];
    // find user in users array whose _id matches userId retrieved from params
    const user = users.find(u => u._id === userId);
    res.json(user);
}

const createUser = (req, res) => {
    const newUser = req.body;
    // add an _id property with unique timestamp
    newUser._id = (new Date()).getTime() + '';
    users.push(newUser);
    res.json(newUser);
}

const deleteUser = (req, res) => {
    const userId = req.params['uid'];
    users = users.filter(usr => usr._id !== userId);
    // respond with success code, 200 represents ok, 404 (not found), 201 (created), 503 (server unreachable)
    // sending HTTP request status with the client
    res.sendStatus(200);
}

const updateUser = (req, res) => {
    const userId = req.params['uid'];
    const updates = req.body;
    users = users.map((usr) =>
        usr._id === userId ? {...usr, ...updates} : usr
    );
    res.sendStatus(200);
}




export default UserController