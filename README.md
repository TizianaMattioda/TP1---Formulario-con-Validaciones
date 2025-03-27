# 📝 **README - Formulario de Registro**

## 🎨 Diseño
Para lograr una interfaz moderna y atractiva, combinamos la potencia de **Bootstrap 5** con **CSS personalizado**.

### 🔹 Bootstrap
Utilizamos Bootstrap para estructurar y dar estilo a los elementos del formulario de manera rápida y responsiva.  
Gracias a su sistema de **grid**, logramos una distribución equilibrada de los campos en distintos tamaños de pantalla.  
Además, sus componentes como **cards** y **botones** nos facilitaron la construcción de un diseño limpio y profesional.

### 🎨 CSS Personalizado
Para no depender completamente de Bootstrap, creamos nuestro propio archivo `styles.css`, donde personalizamos los colores, sombras y efectos para lograr una identidad visual más marcada.  
Algunos puntos destacados:

- **🎨 Fondo con degradado:**  
  ```css
  background: linear-gradient(to right, #667eea, #764ba2);

---

## ⚙️ **Validaciones y Funciones**

### 🚨 `showError(input, message)`
🔴 **Muestra un mensaje de error en rojo debajo del campo correspondiente.**

```javascript
const errorSpan = document.getElementById(`error${input.id.charAt(0).toUpperCase() + input.id.slice(1)}`);
```
✔️ Cambia su texto y aplica la clase `text-danger`.

---

### ✅ `showSuccess(input)`
🟢 **Muestra un check (✓) en verde si el campo es válido.**

✔️ Usa la misma lógica que `showError` para encontrar el `<small>` y cambia su contenido y estilo.

---

### 🔄 `resetSpan(input)`
❌ **Borra el mensaje de error o éxito cuando el formulario se reinicia.**

✔️ Limpia el texto del `<small>` y elimina las clases de color.

---

## 🧐 **Funciones de Validación**

### 📌 `validarNombre()`
🔹 Verifica que el nombre tenga al menos **3 caracteres**.

```javascript
if (nombre.value.length < 3) {
    showError(nombre, "El nombre debe tener al menos 3 caracteres");
} else {
    showSuccess(nombre);
}
```

---

### 📧 `validarEmail()`
🔹 Valida que el email tenga un formato correcto usando una **expresión regular**:

```javascript
const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
```

✔️ Si no cumple, muestra el error con `showError(email, "Ingrese un email válido")`.
✔️ Si es válido, usa `showSuccess(email)`.

---

### 🔑 `validarPassword()`
🔹 Comprueba que la contraseña tenga al menos **8 caracteres, una letra y un número**:

```javascript
const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{8,}$/;
```

✔️ Si no cumple, muestra `showError(password, "Mínimo 8 caracteres, una letra y un número")`.
✔️ Si es válida, usa `showSuccess(password)`.

---

### 🔄 `validarConfirmPassword()`
🔹 Comprueba que la **confirmación de contraseña** coincida con la ingresada.

✔️ Si no coinciden, usa `showError(confirmPassword, "Las contraseñas no coinciden")`.
✔️ Si coinciden, usa `showSuccess(confirmPassword)`.

---

## ⌨️ **Eventos**

### 🎯 **Eventos `input` en los campos**
Ejecuta las funciones de validación en tiempo real al escribir en los campos.

```javascript
nombre.addEventListener("input", validarNombre);
email.addEventListener("input", validarEmail);
password.addEventListener("input", validarPassword);
confirmPassword.addEventListener("input", validarConfirmPassword);
```

---

### 📤 **Evento `submit` en el formulario**
Previene el envío si hay errores:

```javascript
e.preventDefault();
```

✔️ Si todas las validaciones son correctas, muestra un mensaje de éxito y resetea el formulario:

```javascript
alert("Registro exitoso");
form.reset();
```

✔️ Luego, borra los mensajes de validación llamando a `resetSpan()` en cada campo.

---

## 🔥 **Desafíos a la hora de resolver el trabajo**

📌 Lo que más nos costó fue hacer las validaciones **en tiempo real**, ya que antes usábamos la función `onclick`, hasta que descubrimos `EventListener`. 

📌 También se nos complicó hacer que **aparezcan los errores en pantalla** cuando algún dato estaba mal. Lo solucionamos usando un **id** para cada error (ejemplo: `errorNombre`) y haciendo que el `span` pase de vacío (`" "`) a mostrar el mensaje en **color rojo** (`"El nombre debe tener al menos 3 caracteres"`).

---

## 🔄 **Qué mejoraríamos**

⚡ **Nos hubiera gustado implementar funcionalidades extra**, pero estuvimos ocupados con otros trabajos y nos enfocamos en cumplir con lo mínimo necesario para entregar el TP.
