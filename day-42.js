// Two Sum https://leetcode.com/problems/two-sum/

const twoSum = function(nums, target) {
    for (let i = 0; i < nums.length; i++) {
        for (let b = 0; b < nums.length; b++) {
            if (i === b) b++;
            if (nums[i] + nums[b] === target) return [i, b];
        }
    }
};
