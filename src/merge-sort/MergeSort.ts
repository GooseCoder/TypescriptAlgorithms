export default class MergeSort {

    sort(unsortedArray: number[]) {
        return this.splitMerge(unsortedArray)
    }

    splitMerge(complete) {
        if (complete.length < 2) {
            return complete;
        }
        let middle = Math.floor(complete.length / 2),
            left    = complete.slice(0, middle),
            right   = complete.slice(middle);
        return this.merge(this.splitMerge(left), this.splitMerge(right));
    }

    merge(left, right){
        const result  = []
        let il      = 0,
            ir      = 0
        while (il < left.length && ir < right.length){
            if (left[il] < right[ir]){
                result.push(left[il]);
                il++
            } else {
                result.push(right[ir]);
                ir++
            }
        }
        return result.concat(left.slice(il)).concat(right.slice(ir));
    }
}