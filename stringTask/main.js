// String Task
let fullName = " Bushra Abdel-Salam Abdel-Rahim Qaweqji ";
document.writeln(
  `<span style="color : blue";>Your name without spaces:</span> ${fullName.trim()} </br>`
);
document.writeln(
  `<span style="color : blue";>Your name without start spaces:</span> ${fullName.trimStart()} </br>`
);
document.writeln(
  `<span style="color : blue";>Your name without end spaces:</span> ${fullName.trimEnd()} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);

fullName = fullName.trim();
document.writeln(`
    <span style="color : blue";>Your name starts with the letter:</span> ${fullName.charAt(
      0
    )} and the ASCII for this letter is ${fullName.charCodeAt(0)} </br>
  `);
document.writeln(
  `<span style="color : blue";>your name length is</span> ${fullName.length} </br>`
);
fullName = fullName.toLowerCase();
document.writeln(
  `<span style="color : blue";>your name starts with 'a' ?</span> ${fullName.startsWith(
    "abd"
  )} </br>`
);
document.writeln(
  `<span style="color : blue";>your name ends with 'i' ?</span> ${fullName.endsWith(
    "qaweqji"
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
fullName = fullName.toUpperCase();
document.writeln(
  `<span style="color : red";> ${fullName.concat(
    " Loves Orange Codeing School"
  )}</br> </span>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
fullName = fullName.toLowerCase();
document.writeln(
  `<span style="color : purple";>the index of letter e in your name is </span>:${fullName.indexOf(
    "abdel-salam"
  )} </br>`
);
document.writeln(
  `<span style="color : purple";>the last index of letter a in your name is :</span>${fullName.lastIndexOf(
    "qaweqji"
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
document.writeln(
  `<span style="color : green";>Your name is consists of: </span>${fullName.split(
    " "
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
document.writeln(
  `<span style="color : green";>Your name replaced Qaweqji with Naji Qaweqji: </span>${fullName.replace(
    "qaweqji",
    "Naji Qaweqji"
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
document.writeln(
  `<span style="color : purple";>Slice of your name: </span>${fullName.slice(
    7,
    18
  )} </br>`
);
document.writeln(
  `<span style="color : purple";>Slice of your name: </span>${fullName.includes(
    "abdel-rahim"
  )} </br>`
);
document.writeln(
  `<span style="color : purple";>sh in your name: </span>${fullName.search(
    "sh"
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
document.writeln(
  `<span style="color : brown";>Replace Abdel- with Abdel </span>${fullName.replaceAll(
    "abdel-",
    "Abdel"
  )} </br>`
);
document.writeln(
  `<span style="color : brown">Padding Start </span>${fullName.padStart(
    70,
    "_"
  )} </br>`
);
document.writeln(
  `<span style="color : brown">Padding End </span>${fullName.padEnd(
    70,
    "_"
  )} </br>`
);
document.writeln(
  `---------------------------------------------------------------</br>`
);
document.writeln(fullName.match(/abdel/i) + "</br>");
document.writeln([...fullName.matchAll(/abdel/gi)] + "</br>");
document.writeln(fullName.substring(7, 22) + "</br>");
document.writeln(fullName.substr(7, 22) + "</br>");
