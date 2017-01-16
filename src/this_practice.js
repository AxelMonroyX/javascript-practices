var name = 'Axel';
var person = {
  name: 'Alfredo',
  withThis: function () {
    return this.name;
  },
  withoutThis: function () {
    return name;
  }
};

module.exports.withThis = person.withThis();
module.exports.withoutThis = person.withoutThis();
