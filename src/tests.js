function test(offset, message, resultMessage) {
    const result = cipher(offset, message);
    if (result === resultMessage) {
        console.log("correto!", message, "->", result, "===", resultMessage);
    } else {
        console.log("errado!", message, "->", result, "!==", resultMessage);
    }
}



test(2, "aa", "cc");
test(1, "caiozinho", "dbjpajoip");
test(10, "AAAAAA", "KKKKKK");
test(35, "Karine", "Tjarwn");
test(15, "Sooma", "Hddbp");
test(50, "elma", "cjky");
test(80, "Almeida", "Cnogkfc");
test(100, "tudo bom", "pqzk xki");
test(30, "Flores", "Jpsviw");
test(10, "Lembrar de comprar arroz", "Vowlbkb no mywzbkb kbbyj");
test(5, "E sorvete", "J xtwajyj");
test(8, "Lavar a roupa tambem", "Tidiz i zwcxi biujmu");
test(12, "Lion", "Xuaz");
test(7, "Agua", "Hnbh");
test(-1, "aazz", "zzyy");