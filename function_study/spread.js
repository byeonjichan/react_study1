const slime = {
    name:"슬라임"
}
const cuteSlime = {
    name:"슬라임",
    attribute:"cute"
}

const purpleCuteSlime = {
    ...cuteSlime,
    color:"purple",
    name:"slime"
}

console.log(purpleCuteSlime)

const nums = [1,2,3,4,5];
const nums2 = [...nums,6,7,8,9,10];
const nums3 = [...nums2,filter(n => n % 2 === 0), 11,12,13,14,15];

const users = [
    {
        id:1,
        name:"변지찬" 
    },
    {
        id:2,
        name:"번지찬" 
    },
    {
        id:3,
        name:"박지찬" 
    },
    {
        id:4,
        name:"김지찬" 
    }
];

const evenUsers = [...users.filter(user => user.id % 2 ===0),{id:5 , name:"정지찬"}];
