/* ==========================================================================
   auth.js · Mi cuenta
   - Cambia entre «Log in» y «Sign up» (también con #login / #signup en la URL).
   - Valida los formularios en el navegador con mensajes accesibles.
   - No hay servidor: al enviar solo se muestra un mensaje de demostración.
   ========================================================================== */

// IA: generado
(function (Mayco) {
  'use strict';

  const login = document.getElementById('login');
  const signup = document.getElementById('signup');
  if (!login || !signup) return;

  const CLAVE_USUARIO = 'mayco-usuario-recordado';
  const formLogin = login.querySelector('[data-login]');
  const formSignup = signup.querySelector('[data-signup]');

  /* ==========================================================
     CAMBIO ENTRE FORMULARIOS
     ========================================================== */
  function mostrar(cual, moverFoco) {
    const activo = cual === 'signup' ? signup : login;
    [login, signup].forEach((seccion) => seccion.classList.toggle('is-active', seccion === activo));
    if (moverFoco) activo.querySelector('.auth-form__title').focus();
  }

  document.addEventListener('click', (evento) => {
    const enlace = evento.target.closest('[data-auth-cambiar]');
    if (!enlace) return;
    evento.preventDefault();
    const destino = enlace.getAttribute('href').slice(1);
    history.replaceState(null, '', `#${destino}`);
    mostrar(destino, true);
  });

  mostrar(window.location.hash === '#signup' ? 'signup' : 'login', false);

  // Si la dirección cambia a #login o #signup sin recargar (por ejemplo,
  // con «Atrás» del navegador), se muestra el formulario que toca.
  window.addEventListener('hashchange', () => {
    if (window.location.hash === '#signup' || window.location.hash === '#login') {
      mostrar(window.location.hash.slice(1), true);
    }
  });

  /* ==========================================================
     VALIDACIÓN
     Cada regla devuelve un mensaje de error o una cadena vacía.
     ========================================================== */
  const reglas = {
    'login-usuario': (valor) => (valor.trim() ? '' : 'Escribe tu usuario.'),
    'login-password': (valor) => (valor ? '' : 'Escribe tu contraseña.'),
    'signup-nombre': (valor) => (valor.trim() ? '' : 'Escribe tu nombre.'),
    'signup-correo': (valor) => {
      if (!valor.trim()) return 'Escribe tu correo.';
      return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(valor.trim()) ? '' : 'Correo no válido (ej.: nombre@empresa.com).';
    },
    'signup-password': (valor) => (valor.length >= 8 ? '' : 'Mínimo 8 caracteres.'),
    'signup-confirmar': (valor) => (valor && valor === formSignup.querySelector('#signup-password').value ? '' : 'No coinciden.'),
  };

  function validar(formulario) {
    let primerError = null;
    formulario.querySelectorAll('.field__input').forEach((campo) => {
      const regla = reglas[campo.id];
      if (!regla) return;
      const mensaje = regla(campo.value);
      Mayco.error(campo, mensaje);
      if (mensaje && !primerError) primerError = campo;
    });
    if (primerError) primerError.focus();
    return !primerError;
  }

  // Al corregir un campo con error, el mensaje desaparece
  document.addEventListener('input', (evento) => {
    const campo = evento.target;
    if (campo.getAttribute('aria-invalid') === 'true' && reglas[campo.id] && !reglas[campo.id](campo.value)) {
      Mayco.error(campo, '');
    }
  });

  function mensaje(formulario, texto) {
    formulario.querySelector('[data-form-mensaje]').textContent = texto;
  }

  /* ==========================================================
     LOG IN
     ========================================================== */
  const campoUsuario = formLogin.querySelector('#login-usuario');
  const recordar = formLogin.querySelector('[name="recordar"]');

  try {
    const guardado = localStorage.getItem(CLAVE_USUARIO);
    if (guardado) {
      campoUsuario.value = guardado;
      recordar.checked = true;
    }
  } catch (error) {
    // Sin localStorage no se recuerda el usuario
  }

  formLogin.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensaje(formLogin, '');
    if (!validar(formLogin)) return;

    try {
      if (recordar.checked) localStorage.setItem(CLAVE_USUARIO, campoUsuario.value.trim());
      else localStorage.removeItem(CLAVE_USUARIO);
    } catch (error) {
      // Sin localStorage no se recuerda el usuario
    }
    mensaje(formLogin, `Hola, ${campoUsuario.value.trim()}. Inicio de sesión de demostración: esta web no tiene servidor.`);
  });

  /* ==========================================================
     SIGN UP
     ========================================================== */
  formSignup.addEventListener('submit', (evento) => {
    evento.preventDefault();
    mensaje(formSignup, '');
    if (!validar(formSignup)) return;

    const nombre = formSignup.querySelector('#signup-nombre').value.trim();
    mensaje(formSignup, `Cuenta de demostración creada, ${nombre}. Ahora puedes iniciar sesión.`);
    campoUsuario.value = formSignup.querySelector('#signup-correo').value.trim();
    formSignup.reset();
  });
})(window.Mayco);
