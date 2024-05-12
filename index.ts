import inquirer from 'inquirer';

const stuID = Math.floor(Math.random() * 100000)
let condition = true

while (condition) {

    let stuName = await inquirer.prompt([
        {
            name: "name",
            type: "input",
            message: "What is your name ?",
            validate: (name) => {
                if (name.trim() != "") {
                    return true;
                }
                console.log("Please Enter Your Name!")
            }
        },
        {
            name: "courses",
            type: "list",
            message: "Which courses do you want to Buy",
            choices: ["HTML", "JavaScript", "TypeScript", "Reactjs", "Nextjs", "Nodejs", "Python"]
        }
    ]);

    let CourseFee: { [key: string]: number } = {

        HTML: 3000,
        JavaScript: 5000,
        TypeScript: 7000,
        Reactjs: 9000,
        Nextjs: 10000,
        Nodejs: 12000,
        Python: 12000
    }
    let pymentMethod = await inquirer.prompt([{
        name: "pyment",
        type: 'list',
        message: "Which Pyment Method You want to use for buying this Courses?",
        choices: ["Bank", "CraditCard", "EasyPaisa", "JazzCash"]
    }])
    if (pymentMethod.choices === pymentMethod.choices) {
        let balance = 50000;
        console.log(` \n Your ${pymentMethod.pyment} Balance is: ${balance}`);
        console.log(` ${stuName.courses} Cource Fee is: ${CourseFee[stuName.courses]} \n`)

        let pymentTransfar = await inquirer.prompt([{
            name: "pyment",
            type: 'input',
            message: "Enter Your Amount for Course"
        }])


        if (pymentTransfar.pyment != CourseFee[stuName.courses]) {
            console.log(`Please Enter Fix Amount for Course`)
        }
        else {
            console.log(`\nCongratulation Your Purchased ${stuName.courses} Course \n `)
            console.log(`Now Your Balance is ${balance - pymentTransfar.pyment} \n`)

            let detail = await inquirer.prompt([{
                name: "select",
                type: "list",
                message: "Next Step What Would you like to do?",
                choices: ["status", "exit"]
            }])
            if (detail.select === "status") {
                console.log("****************************")
                console.log(`\n    Student Name: ${stuName.name}`)
                console.log(`    Student id: ${stuID}`)
                console.log(`    Course: ${stuName.courses}`)
                console.log(`    Course Fee: ${pymentTransfar.pyment} \n`)
            }

        }
    }

    let anotherCourse = await inquirer.prompt([{
        name: 'AnotherCourse',
        type: "confirm",
        message: 'Do you want to Purchase Another Course??',
        default: false
    }])

    condition = anotherCourse.AnotherCourse
}