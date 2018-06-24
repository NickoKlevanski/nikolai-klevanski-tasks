/**
 * Создает матрицу размером n * n и заполняет ее по спирали
 *
 * @param {Number} n - размерность матрицы
 * @returns {Number[n][n]} - n * n - матрица, заполненная по спирали
 */
function fillSpiralMatrix(n) {
  const result = [[]];
  let sizeX = n;
  let sizeY = n;
  const Sum = sizeX * sizeY;
  let CorrectX = 0;
  let CorrectY = 0;
  let Count = 1;

  for (var i = 0; i < sizeX; i++) {
    result[i] = [];
    for (var j = 0; j < sizeY; j++) {
      result[i][j] = 0;
    }
  }

  while (sizeY > 0) {
    for (var y = 0; y < 4; y++) {
      for (var x = 0; x < ((sizeX < sizeY) ? sizeY : sizeX); x++) {
        if (y == 0 && x < sizeX - CorrectX && Count <= Sum) {
          result[y + CorrectY][x + CorrectX] = Count++;
        }
        if (y == 1 && x < sizeY - CorrectY && x != 0 && Count <= Sum) {
          result[x + CorrectY][sizeX - 1] = Count++;
        }
        if (y == 2 && x < sizeX - CorrectX && x != 0 && Count <= Sum) {
          result[sizeY - 1][sizeX - (x + 1)] = Count++;
        }
        if (y == 3 && x < sizeY - (CorrectY + 1) && x != 0 && Count <= Sum) {
          result[sizeY - (x + 1)][CorrectY] = Count++;
        }
      }
    }

    sizeY--;
    sizeX--;
    CorrectY += 1;
    CorrectX += 1;
  }


  return result;
}

export default fillSpiralMatrix;