// src/serviceWorkerRegistration.js

// Adjusted the service worker registration script to match the public URL path

const isLocalhost = Boolean(
    window.location.hostname === 'localhost' ||
    window.location.hostname === '[::1]' ||
    window.location.hostname.match(
      /^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/
    )
  );
  
  export function register(config) {
    if ('serviceWorker' in navigator) {
      window.addEventListener('load', () => {
        const swUrl = `${process.env.PUBLIC_URL}/cv/service-worker.js`; // Adjusted path
  
        if (isLocalhost) {
          // Check if a service worker still exists or not
          checkValidServiceWorker(swUrl, config);
  
          navigator.serviceWorker.ready.then(() => {
            console.log(
              'This web app is being served cache-first by a service worker.'
            );
          });
        } else {
          // Is not localhost. Just register service worker
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
  