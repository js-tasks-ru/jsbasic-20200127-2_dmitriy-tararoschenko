/**
 * Метод устанавливает необходимые по условию аттрибуты таблице
 * @param {Element} table
 */
function highlight(table) {

  let rows = table.querySelectorAll('tbody tr');

  for (let row of rows) {

    let status = row.cells[3].dataset.available;

    if (status === 'true') {
      row.classList.add('available');
    } else if (status === 'false') {
      row.classList.add('unavailable');
    } else {
      row.setAttribute('hidden', 'true');
    }

    let genderValue = row.cells[2].innerHTML;

    if (genderValue == 'm') {
      row.classList.add('male');
    } else if (genderValue == 'f') {
      row.classList.add('female');
    }

    let ageValue = row.cells[1].innerHTML;

    if (ageValue < 18) {
      row.style.textDecoration = 'line-through';
    }

  }
}
