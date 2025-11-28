import chalk from "chalk";

const nota = 8;

if (nota >= 7) {
  console.log(chalk.green.bold("Parabéns, você está aprovado!"));
} else {
  console.log(chalk.bgRed("Você precisa fazer a prova de recuperação!"));
}
