//* Change Javascript Object value in json Formatte

const Studentid = {
     name:'Abdullah',
     age:15,
     Gender:'Male',
     Phone:345345
}

let ans = JSON.stringify(Studentid);
console.log(ans)

//* Change Json Formatte value in javascript  object formatte

const studentid2 = '{"name":"Abdullah","age":15,"Gender":"Male","Phone":345345}'

let ans2 = JSON.parse(studentid2)
console.log(ans2)