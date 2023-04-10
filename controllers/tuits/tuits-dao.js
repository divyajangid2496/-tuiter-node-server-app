import tuitsModel from "./tuits-model.js";

// document: mongodb CRUD operations
// sort tuits by id in order to display the tuits in reverse order, the edited one stay at the front
export const findTuits = () => tuitsModel.find().sort( {_id:-1} );
export const createTuit = (tuit) => tuitsModel.create(tuit);
export const deleteTuit = (tid) => tuitsModel.deleteOne({_id: tid})
export const updateTuit = (tid, tuit) => tuitsModel.updateOne( {_id: tid}, {$set: tuit})