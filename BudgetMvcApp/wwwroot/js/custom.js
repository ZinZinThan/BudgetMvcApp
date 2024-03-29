
function showMessage(data, url) {
    if (data.isSuccess) {
        successMessage(data.message, url);
    }
    else {
        errorMessage(data.message);
    }
}

function successMessage(message, url) {
    Swal.fire({
        title: "Success!",
        text: message,
        icon: "success",
        confirmButtonText: "Ok",
    }).then((result) => {
        if (result.isConfirmed && url != undefined) {
            location.href = url;
        }
    });
}

function confirmMessage(message) {
    return new Promise((resolve, reject) => {
        Swal.fire({
            title: "Confirm",
            text: message,
            icon: "warning",
            showCancelButton: true,
        }).then((result) => {
            // return result.isConfirmed;
            resolve(result.isConfirmed)
        });
    });
}

function warningMessage(message) {
    Swal.fire({
        title: "Warning!",
        text: message,
        icon: "warning",
    });
}

function errorMessage(message) {
    Swal.fire({
        title: "Error!",
        text: message,
        icon: "error",
    });
}

function notiMessage(data, url) {
    if (data.isSuccess) {
        Notiflix.Notify.success(data.message);
        location.href = url;
    }
    else {
        Notiflix.Notify.failure(data.message);
    }
}