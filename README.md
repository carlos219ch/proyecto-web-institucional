# 🎓 Instituto Lumina — Proyecto Web Colaborativo

Proyecto base para el trabajo colaborativo. Cada equipo trabaja **únicamente su sección**.

---

## 📁 Estructura del proyecto

```
proyecto-web/
├── index.html        ← Todas las secciones están aquí
├── css/
│   └── styles.css    ← Estilos organizados por sección
├── js/
│   └── script.js     ← JavaScript del sitio
└── img/              ← Imágenes (agregar aquí)
```

---

## 👥 Secciones y responsables

| Sección     | Equipo | Rama Git           |
|-------------|--------|--------------------|
| Header      | ___    | `seccion-header`      |
| Presentación | ___   | `seccion-presentacion`|
| Servicios   | ___    | `seccion-servicios`   |
| Nosotros    | ___    | `seccion-nosotros`    |
| Contacto    | ___    | `seccion-contacto`    |
| Footer      | ___    | `seccion-footer`      |

---

## 🚀 Cómo empezar

### 1. Clonar el repositorio
```bash
git clone https://github.com/TU-USUARIO/proyecto-web.git
cd proyecto-web
```

### 2. Crear tu rama
```bash
git checkout -b seccion-TUNOMBRE
```

### 3. Trabajar solo tu sección
- En `index.html`: modifica **únicamente** el bloque con el comentario de tu sección
- En `styles.css`: modifica **únicamente** los estilos bajo el comentario de tu sección

### 4. Guardar y subir cambios
```bash
git add .
git commit -m "Header: agrego logo y menú de navegación"
git push origin seccion-TUNOMBRE
```

### 5. Abrir un Pull Request en GitHub
- Ve a tu repositorio en GitHub
- Haz clic en "Compare & pull request"
- Agrega una descripción de lo que hiciste
- Pide revisión a tus compañeros

---

## 📝 Reglas de commits

Usa mensajes claros con el formato: `Sección: descripción`

✅ Buenos ejemplos:
- `Header: agrego menú hamburguesa para mobile`
- `Servicios: añado tarjeta de talleres con icono`
- `Footer: corrijo links de navegación`

❌ Malos ejemplos:
- `cambios`
- `arreglé cosas`
- `update`

---

## ⚠️ Reglas del equipo

1. **No edites secciones que no te corresponden**
2. **Haz commits frecuentes** (no dejes todo para el final)
3. **Comenta los Pull Requests** de tus compañeros
4. Si hay un conflicto: analiza ambas versiones, integra lo mejor de cada una y documenta cómo lo resolviste
