
const getUserById = async (req, res) => {
    res.send(200, { message: `Succesfully to get user an users with ${req.params.id}` });
}
module.exports.getUserById = getUserById;