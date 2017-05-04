export default class InsertSort {
    sort(unsortedArray: number[]) {
        let sortedArray = []
        let element
        while (element = unsortedArray.shift()) {
            let found = false
            let tmpSortedArray = []
            do {
                let sortedElement
                sortedElement = sortedArray.pop()
                if (sortedElement > element && typeof sortedElement !== 'undefined') {
                    tmpSortedArray.unshift(sortedElement)
                } else {
                    if (typeof sortedElement !== 'undefined') {
                        sortedArray.push(sortedElement)
                    }
                    sortedArray.push(element)
                    sortedArray = sortedArray.concat(tmpSortedArray)
                    found = true
                }
            } while (!found)
        }
        return sortedArray
    }
}