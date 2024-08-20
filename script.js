const container = document.getElementById('questions-container');

// const questions = [
//     ["Který svátek slaví Češi i lidé po celém světě 8. března?", "Den matek.", "Den učitelů.", "Mezinárodní den žen.", "Mezinárodní den dětí.", 3], // 1
//     ["Kterou přílohu tradičně jedí Češi ke smaženému kaprovi v mnoha domácnostech na Štědrý večer?", "Rýži.", "Těstoviny.", "Bramborový salát.", "Houskové knedlíky.", 3],
//     ["Kraslice je vejce, které se barví a zdobí. Kdy ženy a dívky dávají mužům kraslice?", "Na Dušičky.", "Na Nový rok.", "Na Štědrý den.", "Na Štědrý den.", 4],
//     ["Který státní svátek se slaví v České republice na podzim?", "Den obnovy samostatného českého státu.", "Den boje za svobodu a demokracii.", "Den upálení mistra Jana Husa.", "Den vítězství.", 2],
//     ["Velký pátek je svátek, který připomíná smrt Ježíše Krista. Ke kterému svátečnímu období patří Velký pátek?", "K Velikonocům.", "K Dušičkám.", "K Vánocům.", "K adventu.", 1], // 5
//     ["Památce zesnulých se v Česku lidově říká Dušičky. Je to den, kdy se podle české tradice zdobí hroby květinami, rozsvěcují se svíčky a vzpomíná se na zemřelé. Ve kterém období se slaví tento svátek?", "Na jaře.", "V létě.", "Na podzim.", "V zimě.", 3],
//     ["Den české státnosti je také svátkem svatého Václava. Kníže Václav z rodu Přemyslovců je patronem Čech a Moravy. Kdy se slaví Den české státnosti?", "V září.", "V říjnu.", "V dubnu.", "V květnu.", 1],
//     ["Který den si Češi obyčejně dávají vánoční dárky?", "6. ledna.", "24. prosince.", "25. prosince.", "26. prosince.", 2],
//     ["Kdo podle tradice nosí v Česku na Vánoce dárky?", "Mrazík.", "Ježíšek.", "Mikuláš.", "Santa Klaus.", 2],
//     ["Který svátek ukončuje období Vánoc?", "Dušičky.", "Jízda králů.", "Tři králové.", "Svátek sv. Valentýna.", 3], // 10

//     ["Při jízdě osobním autem mají řidič a spolujezdci podle zákona určité povinnosti. Co musí řidič a spolujezdec dodržovat?", "Musí mít zapnuté pásy.", "Musí mít zavřená přední okna.", "Musí mít zamčené přední dveře.", "Musí mít na sobě reflexní vesty.", 1], // 1
//     ["Paní Svobodová jezdí na kole do práce. Ve které situaci porušuje pravidla silničního provozu?", "Jede na kole po chodníku.", "Jede na kole po pravé straně silnice.", "Jede na kole v řadě za svou kolegyní.", "Jede na kole a dává rukou znamení o změně směru jízdy.", 1],
//     ["Pan Svoboda chce řídit osobní automobil. Který typ řidičského průkazu potřebuje?", "Řidičský průkaz skupiny A.", "Řidičský průkaz skupiny B.", "Řidičský průkaz skupiny C.", "Řidičský průkaz skupiny D.", 2],
//     ["Kolik piv s obsahem alkoholu může vypít řidič podle zákona při řízení auta v Česku?", "Tři.", "Dvě.", "Jedno.", "Žádné.", 4],
//     ["Který dopravní prostředek má přednost před chodcem na přechodu?", "Auto.", "Tramvaj.", "Autobus.", "Motocykl.", 2], // 5
//     ["Paní Svobodová si koupila nový automobil. Které pojištění musí podle zákona uzavřít?", "Povinné ručení.", "Životní pojištění.", "Úrazové pojištění.", "Havarijní pojištění.", 1],
//     ["Kdo má povinnost nosit podle zákona oblečení s reflexními prvky?", "Osoba, která jde v noci v obci po chodníku.", "Osoba, která jde ve dne v obci po chodníku.", "Osoba, která jde v noci mimo obec po silnici.", "Osoba, která jde ve dne mimo obec po silnici.", 3],
//     ["Jak musí cestovat v autě dítě menší než 150 cm?", "Dítě musí sedět na klíně dospělé osoby.", "Dítě musí sedět volně na zadním sedadle.", "Dítě musí sedět volně na předním sedadle.", "Dítě musí sedět připoutané v dětské autosedačce.", 4],
//     ["Od kolika let mohou jezdit děti po silnici na kole bez dohledu další osoby?", "Od 3 let.", "Od 6 let.", "Od 10 let.", "Od 18 let.", 3],
//     ["Která z uvedených věcí patří k povinné výbavě osobního automobilu?", "Rádio.", "Lékárnička.", "Destilovaná voda.", "Nádoba na benzin.", 2], // 10
    
//     ["1. Paní Novotná vidí požár. Chce zavolat hasiče. Na které z těchto telefonních čísel zavolá?", "150.", "155.", "156.", "158.", 1], // 1
//     ["Které telefonní číslo má zdravotnická záchranná služba?", "150.", "155.", "156.", "158.", 2],
//     ["Paní Svobodová není spokojená se svou zdravotní pojišťovnou. Jak často může změnit zdravotní pojišťovnu?", "Jednou za měsíc.", "Jednou za 3 měsíce.", "Jednou za 6 měsíců.", "Jednou za 12 měsíců.", 4],
//     ["Pan Novák je nemocný. Omylem si smazal SMS s receptem na předepsané léky. Který doklad může pan Novák v lékárně předložit, aby dostal předepsané léky?", "Rodný list.", "Řidičský průkaz.", "Očkovací průkaz.", "Občanský průkaz.", 4],
//     ["Která instituce nepatří do integrovaného záchranného systému?", "Vláda České republiky.", "Policie České republiky.", "Hasičský záchranný sbor.", "Zdravotnická záchranná služba.", 1], // 5
//     ["Které telefonní číslo má jednotný záchranný systém (hasiči, policie, zdravotnická záchranná služba) ve všech státech Evropské unie?", "112.", "150.", "911.", "999.", 1],
//     ["Od roku 2020 vystavují lékaři v České republice pouze elektronické neschopenky (doklad o pracovní neschopnosti). Které instituci lékař posílá elektronickou neschopenku?", "Zdravotní pojišťovně.", "Ministerstvu zdravotnictví.", "Okresní hygienické stanici.", "Okresní správě sociálního zabezpečení.", 4],
//     ["Pan Novák viděl dopravní nehodu. Chce volat Policii České republiky. Které telefonní číslo použije?", "150.", "155.", "156.", "158.", 4],
//     ["Pan Novotný je občanem České republiky, je nezaměstnaný a je registrovaný na úřadu práce jako uchazeč o zaměstnání. Kdo platí jeho povinné zdravotní pojištění?", "Stát.", "Finanční úřad.", "Platí si ho sám.", "Jeho poslední zaměstnavatel.", 1],
//     ["Pan Svoboda ztratil průkaz pojištěnce zdravotní pojišťovny. Do kolika dnů musí nahlásit ztrátu zdravotní pojišťovně?", "Do jednoho dne.", "Do osmi dnů.", "Do třiceti dnů.", "Do šedesáti dnů.", 2], // 10

//     ["Z čeho se skládá jednotná přijímací zkouška na střední školy?", "Z českého jazyka a dějepisu.", "Z českého jazyka a zeměpisu.", "Z českého jazyka a matematiky.", "Z českého jazyka a anglického jazyka.", 3], // 1
//     ["Která z těchto institucí poskytuje předškolní vzdělávání pro děti?", "Gymnázium.", "Mateřská škola.", "Střední odborná škola.", "Základní umělecká škola.", 2],
//     ["Kolik let trvá v České republice povinná školní docházka?", "5 let.", "9 let.", "12 let.", "15 let.", 2],
//     ["Kdy mají žáci základních a středních škol v České republice hlavní prázdniny?", "V září a v říjnu.", "V únoru a v březnu.", "V dubnu a v květnu.", "V červenci a v srpnu.", 4],
//     ["Dcera paní Svobodové ukončila studium státní závěrečnou zkouškou a obhájila diplomovou práci. Kterou školu právě ukončila?", "Gymnázium.", "Vysokou školu.", "Obchodní akademii.", "Střední průmyslovou školu.", 2], // 5
//     ["Manželé Svobodovi mají čtyři děti. Aleně jsou 4 roky, Janovi 10 let, Ivanovi 19 let a Tereze je 21 let. Které z jejich dětí má povinnou školní docházku?", "Jan.", "Ivan.", "Alena.", "Tereza.", 1],
//     ["Jana Svobodová vystudovala na lékařské fakultě tříletý obor Všeobecná sestra. Který vysokoškolský titul získala?", "Bc.", "Mgr.", "MgA.", "MUDr.", 1],
//     ["Na které škole získala Ing. Petra Novotná své nejvyšší vzdělání?", "Na střední ekonomické škole.", "Na střední průmyslové škole.", "Na vyšší odborné škole.", "Na vysoké škole.", 4],
//     ["Jak se jmenují střední školy, které poskytují všeobecné vzdělání?", "Gymnázia.", "Obchodní akademie.", "Střední odborná učiliště.", "Střední průmyslové školy.", 1],
//     ["Na které z těchto škol se skládá maturitní zkouška?", "Na střední škole.", "Na vysoké škole.", "Na základní škole.", "Na vyšší odborné škole.", 1], // 10

//     ["Na kterém obrázku je česká státní vlajka?", "https://www.mvcr.cz/SCRIPT/ViewImage.aspx?physid=417257&docname=Maly_statni_znak.jpg", "https://www.mvcr.cz/SCRIPT/ViewImage.aspx?physid=417265&docname=Vlajka_prezidenta_republiky.jpg", "https://www.mvcr.cz/SCRIPT/ViewImage.aspx?physid=417261&docname=Statni_vlajka.jpg", "https://www.mvcr.cz/SCRIPT/ViewImage.aspx?physid=417263&docname=Velky_statni_znak.jpg", 3], // 1
//     ["Který dokument České republiky popisuje základní pravidla pro rozdělení státní moci na zákonodárnou, výkonnou a soudní?", "Ústava.", "Vládní nařízení.", "Vyhláška ministerstva vnitra.", "Listina základních práv a svobod.", 1],
//     ["Která věta o politickém systému České republiky je pravdivá?", "Česká republika je monarchie.", "Česká republika je totalitní stát.", "Česká republika je federativní stát.", "Česká republika je demokratický stát.", 4],
//     ["Která instituce hlasuje o důvěře vlády?", "Senát.", "Ústavní soud.", "Poslanecká sněmovna.", "Nejvyšší kontrolní úřad.", 3],
//     ["Jakým způsobem je možné změnit Ústavu České republiky?", "Občané podají petici.", "Parlament schválí ústavní zákon.", "Ministerstvo vnitra vydá vyhlášku.", "Nejvyšší správní soud vydá rozhodnutí.", 2], // 5
//     ["Kterou z těchto vět začíná česká státní hymna?", "Nad Tatrou se blýská.", "Kde domov můj, kde domov můj?", "Ať mír dál zůstává s touto krajinou.", "Svatý Václave, vévodo české země.", 2],
//     ["Senát Parlamentu České republiky má mnoho úkolů, projednává například návrhy zákonů. Která část Ústavy ČR popisuje tyto úkoly Senátu?", "Část o moci soudní.", "Část o moci výkonné.", "Část o moci zákonodárné.", "Část o územní samosprávě.", 3],
//     ["Které barvy jsou na české státní vlajce?", "Bílá, zelená, modrá.", "Bílá, červená, modrá.", "Bílá, zelená, červená.", "Červená, modrá, zelená.", 2],
//     ["Co nepatří mezi státní symboly České republiky?", "Státní pečeť.", "Státní hymna.", "České korunovační klenoty.", "Vlajka prezidenta republiky.", 3],
//     ["Který státní symbol České republiky je na obrázku?", "Státní vlajka.", "Malý státní znak.", "Velký státní znak.", "Vlajka prezidenta republiky.", 2, "https://www.mvcr.cz/SCRIPT/ViewImage.aspx?physid=417257&docname=Maly_statni_znak.jpg"], // 10

