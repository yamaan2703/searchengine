var array = [
    {
        rollNum: "13980",
        name: "Yamaan",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13981",
        name: "saim",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13982",
        name: "Ali",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13983",
        name: "Saif",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13984",
        name: "Saad",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13985",
        name: "Aymen",
        course: "web and Mob",
        age: 18
    },
    {
        rollNum: "13986",
        name: "Saif",
        course: "web and Mob",
        age: 18
    }
]
var inp = document.getElementById("inp")
var show = document.getElementById("out1")
function result() {
    for (var i = 0; i < array.length; i++) {

        if (inp.value == array[i].rollNum) {
            console.log(array[i])
            document.getElementById("name").innerText = array[i].name
            document.getElementById("age").innerText =array[i].age
            document.getElementById("rollno").innerText = array[i].rollNum
            document.getElementById("course").innerText = array[i].course
        }
    }
}
                                                                                                                                                                                                                                     