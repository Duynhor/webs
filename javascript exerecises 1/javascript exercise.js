// 1, Viết 1 function đảo ngược một số.
// VD: 111722 --> 227111

function reverse(n) {
  let arr = [...n.replace(/^0+/, "")];
  return arr.reverse().join("");
}

console.log(reverse("12345"));
console.log(reverse("012036"));

function reverse2(n) {
  let newn = Number(n).toString();
  let arr = newn.split("").reverse().join("");
  return arr;
}
console.log(reverse2("45678"));
console.log(reverse2("0012356"));

/* Xóa số 0 ở đầu chuỗi
C1:
let nr = "012345"
let newnr = Number(nr).toString()

console.log(newnr)

C2
n = n.replace(/^0=/, "")
*/

/*
2, Write a JavaScript function that accept a list of country names as input and returns the longest country name as output.
Sample function : Longest_Country_Name([“Australia”, “Germany”, “United States of America”])
Expected output : “United States of America”
*/

function getLongestCountryName(countries) {
  let char = 0;
  countries.forEach(function (countries) {
    if (char < countries.length) {
      char = countries.length;
      longest = countries;
    }
  });
  return longest;
}
console.log(getLongestCountryName(["vietnam", "lao", "thailand"]));
console.log(getLongestCountryName(["America", "Canada", "Mexico"]));

/*
3, Write a JavaScript function to extract unique characters from a string.
Example string : “thequickbrownfoxjumpsoverthelazydog”
Expected Output : “thequickbrownfxjmpsvlazydg”
*/

function getUniqueCharInString(str) {
  let arr = [];
  let nstr = str.split("");
  for (let i = 0; i < nstr.length; i++) {
    if (!arr.includes(nstr[i])) {
      arr.push(nstr[i]);
    }
  }
  return arr.join("");
}

console.log(getUniqueCharInString("sdjfhhfhnss"));
console.log(getUniqueCharInString("thequickbrownfoxjumpsoverthelazydog"));

/*
4, There are two arrays with individual values, write a JavaScript program to compute the sum of each individual index value from the given arrays.
Sample array :
array1 = [1,0,2,3,4];
array2 = [3,5,6,7,8,13];
Expected Output :
[4, 5, 8, 10, 12, 13]
*/

function computeSumArray(array1, array2) {
  for (let i1 = 0; i1 < array1.length; i1++) {
    for (let i2 = 0; i2 < array2.length; i2++) {
      if ((i1 = i2)) {
        return array1[i1] + array2[i2];
      }
    }
  }
}

console.log(computeSumArray([1, 0, 2, 3, 4], [3, 5, 6, 7, 8, 13]));

/*
5, Write a JavaScript function to repeat a string a specified times.
Test Data :
console.log(repeat_string(‘a’, 4));
console.log(repeat_string(‘a’));
Output :
“aaaa”
“Error in string or count.”
*/

function repeatString(s, time) {
  if (time > 0) {
    return (s + ",").repeat(time);
  } else {
    return "Error in string or count.";
  }
}
console.log(repeatString("ối dồi ôi", 4));
console.log(repeatString("duychiuroi"))

/* 
Write a JavaScript program to count number of words in string. Go to the editor
Note :
Remove white-space from start and end position.
Convert 2 or more spaces to 1.
Exclude newline with a start spacing.
input: " The quick brown fox "
output: 4
*/

function wordCounter(text) {
  return text.split(" ").filter(function (n) {
    return n != "";
  }).length;
}

console.log(wordCounter("2 3 squids"))