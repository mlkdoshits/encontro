async function verificarSenha() {
    const senhaDigitada = document.getElementById('input-senha').value;
    
    // Converte a senha digitada em bytes
    const msgBuffer = new TextEncoder().encode(senhaDigitada);
    // Gera o hash SHA-256
    const hashBuffer = await crypto.subtle.digest('SHA-256', msgBuffer);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    const senhaHash = hashArray.map(b => b.toString(16).padStart(2, '0')).join('');

    // Hash correspondente à senha secreta
    const hashCorreto = 'ef92b778bafe771e89245b89ecbc08a44a4e166c06659911881f383d4473e94f';

    if (senhaHash === hashCorreto) {
        nextScreen(1);
    } else {
        alert('Senha incorreta! Tente novamente.');
    }
}