//     ["Která z těchto osob může navrhnout v České republice zákon?", "Prezident republiky.", "Každý poslanec.", "Ústavní soudce.", "Každý občan.", 2], // 1
//     ["Pan Svoboda se chce stát poslancem Poslanecké sněmovny ČR. Kolik let nejdéle může být poslancem v jednom volebním období?", "2 roky.", "4 roky.", "6 roků.", "8 roků.", 2],
//     ["Kdo se může stát prezidentem České republiky?", "Občan České republiky, který má právo volit a který dosáhl věku 18 let.", "Občan České republiky, který má právo volit a který dosáhl věku 21 let.", "Občan České republiky, který má právo volit a který dosáhl věku 26 let.", "Občan České republiky, který má právo volit a který dosáhl věku 40 let.", 4],
//     ["Právo veta znamená možnost vrátit zákon znovu k projednání Poslanecké sněmovně a nepodepsat jej. Kdo má při schvalování zákonů právo veta?", "Prezident.", "Předseda vlády.", "Předseda Senátu.", "Předseda Ústavního soudu.", 1],
//     ["Které komory tvoří Parlament České republiky?", "Senát a vláda.", "Senát a ministerstva.", "Poslanecká sněmovna a vláda.", "Poslanecká sněmovna a Senát.", 4], // 5
//     ["Senát Parlamentu České republiky dal souhlas ke jmenování ústavního soudce. Kdo následně jmenuje ústavního soudce?", "Prezident.", "Předseda vlády.", "Ministr spravedlnosti.", "Předseda Poslanecké sněmovny.", 1],
//     ["Kolik volených zástupců má Senát České republiky?", "27.", "81.", "200.", "281.", 2],
//     ["Která z těchto činností je úkolem Poslanecké sněmovny Parlamentu České republiky?", "Poslanecká sněmovna volí prezidenta.", "Poslanecká sněmovna jmenuje soudce.", "Poslanecká sněmovna uděluje státní vyznamenání.", "Poslanecká sněmovna projednává a schvaluje zákony.", 4],
//     ["Nouzový stav je stav při vážných krizích, haváriích nebo epidemiích. V nouzovém stavu mohou být omezena některá lidská práva a svobody. Která instituce vyhlašuje v České republice nouzový stav?", "Senát.", "Vláda.", "Prezident.", "Poslanecká sněmovna.", 2],
//     ["Kdo řídí vládu v České republice?", "Starosta obce.", "Předseda vlády.", "Předseda Senátu.", "Prezident republiky.", 2], // 10

//     ["Pan Novotný určuje výši trestu za trestné činy. Kterou funkci vykonává?", "Funkci soudce.", "Funkci starosty.", "Funkci ministra.", "Funkci prezidenta.", 1], // 1
//     ["Soudní moc vykonávají jménem republiky nezávislé soudy. Který právní dokument popisuje podmínky jmenování soudců v České republice?", "Ústava.", "Trestní řád.", "Notářský řád.", "Občanský soudní řád.", 1],
//     ["Který z těchto soudů rozhoduje o zrušení zákonů, které neodpovídají Ústavě České republiky?", "Vrchní soud.", "Ústavní soud.", "Krajský soud.", "Nejvyšší soud.", 2],
//     ["Která instituce má za úkol chránit bezpečnost osob a majetku a veřejný pořádek?", "Policie České republiky.", "Armáda České republiky.", "Parlament České republiky.", "Ústavní soud České republiky.", 1],
//     ["Pan Novotný pracuje jako advokát. Kterou z těchto činností může dělat?", "Určovat výši trestu za trestné činy.", "Poskytovat placené právní služby.", "Vydávat příkaz k zatčení.", "Zahajovat trestní stíhání.", 2], // 5
//     ["Na které z těchto institucí se podává trestní oznámení?", "Na policii.", "Na okresním soudě.", "Na ministerstvu spravedlnosti.", "Na obecním nebo městském úřadě.", 1],
//     ["Co je úkolem státního zástupce?", "Vymáhat peníze.", "Vyhlašovat rozsudky.", "Zabavovat majetek dlužníkům.", "Podávat obžalobu proti obviněnému.", 4],
//     ["Co je úkolem ombudsmana?", "Poskytovat placené právní služby.", "Rozhodovat o vině a trestu za trestné činy.", "Řešit stížnosti občanů na úřady státní správy.", "Zastupovat obžalovanou osobu v soudním řízení.", 3],
//     ["Paní Svobodová se chce rozvést. Která instituce rozhodne o jejím rozvodu?", "Soud.", "Městský úřad.", "Notářský úřad.", "Státní zastupitelství.", 1],
//     ["Soud odsoudil pana Nováka k 10 letům vězení. Kterým dokumentem vyhlásil soudce vinu a trest?", "Žalobou.", "Zprávou.", "Rozsudkem.", "Oznámením.", 3] // 10
// ];

