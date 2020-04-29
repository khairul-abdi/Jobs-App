module.exports = (sequelize, Sequelize) => {
  const Form = sequelize.define("form", {
    email: {
      type: Sequelize.STRING
    },
    fullname: {
      type: Sequelize.STRING
    },
    phone: {
      type: Sequelize.STRING
    },
    letter: {
      type: Sequelize.STRING
    }
  });

  return Form;
};