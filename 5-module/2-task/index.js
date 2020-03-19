/**
 * Компонент, который реализует сортируемую таблицу
 * @param {Array} items - данные, которые нужно отобразить
 *
 * Пример одного элемента, описывающего строку таблицы
 *
 *      {
 *          name: 'Ilia',
 *          age: 25,
 *          salary: '1000',
 *          city: 'Petrozavodsk'
 *      },
 *
 * @constructor
 */
class SortableTable {

  constructor(rows) {
    this.el = document.createElement('table');
    this.el.innerHTML = `<thead>
                                <tr>
                                  <td>Name</td>
                                  <td>Age</td>
                                  <td>Salary</td>
                                  <td>City</td>
                                </tr>
                              </thead>
                              <tbody></tbody>`;

    let tbody = this.el.querySelector('tbody');

    for (let row of rows) {
      let tr = document.createElement('tr');

      for (const key in row) {
        tr.innerHTML += `<td>${row[key]}</td>`;
      }
      tbody.append(tr);
    }
  }

  sort(column, desc = false) {
    let tbody = this.el.querySelector('tbody');
    let rowsForSort = Array.from(tbody.rows);

    if (desc) {
      rowsForSort.sort((a, b) => {
        a = a.cells[column].innerHTML;
        b = b.cells[column].innerHTML;
        if (b > a) return 1;
        if (b == a) return 0;
        if (b < a) return -1;
      });
    } else {
      rowsForSort.sort((a, b) => {
        a = a.cells[column].innerHTML;
        b = b.cells[column].innerHTML;
        if (a > b) return 1;
        if (a == b) return 0;
        if (a < b) return -1;
      });
    }

    for (let row of rowsForSort) {
      tbody.append(row);
    }

  };

}
