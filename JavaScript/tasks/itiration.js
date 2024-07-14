document.write("<table>")
for (let i = 0; i < 3; i++) {
    var string = prompt("Enter ur sentence..");
    document.write(`
            <tr>
                <td>${string}</td>
            </tr>
        `);


}

document.write("</table>")