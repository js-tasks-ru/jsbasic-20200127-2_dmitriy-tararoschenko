/**
 * @param {HTMLTableElement} table
 * @return {void}
 */
function makeDiagonalRed(table) {

  for (let i = 0; i < table.rows.length; i++) {
    const row = table.rows[i];
    row.cells[i].style.backgroundColor = 'red';
  }

}
