// while(true) 
// {
//     let namn = prompt("Ange ditt namn:");
//     let lösenord = prompt("Ange ditt lösenord:");

//     if (namn == "alex" && lösenord == "12345")
//     {
//         document.writeln("Du har loggat in!");
//         break;
//     }
//     else
//     {
//         document.writeln("Namnet eller lösenordet är fel!");
//     }
// }
// let ålder = prompt("Vad är din ålder?:");
// document.writeln(`Hej ${namn} du är ${ålder}`);

let tal = prompt("Skriv in ett heltal i mellan 5 och 10");
while(true)
{
    if(5 < Number(tal) < 10)
        {
            document.writeln("Ditt nummer är " + tal);
            break;
        }
    else 
        {
            document.writeln("Skriv ett nummer i mellan 5 och 10");
        }
            
}