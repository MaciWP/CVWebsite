// src/serviceWorkerRegistration.js

// Este archivo es una adaptación del archivo serviceWorkerRegistration.js proporcionado por Create React App.
// Puedes copiar el contenido de este archivo desde el repositorio oficial de Create React App.

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
      // [::1] es la dirección localhost en IPv6.
      window.location.hostname === '[::1]' ||
      // 127.0.0.1/8 es considerado localhost para IPv4.
      window.location.hostname.match(
        /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
      )
  );
  
  export function register(config) {
    if ('serviceWorker' in navigator) {
      // El constructor de URL está disponible en todos los navegadores que soportan SW.
      const publicUrl = new URL(process.env.PUBLIC_URL, window.location.href);
      if (publicUrl.origin !== window.location.origin) {
        // Nuestro service worker no funcionará si PUBLIC_URL está en un origen diferente.
        return;
      }
  
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/service-worker.js`;
  
        if (isLocalhost) {
          // Esto es localhost. Comprobar si el service worker existe.
          checkValidServiceWorker(swUrl, config);
  
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'Esta aplicación web está siendo servida en caché por un service worker.'
            );
          });
        } else {
          // No es localhost. Registrar service worker.
          registerValidSW(swUrl, config);
        }
      });
    }
  }
  
  function registerValidSW(swUrl, config) {
    navigator.serviceWorker
      .register(swUrl)
      .then((registration) => {
        if (registration.waiting) {
          if (config && config.onUpdate) {
            config.onUpdate(registration);
          }
          return;
        }
  
        registration.onupdatefound = () => {
          const installingWorker = registration.installing;
          if (installingWorker == null) {
            return;
          }
          installingWorker.onstatechange = () => {
            if (installingWorker.state === 'installed') {
              if (navigator.serviceWorker.controller) {
                // Nuevo contenido está disponible.
                if (config && config.onUpdate) {
                  config.onUpdate(registration);
                }
              } else {
                // Contenido precacheado ha sido instalado.
                if (config && config.onSuccess) {
                  config.onSuccess(registration);
                }
              }
            }
          };
        };
      })
      .catch((error) => {
        console.error('Error al registrar el service worker:', error);
      });
  }
  
  function checkValidServiceWorker(swUrl, config) {
    // Comprueba si el service worker puede ser encontrado.
    fetch(swUrl, {
      headers: { 'Service-Worker': 'script' },
    })
      .then((response) => {
        // Asegúrate de que el service worker existe y de que podemos obtenerlo.
        const contentType = response.headers.get('content-type');
        if (
          response.status === 404 ||
          (contentType != null && contentType.indexOf('javascript') === -1)
        ) {
          // No hay service worker. Recarga la página.
          navigator.serviceWorker.ready.then((registration) => {
            registration.unregister().then(() => {
              window.location.reload();
            });
          });
        } else {
          // Service worker encontrado. Procede con normalidad.
          registerValidSW(swUrl, config);
        }
      })
      .catch(() => {
        console.log(
          'No se pudo conectar al servidor para verificar el service worker.'
        );
      });
  }
  
  export function unregister() {
    if ('serviceWorker' in navigator) {
      navigator.serviceWorker.ready
        .then((registration) => {
          registration.unregister();
        })
        .catch((error) => {
          console.error(error.message);
        });
    }
  }
  