const questions = [
  ["Který svátek slaví Češi i lidé po celém světě 8. března?", "Den matek.", "Den učitelů.", "Mezinárodní den žen.", "Mezinárodní den dětí.", 3],
  ["Kterou přílohu tradičně jedí Češi ke smaženému kaprovi v mnoha domácnostech na Štědrý večer?", "Rýži.", "Těstoviny.", "Bramborový salát.", "Houskové knedlíky.", 3],
  ["Kraslice je vejce, které se barví a zdobí. Kdy ženy a dívky dávají mužům kraslice?", "Na Dušičky.", "Na Nový rok.", "Na Štědrý den.", "Na Velikonoce.", 4],
  ["Který státní svátek se slaví v České republice na podzim?", "Den obnovy samostatného českého státu.", "Den boje za svobodu a demokracii.", "Den upálení mistra Jana Husa.", "Den vítězství.", 2],
  ["Velký pátek je svátek, který připomíná smrt Ježíše Krista. Ke kterému svátečnímu období patří Velký pátek?", "K Velikonocům.", "K Dušičkám.", "K Vánocům.", "K adventu.", 1],
  ["Památce zesnulých se v Česku lidově říká Dušičky. Je to den, kdy se podle české tradice zdobí hroby květinami, rozsvěcují se svíčky a vzpomíná se na zemřelé. Ve kterém období se slaví tento svátek?", "Na jaře.", "V létě.", "Na podzim.", "V zimě.", 3],
  ["Den české státnosti je také svátkem svatého Václava. Kníže Václav z rodu Přemyslovců je patronem Čech a Moravy. Kdy se slaví Den české státnosti?", "V září.", "V říjnu.", "V dubnu.", "V květnu.", 1],
  ["Který den si Češi obyčejně dávají vánoční dárky?", "6. ledna.", "24. prosince.", "25. prosince.", "26. prosince.", 2],
  ["Kdo podle tradice nosí v Česku na Vánoce dárky?", "Mrazík.", "Ježíšek.", "Mikuláš.", "Santa Klaus.", 2],
  ["Který svátek ukončuje období Vánoc?", "Dušičky.", "Jízda králů.", "Tři králové.", "Svátek sv. Valentýna.", 3],
  ["Při jízdě osobním autem mají řidič a spolujezdci podle zákona určité povinnosti. Co musí řidič a spolujezdec dodržovat?", "Musí mít zapnuté pásy.", "Musí mít zavřená přední okna.", "Musí mít zamčené přední dveře.", "Musí mít na sobě reflexní vesty.", 1],
  ["Paní Svobodová jezdí na kole do práce. Ve které situaci porušuje pravidla silničního provozu?", "Jede na kole po chodníku.", "Jede na kole po pravé straně silnice.", "Jede na kole v řadě za svou kolegyní.", "Jede na kole a dává rukou znamení o změně směru jízdy.", 1],
  ["Pan Svoboda chce řídit osobní automobil. Který typ řidičského průkazu potřebuje?", "Řidičský průkaz skupiny A.", "Řidičský průkaz skupiny B.", "Řidičský průkaz skupiny C.", "Řidičský průkaz skupiny D.", 2],
  ["Kolik piv s obsahem alkoholu může vypít řidič podle zákona při řízení auta v Česku?", "Tři.", "Dvě.", "Jedno.", "Žádné.", 4],
  ["Který dopravní prostředek má přednost před chodcem na přechodu?", "Auto.", "Tramvaj.", "Autobus.", "Motocykl.", 2],
  ["Paní Svobodová si koupila nový automobil. Které pojištění musí podle zákona uzavřít?", "Povinné ručení.", "Životní pojištění.", "Úrazové pojištění.", "Havarijní pojištění.", 1],
  ["Kdo má povinnost nosit podle zákona oblečení s reflexními prvky?", "Osoba, která jde v noci v obci po chodníku.", "Osoba, která jde ve dne v obci po chodníku.", "Osoba, která jde v noci mimo obec po silnici.", "Osoba, která jde ve dne mimo obec po silnici.", 3],
  ["Jak musí cestovat v autě dítě menší než 150 cm?", "Dítě musí sedět na klíně dospělé osoby.", "Dítě musí sedět volně na zadním sedadle.", "Dítě musí sedět volně na předním sedadle.", "Dítě musí sedět připoutané v dětské autosedačce.", 4],
  ["Od kolika let mohou jezdit děti po silnici na kole bez dohledu další osoby?", "Od 3 let.", "Od 6 let.", "Od 10 let.", "Od 18 let.", 3],
  ["Která z uvedených věcí patří k povinné výbavě osobního automobilu?", "Rádio.", "Lékárnička.", "Destilovaná voda.", "Nádoba na benzin.", 2],
  ["Paní Novotná vidí požár. Chce zavolat hasiče. Na které z těchto telefonních čísel zavolá?", "150.", "155.", "156.", "158.", 1],
  ["Které telefonní číslo má zdravotnická záchranná služba?", "150.", "155.", "156.", "158.", 2],
  ["Paní Svobodová není spokojená se svou zdravotní pojišťovnou. Jak často může změnit zdravotní pojišťovnu?", "Jednou za měsíc.", "Jednou za 3 měsíce.", "Jednou za 6 měsíců.", "Jednou za 12 měsíců.", 4],
  ["Pan Novák je nemocný. Omylem si smazal SMS s receptem na předepsané léky. Který doklad může pan Novák v lékárně předložit, aby dostal předepsané léky?", "Rodný list.", "Řidičský průkaz.", "Očkovací průkaz.", "Občanský průkaz.", 4],
  ["Která instituce nepatří do integrovaného záchranného systému?", "Vláda České republiky.", "Policie České republiky.", "Hasičský záchranný sbor.", "Zdravotnická záchranná služba.", 1],
  ["Které telefonní číslo má jednotný záchranný systém (hasiči, policie, zdravotnická záchranná služba) ve všech státech Evropské unie?", "112.", "150.", "911.", "999.", 1],
  ["Od roku 2020 vystavují lékaři v České republice pouze elektronické neschopenky (doklad o pracovní neschopnosti). Které instituci lékař posílá elektronickou neschopenku?", "Zdravotní pojišťovně.", "Ministerstvu zdravotnictví.", "Okresní hygienické stanici.", "Okresní správě sociálního zabezpečení.", 4],
  ["Pan Novák viděl dopravní nehodu. Chce volat Policii České republiky. Které telefonní číslo použije?", "150.", "155.", "156.", "158.", 4],
  ["Pan Novotný je občanem České republiky, je nezaměstnaný a je registrovaný na úřadu práce jako uchazeč o zaměstnání. Kdo platí jeho povinné zdravotní pojištění?", "Stát.", "Finanční úřad.", "Platí si ho sám.", "Jeho poslední zaměstnavatel.", 1],
  ["Pan Svoboda ztratil průkaz pojištěnce zdravotní pojišťovny. Do kolika dnů musí nahlásit ztrátu zdravotní pojišťovně?", "Do jednoho dne.", "Do osmi dnů.", "Do třiceti dnů.", "Do šedesáti dnů.", 2],
  ["Z čeho se skládá jednotná přijímací zkouška na střední školy?", "Z českého jazyka a dějepisu.", "Z českého jazyka a zeměpisu.", "Z českého jazyka a matematiky.", "Z českého jazyka a anglického jazyka.", 3],
  ["Která z těchto institucí poskytuje předškolní vzdělávání pro děti?", "Gymnázium.", "Mateřská škola.", "Střední odborná škola.", "Základní umělecká škola.", 2],
  ["Kolik let trvá v České republice povinná školní docházka?", "5 let.", "9 let.", "12 let.", "15 let.", 2],
  ["Kdy mají žáci základních a středních škol v České republice hlavní prázdniny?", "V září a v říjnu.", "V únoru a v březnu.", "V dubnu a v květnu.", "V červenci a v srpnu.", 4],
  ["Dcera paní Svobodové ukončila studium státní závěrečnou zkouškou a obhájila diplomovou práci. Kterou školu právě ukončila?", "Gymnázium.", "Vysokou školu.", "Obchodní akademii.", "Střední průmyslovou školu.", 2],
  ["Manželé Svobodovi mají čtyři děti. Aleně jsou 4 roky, Janovi 10 let, Ivanovi 19 let a Tereze je 21 let. Které z jejich dětí má povinnou školní docházku?", "Jan.", "Ivan.", "Alena.", "Tereza.", 1],
  ["Jana Svobodová vystudovala na lékařské fakultě tříletý obor Všeobecná sestra.", "Bc.", "Mgr.", "MgA.", "MUDr.", 1],
  ["Na které škole získala Ing. Petra Novotná své nejvyšší vzdělání?", "Na střední ekonomické škole.", "Na střední průmyslové škole.", "Na vyšší odborné škole.", "Na vysoké škole.", 4],
  ["Jak se jmenují střední školy, které poskytují všeobecné vzdělání?", "Gymnázia.", "Obchodní akademie.", "Střední odborná učiliště.", "Střední průmyslové školy.", 1],
  ["Na které z těchto škol se skládá maturitní zkouška?", "Na střední škole.", "Na vysoké škole.", "Na základní škole.", "Na vyšší odborné škole.", 1],
  ["Na kterém obrázku je česká státní vlajka?", "img/5-1-1.png", "img/5-1-2.png", "img/5-1-3.png", "img/5-1-4.png", 3],
  ["Který dokument České republiky popisuje základní pravidla pro rozdělení státní moci na zákonodárnou, výkonnou a soudní?", "Ústava.", "Vládní nařízení.", "Vyhláška ministerstva vnitra.", "Listina základních práv a svobod.", 1],
  ["Která věta o politickém systému České republiky je pravdivá?", "Česká republika je monarchie.", "Česká republika je totalitní stát.", "Česká republika je federativní stát.", "Česká republika je demokratický stát.", 4],
  ["Která instituce hlasuje o důvěře vlády?", "Senát.", "Ústavní soud.", "Poslanecká sněmovna.", "Nejvyšší kontrolní úřad.", 3],
  ["Jakým způsobem je možné změnit Ústavu České republiky?", "Občané podají petici.", "Parlament schválí ústavní zákon.", "Ministerstvo vnitra vydá vyhlášku.", "Nejvyšší správní soud vydá rozhodnutí.", 2],
  ["Kterou z těchto vět začíná česká státní hymna?", "Nad Tatrou se blýská.", "Kde domov můj, kde domov můj?", "Ať mír dál zůstává s touto krajinou.", "Svatý Václave, vévodo české země.", 2],
  ["Senát Parlamentu České republiky má mnoho úkolů, projednává například návrhy zákonů. Která část Ústavy ČR popisuje tyto úkoly Senátu?", "Část o moci soudní.", "Část o moci výkonné.", "Část o moci zákonodárné.", "Část o územní samosprávě.", 3],
  ["Které barvy jsou na české státní vlajce?", "Bílá, zelená, modrá.", "Bílá, červená, modrá.", "Bílá, zelená, červená.", "Červená, modrá, zelená.", 2],
  ["Co nepatří mezi státní symboly České republiky?", "Státní pečeť.", "Státní hymna.", "České korunovační klenoty.", "Vlajka prezidenta republiky.", 3],
  ["Který státní symbol České republiky je na obrázku?", "Státní vlajka.", "Malý státní znak.", "Velký státní znak.", "Vlajka prezidenta republiky.", 2, "img/5-10-0.png"],
  ["Která z těchto osob může navrhnout v České republice zákon?", "Prezident republiky.", "Každý poslanec.", "Ústavní soudce.", "Každý občan.", 2],
  ["Pan Svoboda se chce stát poslancem Poslanecké sněmovny ČR. Kolik let nejdéle může být poslancem v jednom volebním období?", "2 roky.", "4 roky.", "6 roků.", "8 roků.", 2],
  ["Kdo se může stát prezidentem České republiky?", "Občan České republiky, který má právo volit a který dosáhl věku 18 let.", "Občan České republiky, který má právo volit a který dosáhl věku 21 let.", "Občan České republiky, který má právo volit a který dosáhl věku 26 let.", "Občan České republiky, který má právo volit a který dosáhl věku 40 let.", 4],
  ["Právo veta znamená možnost vrátit zákon znovu k projednání Poslanecké sněmovně a nepodepsat jej. Kdo má při schvalování zákonů právo veta?", "Prezident.", "Předseda vlády.", "Předseda Senátu.", "Předseda Ústavního soudu.", 1],
  ["Které komory tvoří Parlament České republiky?", "Senát a vláda.", "Senát a ministerstva.", "Poslanecká sněmovna a vláda.", "Poslanecká sněmovna a Senát.", 4],
  ["Senát Parlamentu České republiky dal souhlas ke jmenování ústavního soudce. Kdo následně jmenuje ústavního soudce?", "Prezident.", "Předseda vlády.", "Ministr spravedlnosti.", "Předseda Poslanecké sněmovny.", 1],
  ["Kolik volených zástupců má Senát České republiky?", "27.", "81.", "200.", "281.", 2],
  ["Která z těchto činností je úkolem Poslanecké sněmovny Parlamentu České republiky?", "Poslanecká sněmovna volí prezidenta.", "Poslanecká sněmovna jmenuje soudce.", "Poslanecká sněmovna uděluje státní vyznamenání.", "Poslanecká sněmovna projednává a schvaluje zákony.", 4],
  ["Nouzový stav je stav při vážných krizích, haváriích nebo epidemiích. V nouzovém stavu mohou být omezena některá lidská práva a svobody. Která instituce vyhlašuje v České republice nouzový stav?", "Senát.", "Vláda.", "Prezident.", "Poslanecká sněmovna.", 2],
  ["Kdo řídí vládu v České republice?", "Starosta obce.", "Předseda vlády.", "Předseda Senátu.", "Prezident republiky.", 2],
  ["Pan Novotný určuje výši trestu za trestné činy. Kterou funkci vykonává?", "Funkci soudce.", "Funkci starosty.", "Funkci ministra.", "Funkci prezidenta.", 1],
  ["Soudní moc vykonávají jménem republiky nezávislé soudy. Který právní dokument popisuje podmínky jmenování soudců v České republice?", "Ústava.", "Trestní řád.", "Notářský řád.", "Občanský soudní řád.", 1],
  ["Který z těchto soudů rozhoduje o zrušení zákonů, které neodpovídají Ústavě České republiky?", "Vrchní soud.", "Ústavní soud.", "Krajský soud.", "Nejvyšší soud.", 2],
  ["Která instituce má za úkol chránit bezpečnost osob a majetku a veřejný pořádek?", "Policie České republiky.", "Armáda České republiky.", "Parlament České republiky.", "Ústavní soud České republiky.", 1],
  ["Pan Novotný pracuje jako advokát. Kterou z těchto činností může dělat?", "Určovat výši trestu za trestné činy.", "Poskytovat placené právní služby.", "Vydávat příkaz k zatčení.", "Zahajovat trestní stíhání.", 2],
  ["Na které z těchto institucí se podává trestní oznámení?", "Na policii.", "Na okresním soudě.", "Na ministerstvu spravedlnosti.", "Na obecním nebo městském úřadě.", 1],
  ["Co je úkolem státního zástupce?", "Vymáhat peníze.", "Vyhlašovat rozsudky.", "Zabavovat majetek dlužníkům.", "Podávat obžalobu proti obviněnému.", 4],
  ["Co je úkolem ombudsmana?", "Poskytovat placené právní služby.", "Rozhodovat o vině a trestu za trestné činy.", "Řešit stížnosti občanů na úřady státní správy.", "Zastupovat obžalovanou osobu v soudním řízení.", 3],
  ["Paní Svobodová se chce rozvést. Která instituce rozhodne o jejím rozvodu?", "Soud.", "Městský úřad.", "Notářský úřad.", "Státní zastupitelství.", 1],
  ["Soud odsoudil pana Nováka k 10 letům vězení. Kterým dokumentem vyhlásil soudce vinu a trest?", "Žalobou.", "Zprávou.", "Rozsudkem.", "Oznámením.", 3],
  ["Do které instituce Evropské unie volí čeští občané své zástupce?", "Do Rady Evropy.", "Do Evropské komise.", "Do Evropského parlamentu.", "Do Evropského soudu pro lidská práva.", 3],
  ["Jak často se konají řádné volby do obecního zastupitelstva?", "Jednou za dva roky.", "Jednou za tři roky.", "Jednou za čtyři roky.", "Jednou za pět let.", 3],
  ["Od kolika let se může občan České republiky stát starostou?", "Od 18 let.", "Od 21 let.", "Od 30 let.", "Od 40 let.", 1],
  ["Pan Svoboda se stal krajským zastupitelem. Krajští zastupitelé zvolili pana Svobodu nejvyšším představitelem kraje. Kterou funkci teď vykonává pan Svoboda?", "Senátor.", "Poslanec.", "Hejtman.", "Primátor.", 3],
  ["V České republice je 27 statutárních měst včetně Prahy. Kdo je nejvyšším představitelem statutárního města?", "Senátor.", "Hejtman.", "Poslanec.", "Primátor.", 4],
  ["Koho mohou volit občané do jeho funkce?", "Ministra financí.", "Soudce okresního soudu.", "Senátora Parlamentu České republiky.", "Člena bankovní rady České národní banky.", 3],
  ["Občané hlasovali o tom, jestli jejich obecní úřad postaví v obci novou radnici. Jak se jmenuje toto hlasování občanů?", "Obecní volby.", "Místní referendum.", "Dotazování občanů.", "Předvolební průzkum.", 2],
  ["Paní Svobodová kandidovala v senátních volbách a voliči ji zvolili senátorkou už v prvním kole. Kolik procent voličských hlasů získala ve svém volebním obvodě?", "5 procent.", "26 procent.", "39 procent.", "53 procent.", 4],
  ["Za jak dlouho od poslední volby prezidenta je další řádný termín prezidentských voleb?", "Za pět let.", "Za šest let.", "Za sedm let.", "Za osm let.", 1],
  ["Od kolika let se může občan České republiky účastnit voleb jako volič?", "Od 15 let.", "Od 16 let.", "Od 18 let.", "Od 21 let.", 3],
  ["Která z těchto vět o státním občanství České republiky je pravdivá?", "Státní občanství uděluje ministerstvo zahraničních věcí.", "Státní občanství získá každý, kdo se v České republice narodí.", "Žádost o udělení státního občanství České republiky se musí podat osobně.", "O udělení státního občanství se musí rozhodnout do 30 dnů od podání žádosti.", 3],
  ["Který úřad vydává občanům České republiky nový občanský průkaz?", "Policie ČR.", "Okresní soud.", "Ministerstvo spravedlnosti.", "Obecní úřad nebo úřad městské části.", 4],
  ["Paní Nováková si pořídila psa, a proto musí splnit určité povinnosti. Co paní Nováková ale nemusí udělat?", "Zajistit výcvik psa.", "Zajistit čip pro psa.", "Přihlásit psa na obecním úřadě.", "Uhradit škodu, kterou pes způsobil.", 1],
  ["Ve kterém případě paní Nováková nemusí požádat o nový občanský průkaz?", "Po změně příjmení.", "Po změně zaměstnání.", "Po změně místa trvalého pobytu.", "Po ukončení platnosti občanského průkazu.", 2],
  ["Kterou službu neposkytuje Czech POINT občanům ČR?", "Výpis z Rejstříku trestů.", "Výpis z bankovního účtu.", "Výpis z katastru nemovitostí.", "Výpis z bodového hodnocení řidiče.", 2],
  ["Pan Novotný je občanem České republiky a ztratil cestovní pas. Kde může požádat o nový pas?", "Na obecním úřadu.", "U okresního soudu.", "Na cizinecké policii.", "Na ministerstvu zahraničních věcí.", 1],
  ["Který z těchto úřadů může vydat potvrzení, že občan nemá záznam o trestu?", "Ministerstvo vnitra.", "Rejstřík trestů.", "Finanční úřad.", "Krajský soud.", 2],
  ["Panu Novotnému je 35 let a platnost jeho občanského průkazu právě končí. Proto si žádá o nový průkaz. Jak dlouho bude panu Novotnému platit jeho nový občanský průkaz?", "5 let.", "10 let.", "20 let.", "35 let.", 2],
  ["Paní Svobodová potřebuje svému zaměstnavateli dodat úředně ověřenou kopii svého maturitního vysvědčení. Na kterém místě paní Svobodové kopii maturitního vysvědčení úředně ověří?", "Na okresním soudu.", "Na České školní inspekci.", "Na pobočkách Czech POINT.", "Na každé pobočce České spořitelny.", 3],
  ["Trestní odpovědnost mají podle zákona také mladistvé osoby. Která z těchto osob patří mezi mladistvé?", "Jana, které je 10 let.", "Martina, které je 14 let.", "David, kterému je 17 let.", "Zdeněk, kterému je 23 let.", 3],
  ["Paní Svobodové se rozbil nový počítač. Šla jej proto reklamovat. Do kolika dnů musí prodejce vyřídit její reklamaci?", "Do 7 dnů.", "Do 14 dnů.", "Do 30 dnů.", "Do 60 dnů.", 3],
  ["Paní Novotná si pronajala byt na dobu neurčitou. Pronajímatel chce, aby zaplatila kauci (peněžní jistotu). Jak vysoká může být kauce podle zákona?", "Maximálně ve výši 1 měsíčního nájmu.", "Maximálně ve výši 3 měsíčních nájmů.", "Maximálně ve výši 6 měsíčních nájmů.", "Maximálně ve výši 12 měsíčních nájmů.", 2],
  ["Pan Sokol si koupil v e-shopu novou televizi. Do kolika dnů může podle zákona odstoupit od kupní smlouvy, kterou uzavřel po internetu?", "Do 14 dnů.", "Do 30 dnů.", "Do 60 dnů.", "Do 90 dnů.", 1],
  ["Který majetek se zapisuje do katastru nemovitostí?", "Pračka.", "Zahrada.", "Nábytek.", "Motocykl.", 2],
  ["Paní Nováková udělila panu Pokornému plnou moc, aby ji mohl zastupovat při jednání na úřadě. Jak se označuje pan Pokorný v plné moci?", "Příkazce.", "Poplatník.", "Zmocněnec.", "Opatrovník.", 3],
  ["Pan Novák chce sepsat svou závěť formou veřejné listiny. U koho si ji může nechat sepsat?", "U notáře.", "U soudce.", "U advokáta.", "U exekutora.", 1],
  ["Paní Nováková má velké dluhy. Soud rozhodl, že musí dluhy zaplatit. Kdo smí dluhy vymáhat?", "Notář.", "Starosta.", "Policista.", "Exekutor.", 4],
  ["Paní Nováková koupila pozemek a chce postavit rodinný dům. Potřebuje získat stavební povolení. Který z těchto úřadů jí vydá stavební povolení?", "Finanční úřad.", "Stavební úřad.", "Katastrální úřad.", "Živnostenský úřad.", 2],
  ["Pan Novák si půjčil lyže z půjčovny lyží. Kterou smlouvu uzavřel pan Novák s půjčovnou?", "Kupní smlouvu na vybavení.", "Smlouvu o úschově vybavení.", "Smlouvu o přepravě vybavení.", "Nájemní smlouvu na vybavení.", 4],
  ["Pan Novák nemůže splácet úvěry bankám. Chce požádat o vyhlášení osobního bankrotu. Která instituce bude rozhodovat o vyhlášení osobního bankrotu?", "Soud.", "Banka.", "Úřad práce.", "Finanční úřad.", 1],
  ["Kdo může v České republice uzavřít manželství?", "Svobodná žena a ženatý muž.", "Vdaná žena a rozvedený muž.", "Svobodná žena a svobodná žena.", "Svobodná žena a rozvedený muž.", 4],
  ["Který z těchto úřadů může ukončit manželství rozvodem?", "Obecní úřad.", "Okresní soud.", "Městská policie.", "Ministerstvo vnitra.", 2],
  ["Manželé Svobodovi jsou občané České republiky. Chtějí adoptovat dítě z dětského domova. Která instituce rozhoduje o adopci?", "Soud.", "Policie.", "Obecní úřad.", "Ministerstvo vnitra.", 1],
  ["Manželé Soukupovi se rozvedli. Soud určil panu Soukupovi finanční částku, kterou musí platit každý měsíc na nezletilou dceru. Jak se tato částka nazývá?", "Výživné.", "Přídavek na dítě.", "Sociální příplatek.", "Rodičovský příspěvek.", 1],
  ["Panu Novákovi zemřela manželka. Kterou listinu mu vydá matriční úřad?", "Rodný list.", "Úmrtní list.", "Oddací list.", "Pamětní list.", 2],
  ["Paní Horáková ztratila rodný list. Kde musí požádat o vydání nového rodného listu?", "Na policii.", "Na matričním úřadě.", "Na ministerstvu vnitra.", "Na správě sociálního zabezpečení.", 2],
  ["Paní Nováková změnila po rozvodu příjmení. U které z těchto institucí změnu příjmení oznámila?", "U soudu.", "Na policii.", "Na matričním úřadě.", "Na Českém statistickém úřadě.", 3],
  ["Jak se jmenuje dokument, který manželům vydá matriční úřad po uzavření manželství?", "Rodný list.", "Oddací list.", "Prohlášení o uzavření manželství.", "Doklad o registrovaném partnerství.", 2],
  ["Který matriční doklad získá český občan po narození?", "Rodný list.", "Oddací list.", "Cestovní pas.", "Občanský průkaz.", 1],
  ["Manželé Novákovi se rozvedli. Jak se jmenuje dokument, který dostanou po rozvodu?", "Žaloba.", "Rodný list.", "Rozhodnutí.", "Rozsudek soudu.", 4],
  ["Která instituce vydává v České republice bankovky a mince?", "Česká hospodářská komora.", "Český statistický úřad.", "Česká národní banka.", "Ministerstvo financí.", 3],
  ["Na bankovce je známá česká spisovatelka – autorka knihy Babička. Jak se tato žena jmenuje?", "Svatá Ludmila.", "Ema Destinnová.", "Božena Němcová.", "Anežka Přemyslovna.", 3, "img/12-2-0.png"],
  ["Jak se nazývá měna České republiky?", "Euro.", "Haléř.", "Koruna česká.", "Československá koruna.", 3],
  ["Na české stokorunové bankovce je slavný český král a římský císař. Jak se tento muž jmenuje?", "Karel IV.", "Rudolf II.", "František Josef I.", "Přemysl Otakar II.", 1, "img/12-4-0.png"],
  ["Jakou nejvyšší hodnotu má platná česká bankovka?", "500 korun českých.", "1 000 korun českých.", "2 000 korun českých.", "5 000 korun českých.", 4],
  ["Jakou nejnižší hodnotu má platná česká bankovka?", "50 korun českých.", "100 korun českých.", "200 korun českých.", "500 korun českých.", 2],
  ["Paní Svobodová si kupuje nové auto za 650 000 korun. Chce zaplatit v hotovosti, ale prodejce nemůže podle zákona tak velkou peněžní částku přijmout. Jakou maximální částku v hotovosti může prodejce přijmout?", "100 000 Kč.", "270 000 Kč.", "400 000 Kč.", "470 000 Kč.", 2],
  ["Česká národní banka (ČNB) je centrální banka v ČR, která vykonává dohled nad finančním trhem v zemi. Kdo je nejvyšší představitel České národní banky?", "Prezident.", "Guvernér.", "Předseda.", "Ředitel.", 2],
  ["Pan Svoboda si chce vyměnit české koruny za eura. Kolik korun zaplatí pan Svoboda za 100 eur? Ve směnárně je tato tabule:", "2 400 Kč.", "2 450 Kč.", "2 500 Kč.", "2 450 Kč + 15 % DPH.", 3, "img/12-9-0.png"],
  ["Jakou nejvyšší hodnotu má platná česká mince?", "10 korun českých.", "20 korun českých.", "50 korun českých.", "100 korun českých.", 3],
  ["Pan Novotný je podnikatel a má ze zákona povinnost platit daně. Který úřad kontroluje, jak platí daně?", "Obecní úřad.", "Finanční úřad.", "Katastrální úřad.", "Živnostenský úřad.", 2],
  ["Celní správa České republiky vybírá cla a spotřební daně a má různé úkoly při ochraně ekonomických zájmů ČR. Pod které ministerstvo Celní správa ČR patří?", "Ministerstvo vnitra.", "Ministerstvo financí.", "Ministerstvo spravedlnosti.", "Ministerstvo pro místní rozvoj.", 2],
  ["Nepřímé daně jsou součástí ceny výrobků a služeb. Která z těchto daní je nepřímá?", "Silniční daň.", "Spotřební daň.", "Daň z příjmů fyzických osob.", "Daň z příjmů právnických osob.", 2],
  ["Paní Svobodová si koupila domů novou televizi. Kterou daň musí zaplatit v ceně televize?", "Daň z nemovitých věcí.", "Daň z přidané hodnoty.", "Spotřební daň.", "Daň z příjmů.", 2],
  ["Na kterém úřadu podává podnikatel daňové přiznání?", "Na obecním úřadu.", "Na finančním úřadu.", "Na ministerstvu financí.", "Na finančním ředitelství.", 2],
  ["Ze kterého z těchto druhů příjmů zaplatí paní Svobodová daň?", "Z nemocenské.", "Z pronájmu bytu.", "Ze sociálních dávek.", "Z podpory v nezaměstnanosti.", 2],
  ["Která daň je na účtence uvedena? Na účtence za zboží je uvedeno: ", "Daň z příjmů.", "Daň spotřební.", "Daň ekologická.", "Daň z přidané hodnoty.", 4, "img/13-7-0.png"],
  ["Co označuje zkratka DPH?", "Daň z příjmů.", "Hrubý domácí produkt.", "Daň z přidané hodnoty.", "Dohodu o provedení práce.", 3],
  ["Který druh zboží má v ceně spotřební daň?", "Tvrdý alkohol.", "Elektrická energie.", "Sportovní oblečení.", "Elektronická zařízení.", 1],
  ["Pan Svoboda má zaplatit dluh 2 500 Kč na dani z příjmů. Kterému úřadu dluh zaplatí?", "Úřadu práce.", "Celnímu úřadu.", "Finančnímu úřadu.", "Českému statistickému úřadu.", 3],
  ["Který úřad poskytuje podporu v nezaměstnanosti?", "Živnostenský úřad.", "Finanční úřad.", "Krajský úřad.", "Úřad práce.", 4],
  ["Paní Svobodová má nárok na starobní důchod. Která instituce v České republice vydá rozhodnutí o výši jejího důchodu?", "Úřad práce.", "Ministerstvo vnitra.", "Ministerstvo zdravotnictví.", "Česká správa sociálního zabezpečení.", 4],
  ["Který druh finanční pomoci nevyplácí Česká správa sociálního zabezpečení?", "Mateřskou.", "Nemocenskou.", "Starobní důchod.", "Podporu v nezaměstnanosti.", 4],
  ["Pan Novák pracuje ve stavební firmě a v současné době je nemocný. Nedostává mzdu, ale peněžitou dávku. Jak se tato dávka jmenuje?", "Ošetřovné.", "Nemocenská.", "Příspěvek na živobytí.", "Podpora v nezaměstnanosti.", 2],
  ["Panu Veselému je 64 let a dosáhl důchodového věku. Na České správě sociálního zabezpečení si požádal o důchod. Který doklad od něho nebude úřad vyžadovat?", "Doklad o studiu.", "Občanský průkaz.", "Výpis z Rejstříku trestů.", "Doklad o výkonu vojenské služby.", 3],
  ["Který úřad rozhoduje o přiznání dávek v hmotné nouzi?", "Úřad práce.", "Ministerstvo financí.", "Charita České republiky.", "Česká správa sociálního zabezpečení.", 1],
  ["Panu Novákovi je 56 let a je nezaměstnaný. Jaká je nejdelší doba, po kterou může dostávat podporu v nezaměstnanosti?", "6 měsíců.", "11 měsíců.", "18 měsíců.", "24 měsíců.", 2],
  ["Paní Nováková pracuje jako učitelka na základní škole a čeká své první dítě. Má 3 týdny před porodem. Kterou z těchto peněžitých dávek může dostat před narozením dítěte?", "Porodné.", "Ošetřovné.", "Mateřskou.", "Rodičovskou.", 3],
  ["Manželům Novotným se narodilo dítě. Na jak dlouho si podle zákona může vzít pan Novotný otcovskou dovolenou?", "Na 5 dní.", "Na 14 dní.", "Na 31 dní.", "Na 60 dní.", 2],
  ["Paní Nováková byla v evidenci nezaměstnaných na úřadu práce. Včera začala pracovat. Kterým z těchto způsobů ukončí své zařazení v evidenci nezaměstnaných?", "Nemusí dělat nic.", "Informuje o nové práci úřad práce.", "Informuje o nové práci finanční úřad.", "Oznámí vyřazení z evidence novému zaměstnavateli.", 2],
  ["Paní Novotná dává výpověď ze svého pracovního poměru. Jaká je délka výpovědní doby podle zákona?", "Nejvíce 3 dny.", "Nejvíce 15 dnů.", "Nejméně 1 měsíc.", "Nejméně 2 měsíce.", 4],
  ["Výpovědní doba se počítá ode dne doručení výpovědi. Jak dlouhá je výpovědní doba u dohody o pracovní činnosti (DPČ)?", "15 dní.", "30 dní.", "60 dní.", "90 dní.", 1],
  ["Který z těchto údajů musí být podle zákona v každém případě v pracovní smlouvě?", "Pracovní doba.", "Počet dnů dovolené.", "Místo výkonu práce.", "Termín výplaty mzdy.", 3],
  ["Paní Svobodová pracuje od 1. ledna jako zahradnice. S majitelem zahradnictví podepsala dohodu o provedení práce (DPP). Kolik hodin může odpracovat v tomto zahradnictví v jednom kalendářním roce?", "Maximálně 150 hodin.", "Maximálně 200 hodin.", "Maximálně 250 hodin.", "Maximálně 300 hodin.", 4],
  ["Pan Novák má zaměstnání na plný pracovní úvazek. Kolik hodin týdně musí podle zákona pracovat?", "35 hodin.", "40 hodin.", "45 hodin.", "50 hodin.", 2],
  ["Který zákon nebo zákoník upravuje vztah mezi zaměstnavatelem a zaměstnancem?", "Živnostenský zákon.", "Trestní zákoník.", "Zákon o rodině.", "Zákoník práce.", 4],
  ["Pan Novák uzavřel s firmou Stavby, s. r. o., pracovní poměr na dobu určitou. Jakou nejdelší dobu může trvat tento nový pracovní poměr bez prodloužení?", "Jeden rok.", "Dva roky.", "Tři roky.", "Čtyři roky.", 3],
  ["Paní Nováková má nové zaměstnání. Bude pracovat jako prodavačka. Získala pracovní smlouvu na dobu neurčitou s maximální zkušební dobou. Jaká bude podle zákona délka zkušební doby paní Novákové?", "3 měsíce.", "6 měsíců.", "9 měsíců.", "12 měsíců.", 1],
  ["Jaká je podle zákona délka týdenní pracovní doby v České republice?", "24 hodin.", "32 hodin.", "40 hodin.", "56 hodin.", 3],
  ["Jaká je výměra dovolené pro zaměstnance podle zákona?", "Nejméně 2 týdny za kalendářní rok.", "Nejméně 4 týdny za kalendářní rok.", "Nejméně 6 týdnů za kalendářní rok.", "Nejméně 8 týdnů za kalendářní rok.", 2],
  ["Pan Novák je osoba samostatně výdělečně činná (OSVČ). Jak se nazývají jeho příjmy?", "Příjmy z důchodového připojištění.", "Příjmy ze samostatné činnosti.", "Příjmy ze závislé činnosti.", "Příjmy z pronájmu bytu.", 2],
  ["Která práce není živnost?", "Policejní služba.", "Kadeřnické služby.", "Průvodcovské služby.", "Služby soukromého detektiva.", 1],
  ["Podnikatel založil firmu. Ke které z uvedených daní se musel zaregistrovat na finančním úřadě?", "K dani z příjmů.", "K dani spotřební.", "K dani z nemovitosti.", "K dani z přidané hodnoty.", 1],
  ["Které pojištění musí zaměstnavatel v České republice platit za své zaměstnance?", "Životní pojištění.", "Havarijní pojištění.", "Zdravotní pojištění.", "Důchodové připojištění.", 3],
  ["Pan Novák je majitelem obchodu s oděvy. Který úřad vydal panu Novákovi povolení k podnikání?", "Okresní soud.", "Finanční úřad.", "Živnostenský úřad.", "Ministerstvo práce a sociálních věcí.", 3],
  ["Pan Malý se rozhodl podnikat jako malíř pokojů. Na úřadě požádal, aby mu vydali živnostenské oprávnění. Kolik zaplatí za ohlášení živnosti?", "1 000 korun.", "5 000 korun.", "10 000 korun.", "15 000 korun.", 1],
  ["V obchodním rejstříku jsou informace o podnikatelích na území České republiky a je přístupný veřejnosti v online podobě. Která instituce zveřejňuje obchodní rejstřík v České republice?", "Ministerstvo vnitra ČR.", "Ministerstvo financí ČR.", "Ministerstvo spravedlnosti ČR.", "Ministerstvo průmyslu a obchodu ČR.", 3],
  ["Co nepatří mezi činnosti živnostenského úřadu?", "Přijímat ohlášení živností.", "Přijímat žádosti o koncesi.", "Přijímat daňová přiznání podnikatelů.", "Vydávat výpisy z živnostenského rejstříku.", 3],
  ["Pan Horák je truhlář a podniká jako osoba samostatně výdělečně činná (OSVČ). Které z těchto pojištění si musí pan Horák platit?", "Pojištění majetku.", "Zdravotní pojištění.", "Nemocenské pojištění.", "Pojištění odpovědnosti podnikatelů.", 2],
  ["Který z těchto dokumentů potřebuje občan k vykonávání volné živnosti?", "Rodný list.", "Výuční list.", "Daňové přiznání.", "Výpis ze živnostenského rejstříku.", 4],
  ["Jaké je mezinárodní postavení České republiky?", "Je závislým územím Evropské unie.", "Je součástí státu Rakousko-Uhersko.", "Je jednou z částí federace Evropská unie.", "Je nezávislou republikou a je členem Evropské unie.", 4],
  ["Česko se nachází v hlavním evropském rozvodí. Odtéká z něj voda řekami do tří moří. Do kterého moře se vlévá řeka Labe?", "Do Černého moře.", "Do Severního moře.", "Do Baltského moře.", "Do Jaderského moře.", 2],
  ["Kde pramení řeka Labe?", "V Orlických horách.", "V Krušných horách.", "V Krkonoších.", "Na Šumavě.", 3],
  ["Polabská nížina je největší nížina v Česku. Které číslo na mapě označuje Polabskou nížinu?", "1.", "2.", "3.", "4.", 1, "img/17-4-0.png"],
  ["Jaká je přibližně rozloha Česka?", "39 000 km2.", "79 000 km2.", "119 000 km2.", "159 000 km2.", 2],
  ["Která dvojice krajů se nachází ve východních Čechách?", "Liberecký kraj a Ústecký kraj.", "Ústecký kraj a Karlovarský kraj.", "Plzeňský kraj a Karlovarský kraj.", "Královéhradecký kraj a Pardubický kraj.", 4],
  ["Ve kterém klimatickém pásu se nachází Česká republika?", "V mírném.", "V polárním.", "V tropickém.", "V subtropickém.", 1],
  ["Nejvyšší hora Moravy se nachází v pohoří Hrubý Jeseník. Jak se tato hora jmenuje?", "Plechý.", "Praděd.", "Sněžka.", "Klínovec.", 2],
  ["Které státy sousedí s Českem?", "Maďarsko, Německo, Rakousko, Ukrajina.", "Maďarsko, Polsko, Rakousko, Slovensko.", "Německo, Polsko, Rakousko, Slovensko.", "Německo, Polsko, Ukrajina, Slovensko.", 3],
  ["Nejvyšší hora v České republice je Sněžka. Jakou má přibližně nadmořskou výšku?", "800 metrů nad mořem.", "1 600 metrů nad mořem.", "2 400 metrů nad mořem.", "3 200 metrů nad mořem.", 2],
  ["Kladruby nad Labem a okolní krajina byly v roce 2019 zapsány na seznam světového dědictví UNESCO. Čím je tato obec a její okolí známá?", "Chovem koní.", "Těžbou stříbra.", "Bukovými lesy.", "Termálními prameny.", 1],
  ["Který národní park leží na Moravě?", "Národní park Podyjí.", "Národní park Šumava.", "Krkonošský národní park.", "Národní park České Švýcarsko.", 1],
  ["V Česku se nachází několik významných center zimních sportů. Které z těchto míst je známé jako centrum zimních sportů?", "Most.", "Třeboň.", "Poděbrady.", "Špindlerův Mlýn.", 4],
  ["Jizerskohorské bučiny jsou od roku 2021 na seznamu světového dědictví UNESCO. Které číslo na mapě označuje tuto přírodní památku?", "1.", "2.", "3.", "4.", 3, "img/18-4-0.png"],
  ["Orlík je přehrada, která zadržuje v Česku nejvíce vody. Jak se jmenuje řeka, na které se přehrada Orlík nachází?", "Labe.", "Vltava.", "Sázava.", "Morava.", 2],
  ["Památná hora Čechů se nachází v Ústeckém kraji blízko Roudnice nad Labem. Jak se tato hora jmenuje?", "Medvědín.", "Klínovec.", "Praděd.", "Říp.", 4, "img/18-6-0.png"],
  ["V roce 2019 byla na seznam památek UNESCO zapsána hornická kulturní krajina Krušnohoří. Které číslo na mapě označuje tento region?", "1.", "2.", "3.", "4.", 2, "img/18-7-0.png"],
  ["Které město zapsané na seznamu UNESCO leží v jižních Čechách?", "Třebíč.", "Kroměříž.", "Kutná Hora.", "Český Krumlov.", 4],
  ["Jak se jmenuje nejvyšší pohoří na Moravě?", "Krušné hory.", "Krkonoše.", "Jeseníky.", "Šumava.", 3],
  ["Které lázeňské město se nachází ve středních Čechách?", "Poděbrady.", "Luhačovice.", "Karlovy Vary.", "Mariánské Lázně.", 1],
  ["Ve kterém městě sídlí Západočeská univerzita (ZČU)?", "V Plzni.", "V Ústí nad Labem.", "V Karlových Varech.", "V Českých Budějovicích.", 1],
  ["Jak se jmenuje největší letiště v České republice?", "Praha-Kbely.", "Brno-Tuřany.", "Letiště Karlovy Vary.", "Letiště Václava Havla Praha.", 4],
  ["Kateřinu přijali ke studiu na Univerzitě Palackého, která je nejstarší univerzitou na Moravě. Ve městě, kde bude studovat, je také památka UNESCO – sloup Nejsvětější Trojice. Ve kterém městě bude Kateřina studovat?", "Ve Zlíně.", "V Jihlavě.", "V Olomouci.", "V Pardubicích.", 3, "img/19-3-0.png"],
  ["Kladno, Příbram a Mladá Boleslav jsou města, která se nacházejí v největším kraji České republiky. Ve kterém kraji se tato města nacházejí?", "V Ústeckém kraji.", "Ve Zlínském kraji.", "Ve Středočeském kraji.", "V Jihomoravském kraji.", 3],
  ["Které město je centrem Moravskoslezského kraje?", "Třebíč.", "Jihlava.", "Ostrava.", "Pardubice.", 3],
  ["Které číslo na mapě označuje Olomoucký kraj?", "1.", "2.", "3.", "4.", 3, "img/19-6-0.png"],
  ["Perník je tradiční české pečivo s medem a kořením. Které město je slavné díky výrobě perníku?", "Hořice.", "Pardubice.", "Karlovy Vary.", "Mariánské Lázně.", 2],
  ["Univerzita Tomáše Bati se jmenuje po významném podnikateli a zakladateli obuvnické firmy. Ve kterém krajském městě tato univerzita sídlí?", "V Brně.", "Ve Zlíně.", "V Ostravě.", "V Pardubicích.", 2],
  ["Jihlava je krajské město a leží blízko dálnice D1. Ve kterém kraji je město Jihlava?", "V Kraji Vysočina.", "V Pardubickém kraji.", "Ve Středočeském kraji.", "V Moravskoslezském kraji.", 1],
  ["Pan Novák jede autem na služební cestu z Prahy do Děčína. Použije dálnici D8. Kolem kterého krajského města musí do Děčína projet?", "Kolem Brna.", "Kolem Pardubic.", "Kolem Ústí nad Labem.", "Kolem Českých Budějovic.", 3],
  ["Česko má bohaté zásoby podzemních minerálních vod. Pramen minerální vody Vincentka se nachází v lázních Luhačovice. Které číslo na mapě označuje město Luhačovice?", "1.", "2.", "3.", "4.", 3, "img/20-1-0.png"],
  ["Který národní park leží u hranice Česka s Polskem?", "Národní park Podyjí.", "Šumavský národní park.", "Krkonošský národní park.", "Národní park České Švýcarsko.", 3],
  ["Třídění odpadu pomáhá chránit životní prostředí. Kterou barvu má kontejner na papír?", "Bílou.", "Žlutou.", "Modrou.", "Zelenou.", 3],
  ["Černé a Čertovo jezero jsou největšími přírodními jezery v České republice. Nacházejí se na Šumavě. Které číslo na mapě označuje tuto oblast?", "1.", "2.", "3.", "4.", 3, "img/20-4-0.png"],
  ["Tříděný odpad se ukládá do barevných kontejnerů. Co nepatří do žlutého kontejneru?", "Igelitové tašky.", "Plastové nádobí.", "PET láhve od nápojů.", "Skleněné láhve od nápojů.", 4],
  ["Pan Svoboda třídí odpad. Co dává do modrého kontejneru?", "Sklo.", "Papír.", "Plasty.", "Bioodpad.", 2],
  ["Nejmenší národní park České republiky je Národní park Podyjí. Nachází se v povodí moravské řeky Dyje. Které číslo na mapě označuje tento národní park?", "1.", "2.", "3.", "4.", 3, "img/20-7-0.png"],
  ["Jeden ze čtyř národních parků Česka je známý skálami a Pravčickou bránou. Který národní park to je?", "Národní park Podyjí.", "Národní park Šumava.", "Krkonošský národní park.", "Národní park České Švýcarsko.", 4],
  ["Tříděný odpad se ukládá do barevných kontejnerů. Co patří do zeleného kontejneru?", "Skleněné láhve.", "Noviny a časopisy.", "PET láhve od nápojů.", "Použité elektrické přístroje.", 1],
  ["V Česku se nacházejí čtyři území s nejvyšším stupněm ochrany přírody. Jak se tato území nazývají?", "Národní parky.", "Přírodní rezervace.", "Chráněné krajinné oblasti.", "Ochranná pásma vodního zdroje.", 1],
  ["Kolik obyvatel má přibližně Česká republika?", "5,9 milionu.", "10,9 milionu.", "15,9 milionu.", "20,9 milionu.", 2],
  ["Národnostní menšinou je skupina občanů České republiky, kteří se hlásí k jiné než", "Poláci.", "Němci.", "Slováci.", "Vietnamci.", 3],
  ["Kulturní region Haná je významnou zemědělskou oblastí a je známý lidovými", "Ostrava.", "Olomouc.", "Hradec Králové.", "České Budějovice.", 2],
  ["Která televize má podle zákona za úkol produkovat a vysílat vzdělávací programy", "Česká televize.", "Televize Nova.", "Televize Prima.", "Televize Barrandov.", 1],
  ["Kolik obyvatel má hlavní město Praha?", "Přibližně 500 000.", "Přibližně 1 400 000.", "Přibližně 6 500 000.", "Přibližně 10 900 000.", 2],
  ["Toto město bylo a je historickým centrem českého Slezska. Nachází se zde Slezská", "Brno.", "Opava.", "Jihlava.", "Kroměříž.", 2],
  ["Které náboženství je v Česku nejrozšířenější?", "Islám.", "Judaismus.", "Křesťanství.", "Buddhismus.", 3],
  ["Chodsko je jedním z českých regionů s bohatými lidovými tradicemi a kroji.", "1.", "2.", "3.", "4.", 1, "img/21-8-0.png"],
  ["Které tvrzení odpovídá postavení žen v české společnosti?", "Ženy nepracují v justici.", "Ženy nepracují v armádě.", "Ženy mají stejná práva jako muži.", "Ženy mají omezené volební právo.", 3],
  ["Brno je největším městem Moravy a také druhým největším městem České republiky. Kolik obyvatel přibližně žije v Brně?", "100 000.", "400 000.", "720 000.", "1 360 000.", 2],
  ["Ve kterém kraji je atomová elektrárna Temelín?", "V Ústeckém kraji.", "V Jihočeském kraji.", "V Jihomoravském kraji.", "V Moravskoslezském kraji.", 2],
  ["Která z těchto měst spojuje dálnice D1?", "Prahu a Pardubice.", "Prahu a Liberec.", "Prahu a Plzeň.", "Prahu a Brno.", 4],
  ["Jak se jmenuje slavný český podnik, který vyrábí klavíry?", "Amati.", "Petrof.", "Moser.", "Koh-i-noor.", 2],
  ["V Kopřivnici se vyrábí nákladní automobily tradiční značky. Jak se tato značka", "Tatra.", "Zetor.", "Škoda.", "Karosa.", 1],
  ["Který pivovar vyrábí pivo značky Pilsner Urquell?", "Starobrno.", "Staropramen.", "Plzeňský Prazdroj.", "Budějovický Budvar.", 3],
  ["Značka Kofola patří od 60. let 20. století mezi tradiční české značky. Které výrobky mají označení Kofola?", "Mléčné výrobky.", "Sportovní oblečení.", "Alkoholické nápoje.", "Nealkoholické nápoje.", 4],
  ["Z Prahy do Ostravy vede nejdůležitější železniční trať v Česku. Kterým z těchto měst tato železniční trať prochází?", "Brno.", "Jihlava.", "Liberec.", "Olomouc.", 4],
  ["Které elektrárny vyrábí nejvíce elektrické energie v České republice?", "Vodní.", "Větrné.", "Uhelné.", "Solární.", 3],
  ["Která značka osobních automobilů se vyrábí ve městě Mladá Boleslav?", "Hyundai.", "Peugeot.", "Škoda.", "Tatra.", 3],
  ["Tradiční českou značkou je Becherovka. Ve kterém městě se tento alkoholický nápoj vyrábí?", "V Plzni.", "V Praze.", "V Karlových Varech.", "V Českých Budějovicích.", 3],
  ["Jak se jmenuje mezinárodní vojenská organizace, která zajišťuje bezpečnost České republiky?", "NATO.", "CEFTA.", "Evropská unie.", "Varšavská smlouva.", 1],
  ["Česká republika je členem Evropské unie. Které z těchto měst je sídlem hlavních", "Řím.", "Paříž.", "Brusel.", "Londýn.", 3],
  ["V roce 2004 vstoupily do Evropské unie státy tzv. Visegrádské skupiny. Které čtyři státy tuto skupinu tvoří?", "Česko, Polsko, Rakousko, Slovinsko.", "Česko, Slovensko, Polsko, Německo.", "Česko, Slovensko, Maďarsko, Polsko.", "Česko, Slovensko, Maďarsko, Rakousko.", 3],
  ["Které město je sídlem Evropského soudu pro lidská práva?", "Haag.", "Brusel.", "Štrasburk.", "Lucemburk.", 3],
  ["V roce 2007 Česko vstoupilo do schengenského prostoru. Do které z těchto zemí může český občan cestovat bez kontroly na hranicích?", "Do Turecka.", "Do Německa.", "Do Velké Británie.", "Do Spojených států amerických.", 2],
  ["Evropskou unii nyní tvoří 27 států. Který stát vystoupil v roce 2020 z Evropské unie?", "Česko.", "Řecko.", "Dánsko.", "Velká Británie.", 4],
  ["Jaké právo mají v Evropské unii její občané, a tedy i občané České republiky?", "Právo volit předsedu Evropské komise.", "Právo volit poslance Evropského parlamentu.", "Právo volit eurokomisaře za jednotlivé členské státy.", "Právo hlasovat o přijímání nových států do Evropské unie.", 2],
  ["Evropská komise je výkonný orgán Evropské unie a řídí její politiku. Kolik zástupců má Česko v Evropské komisi?", "1.", "21.", "81.", "200.", 1],
  ["Česká republika je členem NATO. Které město je sídlem této organizace?", "Paříž.", "Brusel.", "Ženeva.", "Štrasburk.", 2],
  ["Vlajku Evropské unie tvoří skupina hvězd na modrém poli. Kolik hvězd je na vlajce EU?", "6.", "12.", "27.", "44.", 2],
  ["Kdo podle pověsti vystoupil na horu Říp?", "Praotec Čech.", "Přemysl Oráč.", "Kněžna Libuše.", "Vladyka Horymír.", 1],
  ["Která bitva ukončila v roce 1434 husitské náboženské války?", "Bitva u Lipan.", "Bitva u Slavkova.", "Bitva na Bílé hoře.", "Bitva na Moravském poli.", 1],
  ["Jan Žižka má jezdeckou sochu na vrchu Vítkově v Praze. Kdo byl Jan Žižka?", "Český král.", "Katolický kněz.", "Husitský bojovník.", "Renesanční umělec.", 3],
  ["Jak se podle pověstí jmenuje kněžna, která předpověděla slávu Prahy?", "Šárka.", "Vlasta.", "Libuše.", "Ludmila.", 3],
  ["Jak se jmenovali bratři, kteří šířili křesťanství na Velké Moravě?", "Cyril a Metoděj.", "Jaromír a Oldřich.", "Václav a Boleslav.", "Spytihněv a Vratislav.", 1],
  ["Jak se jmenoval první český rod knížat a králů, ke kterému patřil i svatý Václav?", "Jagellonci.", "Přemyslovci.", "Habsburkové.", "Lucemburkové.", 2],
  ["Kdo byl mistr Jan Hus?", "Český král.", "Český lékař.", "Český cestovatel.", "Český reformátor církve.", 4],
  ["Ze kterého rodu byl slavný český král a římský císař Karel IV.?", "Z rodu Jagellonců.", "Z rodu Habsburků.", "Z rodu Lucemburků.", "Z rodu Přemyslovců.", 3],
  ["Kdo založil první českou univerzitu?", "Karel IV.", "Jiří z Poděbrad.", "Přemysl Otakar II.", "Vladislav Jagellonský.", 1],
  ["Dcera krále Přemysla Otakara I. založila ve 13. století v Praze klášter a pečovala o nemocné a chudé. V roce 1989 ji papež prohlásil za svatou. Jak se tato žena jmenovala?", "Alžběta.", "Anežka.", "Hedvika.", "Markéta.", 2],
  ["Na přelomu 16. a 17. století se Praha stala kulturním centrem Evropy. Jak se jmenoval panovník, který tehdy v Čechách vládl?", "Rudolf II.", "Václav II.", "František II.", "Ferdinand II.", 1],
  ["Který rod začal vládnout Českému království v roce 1526 a vládl až do roku 1918?", "Jagellonci.", "Přemyslovci.", "Habsburkové.", "Lucemburkové.", 3],
  ["V roce 1618 se čeští nekatoličtí šlechtici postavili proti císaři. Tato událost začala válku, která se rozšířila téměř po celé Evropě. Jak se tato válka jmenuje?", "Zimní válka.", "Třicetiletá válka.", "Prusko-rakouská válka.", "Válka o rakouské dědictví.", 2],
  ["Ve kterém městě se odehrává pověst o Golemovi, kterého stvořil rabi Löw?", "V Plzni.", "V Praze.", "V Jihlavě.", "V Ostravě.", 2],
  ["V České republice se 28. března slaví Den učitelů a připomíná se narození „učitele národů“. Koho Češi považují za „učitele národů“?", "Jana Amose Komenského.", "Karla Havlíčka Borovského.", "Tomáše Garrigua Masaryka.", "Františka Ladislava Čelakovského.", 1],
  ["Jak se jmenovala slavná císařovna, která vládla v českých zemích v 18. století?", "Marie Terezie.", "Marie Antoinetta.", "Kunhuta Uherská.", "Eliška Přemyslovna.", 1],
  ["České země byly od roku 1867 součástí Rakouska-Uherska. Kdy přestalo existovat Rakousko-Uhersko?", "V roce 1914.", "V roce 1918.", "V roce 1938.", "V roce 1948.", 2],
  ["Jak se říká rozvoji české kultury v 19. století?", "Jaro národů.", "Normalizace.", "Národní obrození.", "Sametová revoluce.", 3],
  ["V roce 1618 se protestanté v českých zemích vzbouřili proti císaři, ale o dva roky později byli poraženi. Ve které bitvě císař porazil tyto protestanty?", "U Lipan.", "Na Vítkově.", "Na Bílé hoře.", "Na Moravském poli.", 3],
  ["Který panovník zavedl v českých zemích povinnou školní docházku pro děti?", "Josef II.", "Rudolf II.", "Marie Terezie.", "František Josef I.", 3],
  ["Co pro Československo znamenala mnichovská dohoda, kterou podepsalo Německo a další tři státy v září 1938?", "Začátek války.", "Obsazení Prahy.", "Ztrátu pohraničí.", "Ztrátu Slovenska.", 3],
  ["Jak se jmenovala jedna z českých obcí, kterou Němci po atentátu na Reinharda", "Lidice.", "Stadice.", "Hrusice.", "Věstonice.", 1],
  ["Jak se jmenoval československý prezident, který žil za 2. světové války ve Velké Británii?", "Edvard Beneš.", "Klement Gottwald.", "Antonín Zápotocký.", "Tomáš Garrigue Masaryk.", 1],
  ["Které velké armády osvobodily území Československa v roce 1945?", "Americká a anglická.", "Americká a sovětská.", "Americká a kanadská.", "Americká a francouzská.", 2],
  ["Co se stalo 17. listopadu 1939 na českém území?", "Nacisté zavřeli vysoké školy.", "Nacisté zcela zničili obec Lidice.", "Armády zemí Varšavské smlouvy obsadily Československo.", "Americká a sovětská armáda osvobodily území Československa.", 1],
  ["Kdo se stal prvním československým prezidentem v roce 1918?", "T. G. Masaryk.", "Edvard Beneš.", "Karel Kramář.", "Alois Rašín.", 1],
  ["Jak se jmenoval zastupující říšský protektor, na kterého spáchali Gabčík a Kubiš v roce 1942 v Praze atentát?", "K. H. Frank.", "Joseph Goebbels.", "Hermann Göring.", "Reinhard Heydrich.", 4],
  ["Který den si Česká republika připomíná konec druhé světové války – Den vítězství?", "6. července.", "8. května.", "28. října.", "28. září.", 2],
  ["Která historická událost předcházela vzniku Československa v roce 1918?", "Sametová revoluce.", "První světová válka.", "Druhá světová válka.", "Světová hospodářská krize.", 2],
  ["Kdy vznikl samostatný československý stát?", "29. září 1938.", "1. ledna 1993.", "28. října 1918.", "8. května 1945.", 3],
  ["Kdo se stal československým prezidentem v roce 1948 poté, co komunistická strana převzala moc ve státě?", "Edvard Beneš.", "Klement Gottwald.", "Antonín Zápotocký.", "Tomáš Garrigue Masaryk.", 2],
  ["Jak se jmenoval student, který se upálil v lednu 1969 v Praze na Václavském náměstí?", "Jan Palach.", "Jan Opletal.", "Martin Šmíd.", "Václav Sedláček.", 1],
  ["Jak dlouho trvala totalitní vláda Komunistické strany Československa?", "Přibližně 10 let.", "Přibližně 20 let.", "Přibližně 30 let.", "Přibližně 40 let.", 4],
  ["Jak se jmenoval dokument, kterým někteří občané v 70. letech 20. století protestovali proti komunistickému režimu?", "Poučení z krizového vývoje.", "Několik vět.", "2 000 slov.", "Charta 77.", 4],
  ["Která významná událost české historie se stala 21. srpna 1968?", "Začala okupace Československa vojsky Varšavské smlouvy.", "Z Československa se stala federativní republika.", "Na protest proti okupaci se upálil Jan Palach.", "Vznikl samostatný český a slovenský stát.", 1],
  ["Kdy začala v Československu sametová revoluce?", "8. května 1945.", "25. února 1948.", "17. listopadu 1939.", "17. listopadu 1989.", 4],
  ["Rok 1989 byl rokem velkých společenských změn. Václav Havel byl ještě v prvních měsících roku 1989 z politických důvodů ve vězení, ale na konci roku 1989 byl zvolen do významné politické funkce. Která funkce to byla?", "Předseda vlády.", "Prezident republiky.", "Ministr zahraničních věcí.", "Předseda Národního shromáždění.", 2],
  ["Jaký program měla protikomunistická občanská iniciativa Charta 77?", "Ozbrojený boj.", "Uměleckou tvorbu.", "Ochranu lidských práv.", "Vydávání české literatury v zahraničí.", 3],
  ["V letech 1949 až 1961 někteří odpůrci komunistického režimu pracovali jako političtí vězni v uranových dolech. U kterého z těchto měst byly uranové doly?", "Břeclav.", "Znojmo.", "Příbram.", "Litoměřice.", 3],
  ["Jak se jmenovala česká politička odsouzená v roce 1950 v politickém procesu k trestu smrti?", "Marie Majerová.", "Zdena Mašínová.", "Milada Horáková.", "Marta Gottwaldová.", 3],
  ["Kdy vznikla samostatná Česká republika?", "1. ledna 1993.", "28. října 1918.", "8. května 1945.", "17. listopadu 1989.", 1],
  ["Česká republika je od roku 1999 členem NATO. K čemu tato organizace slouží?", "K vědecké spolupráci.", "K vojenské spolupráci.", "K rozvojové spolupráci.", "K ekonomické spolupráci.", 2],
  ["Kdy Česká republika vstoupila do Evropské unie?", "V roce 1989.", "V roce 1993.", "V roce 1999.", "V roce 2004.", 4],
  ["Které dva státy vznikly po rozpadu Československa v roce 1993?", "Čechy a Morava.", "Česká republika a Slovenská republika.", "Protektorát Čechy a Morava a Slovenská republika.", "Česká socialistická republika a Slovenská socialistická republika.", 2],
  ["Kdy se v České republice slaví Den boje za svobodu a demokracii?", "28. října.", "8. května.", "6. července.", "17. listopadu.", 4],
  ["Kterou z těchto funkcí vykonával Václav Havel?", "Funkci předsedy vlády.", "Funkci předsedy Senátu.", "Funkci prezidenta republiky.", "Funkci předsedy Poslanecké sněmovny.", 3],
  ["Který den se slaví státní svátek Den obnovy samostatného českého státu?", "28. září.", "1. ledna.", "28. října.", "17. listopadu.", 2],
  ["Kdo se stal českým prezidentem po Václavu Havlovi v roce 2003?", "Jan Švejnar.", "Václav Klaus.", "Miloš Zeman.", "Vladimír Špidla.", 2],
  ["Kdo se stal českým prezidentem po Miloši Zemanovi v roce 2023?", "Petr Fiala.", "Petr Pavel.", "Andrej Babiš.", "Miloš Vystrčil.", 2],
  ["Kdy odešli z území Československa poslední sovětští vojáci, jejichž armáda obsadila Československo v roce 1968?", "V roce 1989.", "V roce 1991.", "V roce 1993.", "V roce 2004.", 2],
  ["Které z těchto hudebních děl složil Antonín Dvořák?", "Má vlast.", "Z Nového světa.", "Prodaná nevěsta.", "Česká mše vánoční.", 2],
  ["Jak se jmenuje hlavní postava nejznámějšího románu Jaroslava Haška?", "Markéta Lazarová.", "Josef Švejk.", "Babička.", "Josef K.", 2],
  ["Který český spisovatel získal Nobelovu cenu za literaturu?", "Franz Kafka.", "Jaroslav Hašek.", "Jaroslav Seifert.", "Bohumil Hrabal.", 3],
  ["Který slavný český režisér žil v USA a dostal dvě filmové ceny Oscar?", "Jan Svěrák.", "Jiří Menzel.", "Jan Hřebejk.", "Miloš Forman.", 4],
  ["Mendelova univerzita v Brně se jmenuje po Gregoru Johannu Mendelovi. Čím se tento muž zabýval?", "Architekturou.", "Klasickou hudbou.", "Historií a politikou.", "Pokusy s rostlinami.", 4],
  ["Které slovo jako první na světě použil český spisovatel Karel Čapek ve svém dramatu R.U.R.?", "Supernova.", "Astronaut.", "Skafandr.", "Robot.", 4],
  ["Jak se jmenoval český podnikatel a zakladatel významné strojírenské firmy v Plzni?", "Emil Škoda.", "Tomáš Baťa.", "Emil Kolben.", "Václav Laurin.", 1],
  ["Co vynalezl český chemik Otto Wichterle?", "Benzin.", "Lék penicilin.", "Plastickou trhavinu.", "Měkké kontaktní čočky.", 4],
  ["Jak se jmenuje literární dílo, které napsal Karel Hynek Mácha?", "Máj.", "Babička.", "F. L. Věk.", "Povídky malostranské.", 1],
  ["Ve kterém sportovním odvětví se proslavil Emil Zátopek?", "V lehké atletice.", "V cyklistice.", "Ve fotbale.", "V hokeji.", 1],

  ["Na kterém obrázku je Český Krumlov, město plné významných památek?", "img/30-1-1.png", "img/30-1-2.png", "img/30-1-3.png", "img/30-1-4.png", 1],
  ["Na kterém obrázku jsou Pražský hrad s gotickým Chrámem svatého Víta – symboly české státnosti?", "img/30-2-1.png", "img/30-2-2.png", "img/30-2-3.png", "img/30-2-4.png", 1],
  ["Na kterém obrázku je Národní divadlo v Praze?", "img/30-3-1.png", "img/30-3-2.png", "img/30-3-3.png", "img/30-3-4.png", 2],
  ["Na kterém obrázku je hrad Karlštejn, který založil Karel IV.?", "img/30-4-1.png", "img/30-4-2.png", "img/30-4-3.png", "img/30-4-4.png", 3],
  ["Na kterém obrázku je Petřínská rozhledna v Praze?", "img/30-5-1.png", "img/30-5-2.png", "img/30-5-3.png", "img/30-5-4.png", 2],
  ["Na obrázku je česká památka zapsaná v UNESCO. Jak se tato památka jmenuje?", "Zámek Litomyšl.", "Zámek Český Krumlov.", "Chrám sv. Barbory v Kutné Hoře.", "Kostel sv. Jana Nepomuckého na Zelené hoře.", 4, "img/30-6-0.png"],
  ["Koho představuje tato socha na pražském Vítkově?", "Jana Žižku.", "Miroslava Tyrše.", "Jiřího z Poděbrad.", "Tomáše Garrigua Masaryka.", 1, "img/30-7-0.png"],
  ["Vila Tugendhat (na obrázku) je na seznamu světového a kulturního dědictví UNESCO. Kde se nachází?", "V Olomouci.", "V Liberci.", "V Praze.", "V Brně.", 4, "img/30-8-0.png"],
  ["Orloj jsou středověké hodiny na věži. Na kterém obrázku je Pražský orloj?", "img/30-9-1.png", "img/30-9-2.png", "img/30-9-3.png", "img/30-9-4.png", 3],
  ["Na obrázku je známá pražská budova ve stylu secese. K čemu slouží tato budova?", "Je to banka.", "Je to letiště.", "Je to nádraží.", "Je to parlament.", 3, "img/30-10-0.png"]
];

