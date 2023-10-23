for (var i = 1; i <= 10; i++) {
    document.write("<tr>");
    document.write("<th>" + i + "</th>");
    for (var j = 1; j <= 10; j++) {
        var result = i * j;
        document.write("<td>" + result + "</td>");
    }
    document.write("</tr>");
}
