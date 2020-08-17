var rotate=function(nums, k)
{
    for(var i=0; i<k; i++)
        {
            var pop=nums.pop();
            nums.unshift(pop);
        }
    return nums;
}
console.log(rotate([3,99,-1,-100],2));