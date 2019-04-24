const { User } = require('../models')

class UserController {
  create (req, res) {
    return res.render('auth/signup')
  }

  async store (req, res) {
<<<<<<< HEAD
    const { filename } = req.file

    await User.create({ ...req.body, avatar: filename })
=======
    req.body.avatar = 'teste.jpg'

    await User.create(req.body)
>>>>>>> d8e879b86f6ad80153289d1f4e39df56d1ccc2bc
    return res.redirect('/')
  }
}

module.exports = new UserController()
