class Controller {
    static async login(req, res) {
        try {
            res.status(200).json({message: "Ini login"})
        } catch(error) {
            res.send(error)
        }
    }
}

module.exports = Controller