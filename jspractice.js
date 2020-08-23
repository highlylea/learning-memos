//2020-08-24
//vanillajspractice

//array
const membersOfAOAS = ["산", "설", "준", "스쿠바", "조제"]
console.log(membersOfAOAS); //전체 출력 
console.log(membersOfAOAS[0]); //0번째 값 출력

//objects
const sanInfo = {
    name: "san",
    age: 24,
    isStudyingJs: true,
    favMovies: ["Amelie", "Parasite", "Grass", "and many more"], //array here! 
    favFruit: [
        {
            name: "Watermelon",
            isYellow: false
        },
        {
            name: "Banana",
            isYellow: true
        }
    ],
}
//{} 안의 값 - 변수 등을 변경하는 건 문제 없음 
//can put array in objects 
console.log(sanInfo);







