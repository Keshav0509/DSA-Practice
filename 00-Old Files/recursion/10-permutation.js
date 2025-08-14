/**
 * Generates all permutations of the given array.
 * Works for both number arrays and character arrays (for strings).
 */
export const permutation = (arr) => {
    // Clone the input array to avoid modifying the original
    arr = [...arr];

    // Result array to store all permutations
    const res = [];

    function permute(arr, idx, res) {
        // Base case: If we've fixed every index, push a copy of the array to the result
        if (idx === arr.length) {
            res.push([...arr]); // Use spread to clone the current permutation
            return;
        }

        // Try fixing each element at index `idx`
        for (let i = idx; i < arr.length; i++) {
            // Swap the current index with i to fix a new element at `idx`
            [arr[idx], arr[i]] = [arr[i], arr[idx]];

            // Recurse for the next index
            permute(arr, idx + 1, res);

            // Backtrack: Undo the swap to restore original array state
            [arr[i], arr[idx]] = [arr[idx], arr[i]];
        }
    }

    // Start permutation from index 0
    permute(arr, 0, res);

    // Return all collected permutations
    return res;
};
