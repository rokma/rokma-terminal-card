#!/usr/bin/env node

import chalk from "chalk";
import boxen from "boxen";

// Custom lime and soft green
const lime = chalk.hex("#00FF00");
const softGreen = chalk.hex("#99ff99");

// ASCII banner
const ascii = lime(`
██████╗  ██████╗ ██╗  ██╗███╗   ███╗ █████╗
██╔══██╗██╔═══██╗██║ ██╔╝████╗ ████║██╔══██╗
██████╔╝██║   ██║█████╔╝ ██╔████╔██║███████║
██╔══██╗██║   ██║██╔═██╗ ██║╚██╔╝██║██╔══██║
██║  ██║╚██████╔╝██║  ██╗██║ ╚═╝ ██║██║  ██║
╚═╝  ╚═╝ ╚═════╝ ╚═╝  ╚═╝╚═╝     ╚═╝╚═╝  ╚═╝
`);

const data = {
  labelTLDR: softGreen.bold("TLDR      :"),
  labelWEB: softGreen.bold("WEB       :"),
  labelMAIL: softGreen.bold("MAIL      :"),
  labelX: softGreen.bold("X         :"),
  tldr: lime("https://rokma.rocks"),
  web: lime("https://rokma.com"),
  mail: lime("me@rokma.com"),
  x: lime("@rokmatwit"),
};

const newline = "\n";

const info = [
  `${data.labelTLDR} ${data.tldr}`,
  `${data.labelWEB} ${data.web}`,
  `${data.labelMAIL} ${data.mail}`,
  `${data.labelX} ${data.x}`,
].join(newline);

const output = ascii + newline + newline + info;

console.log(
  boxen(output, {
    padding: 1,
    margin: 1,
    borderStyle: "round",
    borderColor: "#00FF00",
    backgroundColor: "black",
  }),
);
