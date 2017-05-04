export default class QuickSort {

    sort(unsortedArray: number[]) {
        return this.quickSort(unsortedArray, 0, unsortedArray.length - 1)
    }

    swap(items, firstIndex, secondIndex){
        let temp = items[firstIndex];
        items[firstIndex] = items[secondIndex];
        items[secondIndex] = temp;
    }

    partition(items, left, right) {
        let pivot   = items[Math.floor((right + left) / 2)],
            i       = left,
            j       = right;

        while (i <= j) {
            while (items[i] < pivot) {
                i++;
            }

            while (items[j] > pivot) {
                j--;
            }

            if (i <= j) {
                this.swap(items, i, j);
                i++;
                j--;
            }
        }

        return i;
    }

    quickSort(items, left, right) {
        let index;

        if (items.length > 1) {
            index = this.partition(items, left, right);

            if (left < index - 1) {
                this.quickSort(items, left, index - 1);
            }

            if (index < right) {
                this.quickSort(items, index, right);
            }
        }
        return items;
    }
}