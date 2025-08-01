# Configuración del Formulario de Contacto con EmailJS

Para que el formulario de contacto funcione correctamente y envíe emails a `j.segura.illana@gmail.com`, necesitas configurar EmailJS. Sigue estos pasos:

## 1. Crear cuenta en EmailJS

1. Ve a [https://www.emailjs.com/](https://www.emailjs.com/)
2. Crea una cuenta gratuita
3. Verifica tu email

## 2. Configurar el servicio de email

1. En el dashboard de EmailJS, ve a "Email Services"
2. Haz clic en "Add New Service"
3. Selecciona tu proveedor de email (Gmail, Outlook, etc.)
4. Sigue las instrucciones para conectar tu cuenta de email
5. Anota el **Service ID** que se genera

## 3. Crear una plantilla de email

1. Ve a "Email Templates"
2. Haz clic en "Create New Template"
3. Configura la plantilla con estos campos:
   - **From Name**: {{from_name}}
   - **From Email**: {{from_email}}
   - **To Email**: j.segura.illana@gmail.com
   - **Subject**: Nuevo mensaje desde tu portafolio
   - **Content**: 
     ```
     Has recibido un nuevo mensaje desde tu portafolio:
     
     Nombre: {{from_name}}
     Email: {{from_email}}
     
     Mensaje:
     {{message}}
     ```
4. Guarda la plantilla y anota el **Template ID**

## 4. Obtener la clave pública

1. Ve a "Account" > "General"
2. Copia tu **Public Key**

## 5. Actualizar el código

En el archivo `script.js`, reemplaza:

```javascript
// Línea 3: Reemplaza 'YOUR_PUBLIC_KEY' con tu clave pública
emailjs.init('G4kBg2ykXOLnw5A2C');

// Línea 81: Reemplaza 'YOUR_SERVICE_ID' y 'YOUR_TEMPLATE_ID'
emailjs.send('service_lhjl2ot', 'template_9e9wtoo', templateParams)
```

## 6. Probar el formulario

1. Abre tu portafolio en el navegador
2. Ve a la sección de contacto
3. Llena el formulario y envía un mensaje de prueba
4. Verifica que recibas el email en `j.segura.illana@gmail.com`

## Notas importantes

- EmailJS tiene un límite de 200 emails gratuitos por mes
- Los emails pueden tardar unos minutos en llegar
- Revisa la carpeta de spam si no recibes el email
- Mantén tus claves seguras y no las compartas públicamente

¡Una vez configurado, tu formulario de contacto estará completamente funcional!