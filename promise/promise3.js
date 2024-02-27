main();

function main() {
    let result =[];

    new Promise((resolve , reject) => {
        setTimeout(()=> resolve(1), 3000)
        }).then(num=> {
            result = [...result , num];

        new Promise((resolve , reject) => {
            setTimeout(()=> resolve(2), 2000)
        }).then(num => {
            result = [...result , num];

        new Promise((resolve , reject) => {
            setTimeout(()=> resolve(3), 1000)
        }).then(num => { 
            result = [...result , num];

        return result;

        }).then(r => console.log(r));

    });

});
}
    