let questionsOccupied = [];
let result = [];
let rightResults = [];
let chosenResults = [];

let questionAmount = localStorage.getItem('savedInput') ? localStorage.getItem('savedInput') : 30;
const inputField = document.getElementById('inputField');

inputField.value = questionAmount;

const x = questions.length;

if (x < questionAmount) {
    console.error("x < questionAmount");
} else {
    const uniqueNumbers = Array.from({ length: x }, (_, i) => i);

    for (let i = uniqueNumbers.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [uniqueNumbers[i], uniqueNumbers[j]] = [uniqueNumbers[j], uniqueNumbers[i]];
    }

    const resultArray = uniqueNumbers.slice(0, questionAmount);
    questionsOccupied = resultArray;
}

function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

for (let i = 1; i <= questionAmount; i++) {
    const questionDiv = document.createElement('div');
    questionDiv.classList.add('question-container');
    const title = document.createElement('h2');
    title.classList.add('question-title');
    title.textContent = `${i})  `+questions[questionsOccupied[i-1]][0];
    questionDiv.appendChild(title);
    try{
        if(questions[questionsOccupied[i-1]][6].startsWith("img/")){
            const img = document.createElement('img');
            img.setAttribute('src', questions[questionsOccupied[i-1]][6]);
            questionDiv.appendChild(img);
            img.classList.add('question-img');
        }
    }
    catch (error) {}

    for (let j = 1; j <= 4; j++) {
        const answerDiv = document.createElement('div');
        const answerInput = document.createElement('input');
        const answerA = document.createElement('a');
        answerInput.setAttribute('id', `question${i}`);
        answerInput.setAttribute('type', "radio");
        answerInput.setAttribute('value', j);
        answerInput.setAttribute('name', `question${i}`);
        answerInput.classList.add('answer-input');
        questionDiv.classList.add('answer-div');
        answerA.classList.add('answer-a');
        answerA.textContent = questions[questionsOccupied[i-1]][j];
        answerDiv.appendChild(answerInput);
        if(questions[questionsOccupied[i-1]][j].startsWith("img/")) {
            const img = document.createElement('img');
            img.setAttribute('src', questions[questionsOccupied[i-1]][j]);
            answerDiv.appendChild(img);
            img.classList.add('answer-img');
        }
        else{
            answerDiv.appendChild(answerA);
        }
        questionDiv.appendChild(answerDiv);
        answerDiv.style.order = getRandomInt(99);
    }
    
    container.appendChild(questionDiv);
}

