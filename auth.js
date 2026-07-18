var USUARIOS = [
    { usuario: 'admin', contrasena: 'uanchi2026', nombre: 'Administrador' },
    { usuario: 'invitado', contrasena: 'criminal2026', nombre: 'Invitado' },
    { usuario: 'estudio1', contrasena: 'perito2026', nombre: 'Estudiante 1' },
    { usuario: 'estudio2', contrasena: 'forense2026', nombre: 'Estudiante 2' },
    { usuario: 'estudio3', contrasena: 'dactilar2026', nombre: 'Estudiante 3' },
    { usuario: 'estudio4', contrasena: 'identidad2026', nombre: 'Estudiante 4' },
    { usuario: 'estudio5', contrasena: 'evidencia2026', nombre: 'Estudiante 5' },
    { usuario: 'estudio6', contrasena: 'huellas2026', nombre: 'Estudiante 6' },
    { usuario: 'estudio7', contrasena: 'morfologia2026', nombre: 'Estudiante 7' },
    { usuario: 'estudio8', contrasena: 'genetica2026', nombre: 'Estudiante 8' },
    { usuario: 'estudio9', contrasena: 'sangre2026', nombre: 'Estudiante 9' },
    { usuario: 'estudio10', contrasena: 'vucetich2026', nombre: 'Estudiante 10' },
    { usuario: 'docente1', contrasena: 'academia2026', nombre: 'Docente 1' },
    { usuario: 'docente2', contrasena: 'catedra2026', nombre: 'Docente 2' },
    { usuario: 'docente3', contrasena: 'profesor2026', nombre: 'Docente 3' }
];

var AUTH_KEY = 'unachi_auth';
var AUTH_USER_KEY = 'unachi_user';

function login(username, password) {
    for (var i = 0; i < USUARIOS.length; i++) {
        if (USUARIOS[i].usuario === username && USUARIOS[i].contrasena === password) {
            sessionStorage.setItem(AUTH_KEY, 'true');
            sessionStorage.setItem(AUTH_USER_KEY, USUARIOS[i].nombre);
            return true;
        }
    }
    return false;
}

function logout() {
    sessionStorage.removeItem(AUTH_KEY);
    sessionStorage.removeItem(AUTH_USER_KEY);
    window.location.href = 'login.html';
}

function isLoggedIn() {
    return sessionStorage.getItem(AUTH_KEY) === 'true';
}

function requireAuth() {
    if (!isLoggedIn()) {
        window.location.href = 'login.html';
    }
}

function getUserName() {
    return sessionStorage.getItem(AUTH_USER_KEY) || 'Usuario';
}
