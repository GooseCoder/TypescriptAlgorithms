import { expect } from 'chai';
import MergeSort from "./MergeSort";
// if you used the '@types/mocha' method to install mocha type definitions, uncomment the following line
// import 'mocha';

describe('Merge Sort', () => {
    it('should return a sorted array', () => {
        const sorter = new MergeSort()
        const result = sorter.sort([90, 2, 6, 34, 23, 17, 55, 33, 99])
        expect(result).to.eql([2, 6, 17, 23, 33, 34, 55, 90, 99])
    });

    it('should sort a large array', () => {
        const sorter = new MergeSort()
        const result = sorter.sort([90, 10, 2, 6, 89, 34, 22, 23, 17, 55, 33, 21, 99, 1, 102, 45, 3, 11, 5, 68])
        expect(result).to.eql([1, 2, 3, 5, 6, 10, 11, 17, 21, 22, 23, 33, 34, 45, 55, 68, 89, 90, 99, 102])
    });

    it('should sort a short array', () => {
        const sorter = new MergeSort()
        const result = sorter.sort([10, 7 ,8])
        expect(result).to.eql([7, 8, 10])
    });
});