document.writeln("Counting:");
for (var i = 1; i <= 15; i++) {
    document.writeln(i + ' ,');
}


document.writeln("<br>" + "Reverse Counting:");
for (var i = 10; i >= 1; i--) {
    document.writeln(i + ' ,');
}

document.writeln("<br>" + "Even:");
for (var i = 0; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(i + ' ,');
    }

}
document.writeln("<br>" + "Odd:");
for (var i = 0; i <= 20; i++) {
    if (i % 2 != 0) {
        document.writeln(i + ' ,');
    }

}

document.writeln("<br>" + "Series:");
for (var i = 2; i <= 20; i++) {
    if (i % 2 === 0) {
        document.writeln(i + 'K ,');
    }
}
