linear search

let num = [22,34,65,76,98,104,21]

let tar = 76

function linearsearch(arr, target ){
    for (let i =0; i<arr.length; i++)
        if (arr[i]==target)
  return i
}
return -1
console.log(linearsearch(nums , tar))