const saveBtn = document.getElementById('saveBtn');
saveBtn.addEventListener('click', () => localStorage.setItem('savedInput', inputField.value));

function submitForm() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });

    const form = document.getElementById('quizForm');
    const formData = new FormData(form);
    const button = document.getElementById('submit-button');

    result = [];

    for (let i = 1; i <= questionAmount; i++) {
        const value = formData.get(`question${i}`);
        result.push(value ? parseInt(value, 10) : null);
    }

    console.log(result);
    button.innerHTML = "";
    checkAnswers();
    CheckSuccess();
}

function checkAnswers(){
    for(let i = 0; i <= questionAmount-1; i++){
        if(result[i] == questions[questionsOccupied[i]][5]){
            rightResults[i] = true;
        }
        else{
            rightResults[i] = false;
        }
    }

    console.log(rightResults);
    document.querySelector('#questions-container').innerHTML = "";

    for (let i = 1; i <= questionAmount; i++) {
        const questionDiv = document.createElement('div');
        questionDiv.classList.add('question-container');
        const title = document.createElement('h2');
        title.classList.add('question-title');
        title.textContent = `${i})  `+questions[questionsOccupied[i-1]][0];
    
        questionDiv.appendChild(title);

        try{
            if(questions[questionsOccupied[i-1]][6].startsWith("img/")){
                const img = document.createElement('img');
                img.setAttribute('src', questions[questionsOccupied[i-1]][6]);
                questionDiv.appendChild(img);
                img.classList.add('question-img');
            }
        }
        catch (error) {}
        
        for (let j = 1; j <= 4; j++) {
            const answerDiv = document.createElement('div');
            const answerA = document.createElement('a');
            questionDiv.classList.add('answer-div');
            answerA.classList.add('answer-a');
            answerA.textContent = questions[questionsOccupied[i-1]][j];
            questionDiv.appendChild(answerDiv);
            if(questions[questionsOccupied[i-1]][j].startsWith("img/")) {
                const img = document.createElement('img');
                img.setAttribute('src', questions[questionsOccupied[i-1]][j]);
                answerDiv.appendChild(img);
                img.classList.add('answer-img');
            }
            else{
                answerDiv.appendChild(answerA);
            }
            if(!rightResults[i-1] && j == result[i-1]){
                answerDiv.style.background = "red";
            }
            if(j == questions[questionsOccupied[i-1]][5] && result[i-1] != null){
                answerDiv.style.background = "rgb(16, 156, 40)";
            }
            if(j == questions[questionsOccupied[i-1]][5] && result[i-1] == null){
                answerDiv.style.background = "rgb(98, 194, 100)";
            }
        }
        container.appendChild(questionDiv);
    }
}

