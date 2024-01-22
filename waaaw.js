function insertionSort(array) {
    let i, j, currentElement;
    for (i = 1; i < array.length; i++) {
      currentElement = array[i];
      j = i - 1;
      while (j >= 0 && array[j] > currentElement) {
        array[j + 1] = array[j];
        j--;
      }
      array[j + 1] = currentElement;
    }
    return array;
  }