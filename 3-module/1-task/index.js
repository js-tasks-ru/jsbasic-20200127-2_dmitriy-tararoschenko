/**
 * showSalary
 * @param {Array} data - данные о пользователях
 * @param {number} age - максимальный возраст
 * @returns {string}
 */
function showSalary(data, age) {
  let result = '';
  for (let user of data) {
    if (user.age <= age) {
      result += (user.name + ', ' + user.balance + '\n');
    }
  }

  return result.slice(0, -1);
}
