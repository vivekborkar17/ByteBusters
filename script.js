document.addEventListener("DOMContentLoaded", function () {
    const requestForm = document.getElementById("requestForm");
    const successMessage = document.getElementById("successMessage");

    requestForm.addEventListener("submit", function (e) {
        e.preventDefault();
        const patientName = document.getElementById("patientName").value;
        const needs = document.getElementById("needs").value;

        // You can implement your logic for handling the patient request here.
        // For a real platform, you would send the data to a server for processing.

        // For this basic example, we will just show a success message.
        successMessage.classList.remove("hidden");
        requestForm.reset();
    });
});
