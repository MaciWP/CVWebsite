import os

def juntar_textos(directorios_origen, archivo_salida, extensiones=None, exclusiones=None):
    """
    Recorre múltiples directorios_origen y sus subdirectorios, lee los archivos de texto
    y los junta en un solo archivo de salida incluyendo el nombre y la ruta de cada archivo.

    :param directorios_origen: Lista de rutas de directorios o archivos donde buscar los archivos.
    :param archivo_salida: Nombre del archivo de salida donde se juntarán los textos.
    :param extensiones: Tupla de extensiones de archivos a procesar (por ejemplo, ('.txt', '.md')). Si es None, se procesarán todos los archivos.
    :param exclusiones: Lista de nombres de archivos o rutas completas a excluir.
    """
    exclusiones = exclusiones or []
    with open(archivo_salida, 'w', encoding='utf-8') as salida:
        for directorio in directorios_origen:
            if os.path.isdir(directorio):
                # Es un directorio, recorrer sus contenidos
                for raiz, dirs, archivos in os.walk(directorio):
                    for archivo in archivos:
                        ruta_completa = os.path.join(raiz, archivo)
                        # Verificar si el archivo está en la lista de exclusiones
                        if ruta_completa in exclusiones or archivo in exclusiones:
                            print(f'Archivo excluido: {ruta_completa}')
                            continue
                        # Verificar extensiones si se especificaron
                        if extensiones:
                            if not archivo.lower().endswith(extensiones):
                                continue  # Saltar archivos que no coinciden con las extensiones
                        try:
                            with open(ruta_completa, 'r', encoding='utf-8') as f:
                                contenido = f.read()
                            # Escribir el encabezado con el nombre y la ruta del archivo
                            salida.write(f'=== Archivo: {archivo} ===\n')
                            salida.write(f'Ruta: {ruta_completa}\n\n')
                            # Escribir el contenido del archivo
                            salida.write(contenido)
                            salida.write('\n\n')  # Separar cada archivo con líneas en blanco
                        except Exception as e:
                            print(f'No se pudo leer el archivo {ruta_completa}: {e}')
            elif os.path.isfile(directorio):
                # Es un archivo individual
                ruta_completa = directorio
                archivo = os.path.basename(ruta_completa)
                # Verificar si el archivo está en la lista de exclusiones
                if ruta_completa in exclusiones or archivo in exclusiones:
                    print(f'Archivo excluido: {ruta_completa}')
                    continue
                # Verificar extensiones si se especificaron
                if extensiones:
                    if not archivo.lower().endswith(extensiones):
                        print(f'Archivo omitido por extensión: {ruta_completa}')
                        continue
                try:
                    with open(ruta_completa, 'r', encoding='utf-8') as f:
                        contenido = f.read()
                    # Escribir el encabezado con el nombre y la ruta del archivo
                    salida.write(f'=== Archivo: {archivo} ===\n')
                    salida.write(f'Ruta: {ruta_completa}\n\n')
                    # Escribir el contenido del archivo
                    salida.write(contenido)
                    salida.write('\n\n')  # Separar cada archivo con líneas en blanco
                except Exception as e:
                    print(f'No se pudo leer el archivo {ruta_completa}: {e}')
            else:
                print(f'La ruta especificada no es un directorio ni un archivo válido: {directorio}')

if __name__ == "__main__":
    # Configuración
    directorios_input = "/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/src,/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/public,/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/package.json"
    # Dividir las rutas por comas y eliminar espacios en blanco
    directorios = [ruta.strip() for ruta in directorios_input.split(',') if ruta.strip()]
    
    if not directorios:
        print("No se proporcionaron rutas de directorios válidas. El script se cerrará.")
        exit(1)
    
    salida = "combinado.txt".strip()
    if not salida:
        print("No se proporcionó un nombre para el archivo de salida. El script se cerrará.")
        exit(1)
    
    # Opcional: especificar extensiones, separadas por comas, por ejemplo: .txt,.md
    extensiones_input = ".tsx,.json,.html,.jsx,.js,.css,.scss".strip()
    if extensiones_input:
        # Asegurarse de que cada extensión comience con un punto y esté en minúsculas
        extensiones = tuple(
            ext.lower() if ext.startswith('.') else f'.{ext.lower()}' 
            for ext in extensiones_input.split(',') if ext.strip()
        )
    else:
        extensiones = None
    
    # Especificar archivos a excluir, separados por comas
    exclusiones_input = "/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/src/assets/animations/introAnimation.json,/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/src/excluir1.js,/Users/oriol/Desktop/Bjumper/PERSONAL/REPO/CV/cv/public/excluir2.html,excluir3.css"
    # Dividir las exclusiones por comas y eliminar espacios en blanco
    exclusiones = [ruta.strip() for ruta in exclusiones_input.split(',') if ruta.strip()]
    
    if exclusiones:
        print(f'Archivos a excluir: {exclusiones}')
    else:
        exclusiones = None
    
    juntar_textos(directorios, salida, extensiones, exclusiones)
    print(f'Todos los archivos han sido combinados en {salida}')
