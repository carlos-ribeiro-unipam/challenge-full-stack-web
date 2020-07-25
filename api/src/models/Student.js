const { Model, Sequelize } = require('sequelize')

class Student extends Model {
  static init(sequelize) {
    super.init(
      {
        enrollment_id: Sequelize.INTEGER,
        name: Sequelize.STRING,
        email: Sequelize.STRING,
        cpf: Sequelize.STRING
      }, { sequelize }
    )
  }
}

module.exports = Student