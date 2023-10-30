document.addEventListener("DOMContentLoaded", function () {
    const form = document.getElementById("calculator-form");
    const resultsDiv = document.getElementById("results");

    form.addEventListener("submit", function (e) {
        e.preventDefault();
        const unit1Note1 = parseFloat(document.getElementById("unit1-note1").value);
        const unit1Note2 = parseFloat(document.getElementById("unit1-note2").value);
        const unit2Note1 = parseFloat(document.getElementById("unit2-note1").value);
        const unit2Note2 = parseFloat(document.getElementById("unit2-note2").value);
        const unit3Note1 = parseFloat(document.getElementById("unit3-note1").value);
        const unit3Note2 = parseFloat(document.getElementById("unit3-note2").value);

        const unit1Weighted = (unit1Note1 * 0.12) + (unit1Note2 * 0.21);
        const unit2Weighted = (unit2Note1 * 0.12) + (unit2Note2 * 0.21);
        const unit3Weighted = (unit3Note1 * 0.13) + (unit3Note2 * 0.21);

        const totalWeighted = unit1Weighted + unit2Weighted + unit3Weighted;
        const average = totalWeighted / 1; 

        const studentName = document.getElementById("student-name").value;
        const subject = document.getElementById("subject").value;

        resultsDiv.innerHTML = `
            <p><strong>Nombre del estudiante:</strong> ${studentName}</p>
            <p><strong>Asignatura:</strong> ${subject}</p>
            <h3>Resultados por Unidad:</h3>
            <table>
                <tr>
                    <th>Unidad</th>
                    <th>Nota Ponderada</th>
                </tr>
                <tr>
                    <td>Unidad 1</td>
                    <td>${unit1Weighted.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Unidad 2</td>
                    <td>${unit2Weighted.toFixed(2)}</td>
                </tr>
                <tr>
                    <td>Unidad 3</td>
                    <td>${unit3Weighted.toFixed(2)}</td>
                </tr>
            </table>
            <p><strong>Promedio Final:</strong> ${average.toFixed(2)}</p>
        `;
        if (average >= 4.0) {
            resultsDiv.innerHTML += `<p class="pass-message">Has aprobado la asignatura</p>`;
        } else {
            resultsDiv.innerHTML += `<p class="fail-message">Has reprobado la asignatura</p>`;
        }
        resultsDiv.style.display = "block";
    });
});
