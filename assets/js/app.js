function copyUrl() {
    var url = window.location.href;
    navigator.clipboard.writeText(url)
        .then(function () {
            Swal.fire({
                icon: 'success',
                title: '¡Copiado!',
                text: 'URL copiada al portapapeles',
                showConfirmButton: false,
                timer: 2500,
                customClass: {
                    popup: 'custom-popup'
                },
                iconColor: '#4caf50'
            });
        })
        .catch(function (error) {
            console.error('Error al copiar la URL: ', error);
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'No se pudo copiar la URL',
                customClass: {
                    popup: 'custom-popup'
                },
                iconColor: '#ff5722'
            });
        });
}