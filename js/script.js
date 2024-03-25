function toggle(btnMaisId, respostaId) {
    var plus = document.getElementById(btnMaisId);
    var minus = document.getElementById(btnMaisId.replace('btn-mais', 'btn-menos'));
    var restosta = document.getElementById(respostaId);

    if (plus.style.display === 'block' || plus.style.display === '') {
        plus.style.display = 'none';
        minus.style.display = 'block';
        restosta.style.display = 'block';
    } else {
        plus.style.display = 'block';
        minus.style.display = 'none';
        restosta.style.display = 'none';
    }
}

