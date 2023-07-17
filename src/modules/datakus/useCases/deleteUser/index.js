
const deleteUser = async (req, res) => {
    res.send(200, { message: `Succesfully to delete an users with ${req.params.id}` });
}
module.exports.deleteUser = deleteUser;