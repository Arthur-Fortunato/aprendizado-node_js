import inquirer from "inquirer";
import chalk from "chalk";

async function main() {
  try {
    const answer = await inquirer.prompt([
      {
        name: "nome",
        message: "Qual o seu nome?",
      },
      {
        name: "idade",
        message: "Qual a sua idade?",
      },
    ]);
    if (!answer.nome || !answer.idade){
        throw new Error("O nome e a idade são obrigatórios!")
    }
    const response = `O nome do usuário é ${answer.nome} e ele tem ${answer.idade} anos.`;
    console.log(chalk.bgYellow.black(response));
  } catch (err) {console.log(err)}
}

// dei uma volta um pouco maior, podia só ter feito:
// inquirer.prompt([
//   {
//     name: "nome",
//     message: "Qual o seu nome?",
//   },
//   {
//     name: "idade",
//     message: "Qual a sua idade?",
//   }
// ]).then((answer) => {
//     if(!answer.nome || !answer.idade){
//         throw new Error("O nome e a idade são obrigatórios!")
//     }
//     const response = `O nome do usuário é ${answer.nome} e ele tem ${answer.idade} anos.`;
//     console.log(chalk.bgYellow.black(response));
// }).catch((err) => {console.log(err)})

main();