function CheckSuccess(){
    let rightAnswers = 0;
    let wrongAnswers = 0;
    for(let i = 0; i <= questionAmount-1; i++){
        if(rightResults[i]){
            rightAnswers++;
        }
        else{
            wrongAnswers++;
        }
    }
    const topDiv = document.querySelector(".top-section-content");
    topDiv.innerHTML = "";
    const pRight = document.createElement('p');
    const pWrong = document.createElement('p');
    const pRatio = document.createElement('p');
    const buttonRestart = document.createElement('button');

    pRight.classList.add('p-top');
    pRatio.classList.add('p-top');
    buttonRestart.classList.add('restart-button');

    pRight.textContent = "Správně jste zodpověděli "+rightAnswers+" otázek.";
    if(rightAnswers != 0){
        pRatio.textContent = "Váš úspěch je: "+Math.round((100/questionAmount)*rightAnswers)+"%";
    }
    else{
        pRatio.textContent = "Váš úspěch je: "+0+"%";
    }

    topDiv.appendChild(pRight);
    topDiv.appendChild(pRatio);
    topDiv.appendChild(buttonRestart);

    buttonRestart.textContent = "Spustit test znovu";
    buttonRestart.setAttribute('onclick', "ResetPage()");
}

function ResetPage(){
    location.reload();
}
