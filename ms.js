// [1,2,3,4]

// "ref"

// {Array(3) => true, Array(3) => false}

const hasDuplicate = (arr) => new Set(arr).size !==arr.length;

function containsVowel(i){
    return "aeiou".includes(i);
}

const vowelCount = (str) => {
    let vowels = new Map();
    for( let i of str){
        let lower=i.toLowerCase();
        if(containsVowel(lower)){
            if (vowels.has(lower)){
                vowels.set(lower, vowels.get(lower) +1);
            }else{
                vowels.set(lower, 1);
            }
        }
    }
return vowels;
}