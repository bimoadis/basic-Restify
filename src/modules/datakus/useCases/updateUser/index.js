
const updateUser = async (req, res) => {
    res.send(200, { message: `Succesfully to Update an users with ${req.params.id}` });
}
module.exports.updateUser = updateUser;