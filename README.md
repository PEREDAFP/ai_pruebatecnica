# Prueba de entrevista de trabajo con IA
_Vamos a crear un programa que mediante IA realice pruebas de programación mediante el Vercel AI SDK_

[Vercel AI SDK](https://sdk.vercel.ai/) - Página del proyecto


# Previo

_Debe estar instalada la versión node 20.6_

_Debe estar instalado el gestor de paquetes pnpm_

# Instalación
### Se crea el directorio de trabajo y se inicializa
```
mkdir directorio
cd directorio
pnpm init
```

### Se instalan los siguientes paquetes
```
pnpm add ai @ai-sdk/mistral zod dotenv  
pnpm add -D @types/node tsx typescript
```
_Hemos elegido el proveedor mistral, pueden utilizarse otros muchos_

# Configuración de la API KEY
_Se crea el fichero .env y en el:_
```
MISTRAL_API_KEY="clave API en el proveedor"
```

_Si se utiliza otro proveedor se debe cambiar el nombre de la variable de entorno por la de NOMBREPROVEEDOR_API_KEY_ 

# Para cambiar el comportamiento
_Basta con cambiar system dentro de StreamText con el prompt que se desee_


# Autor
_Se está trabajando con el código de ejemplo para NodeJS de la propia página de Vercel_
