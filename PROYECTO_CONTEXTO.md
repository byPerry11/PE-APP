# PE-APP - Contexto del Proyecto

**Desarrollado por:** CorzoLabs  
**Cliente:** Department of Process Engineering (PE)  
**Última actualización:** 2026-02-01

---

## 📋 Resumen Ejecutivo

Sistema digital multi-plataforma (Web App y Mobile) para la gestión y registro de activos críticos en el piso de producción. Reemplaza formularios físicos con un flujo de trabajo digital automatizado, garantizando trazabilidad y cumplimiento de estándares de calidad.

---

## 🎯 Objetivos del Proyecto

- ✅ Implementar arquitectura de 3 capas (Presentación, Lógica de Negocio, Datos)
- ✅ Soporte offline-first para operaciones sin conectividad
- ✅ Sistema de control de acceso basado en roles (RBAC)
- 🔄 Módulos específicos: Registro de Torque, Control de Tapetes ESD, Mantenimiento de Ionizadores
- 🔄 Sincronización automática de datos offline → online

---

## 🏗️ Arquitectura Técnica

### Stack Tecnológico

**Backend:**
- Django + Django Rest Framework
- django-environ para variables de entorno
- Service Layer Pattern (lógica en `services.py`)
- Serializers para integridad de datos
- pathlib para gestión de rutas (Año/Mes/Documento)

**Base de Datos:**
- **Desarrollo:** PostgreSQL con Docker
- **Producción:** Supabase (PostgreSQL managed)
- Migraciones con Django ORM

**Frontend Web:**
- React
- Tailwind CSS (exclusivo para estilos)
- Context API / Zustand para estado global
- Custom Hooks para llamadas API

**Mobile:**
- React Native
- Operación **full online** (sin modo offline)
- Conexión directa a API REST

**Infraestructura:**
- Docker para desarrollo local
- Docker Compose para orquestación de servicios
- Supabase para producción (base de datos, autenticación, storage)

### Principios de Desarrollo

1. **Separación de Capas:**
   - Frontend: Solo presentación, sin lógica de negocio pesada
   - Backend: Service Layer para lógica compleja
   - Data Layer: Modelos thin, solo definición de datos

2. **Convenciones de Código:**
   - Python: `snake_case` para variables/funciones
   - JavaScript: `camelCase` para variables/funciones
   - Clases: `PascalCase`
   - Documentación obligatoria en funciones/componentes

3. **Calidad:**
   - Strict Mode en React
   - Logging para errores críticos
   - Manejo de errores sin try-except vacíos
   - Mensajes de error amigables al usuario

---

## 📊 Módulos del Sistema

### 1. Registro de Torque
- Captura de valores de torque en herramientas
- Validación de rangos permitidos
- Generación de reportes Excel
- Trazabilidad por operador y fecha

### 2. Control de Tapetes ESD
- Registro de mediciones de resistencia
- Alertas de valores fuera de rango
- Historial de mantenimiento

### 3. Mantenimiento de Ionizadores
- Programación de mantenimientos preventivos
- Registro de actividades realizadas
- Notificaciones de vencimiento

### 4. Sistema de Inventario

#### 4.1 Gestión de Productos
- **Información del Producto:**
  - Número de parte (identificador único)
  - Nombre del producto
  - Precio en pesos mexicanos (MXN)
  - Proveedor habitual
  - Control de cantidad en stock
  - **Código de barras** (opcional) para escaneo automático
  
- **Sistema de Alertas Inteligentes:**
  - Alertas configurables por producto
  - Nivel 1: Stock moderado → "Es momento de comprar más al proveedor"
  - Nivel 2: Stock crítico → "Stock muy bajo, urge comprar más"
  - Notificaciones automáticas según umbrales definidos

#### 4.2 Registro de Entradas
- Formulario de entrada de productos al inventario
- Actualización automática de stock
- Historial de entradas con fecha y usuario

#### 4.3 Sistema de Salidas (Tipo Punto de Venta)
- **Interfaz estilo POS:**
  - Carrito de productos para salida
  - Escaneo de código de barras para agregar productos automáticamente
  - Búsqueda manual de productos
  - Visualización de stock disponible en tiempo real
  
- **Información de Salida:**
  - Nombre de quien requiere el producto
  - Área solicitante (seleccionable de lista guardada)
  - Cantidad de cada producto
  - Indicador si es cambio por producto defectuoso
  - Fecha y hora de la salida
  - Usuario que registra la salida
  
- **Gestión de Áreas:**
  - CRUD completo de áreas
  - Selector de área en formulario de salida
  - Historial de salidas por área
  
- **Proceso de Salida:**
  1. Seleccionar área solicitante
  2. Agregar productos al carrito (escaneo o búsqueda)
  3. Especificar cantidades y datos del solicitante
  4. Marcar si es cambio por defectuoso
  5. Confirmar salida
  6. Actualización automática de stock
  7. Generación de registro de salida

- **Funcionalidades Futuras:**
  - Reportes de consumo por área
  - Análisis de tendencias de salida
  - Dashboard de productos más solicitados
  - Integración con proveedores

---

## ✅ Tareas Completadas

### Fase de Planificación
- [x] Definición de arquitectura de 3 capas
- [x] Selección de stack tecnológico
- [x] Establecimiento de estándares de código
- [x] Definición de módulos principales
- [x] Diseño de sistema de roles y permisos

### Configuración Inicial
- [x] Configuración de directrices de desarrollo
- [x] Establecimiento de reglas de calidad de código

---

## 🔄 Tareas En Progreso

### Backend
- [ ] Configuración inicial de proyecto Django
- [ ] Implementación de modelos de datos
- [ ] Creación de Service Layer para lógica de negocio
- [ ] Configuración de django-environ
- [ ] Implementación de sistema de autenticación y permisos

### Frontend Web
- [ ] Configuración inicial de proyecto React
- [ ] Configuración de Tailwind CSS
- [ ] Implementación de componentes atómicos
- [ ] Creación de Custom Hooks para API
- [ ] Configuración de Context API/Zustand

### Mobile
- [ ] Configuración inicial de React Native
- [ ] Implementación de sistema offline-first
- [ ] Queue de sincronización con UUID temporal
- [ ] Componentes de UI mobile

---

## 📝 Tareas Pendientes

### Funcionalidades Core
- [ ] Módulo de Registro de Torque
  - [ ] Formulario de captura
  - [ ] Validación de rangos
  - [ ] Generación de Excel
  - [ ] Servicio de cálculos de torque
  
- [ ] Módulo de Control ESD
  - [ ] Formulario de mediciones
  - [ ] Sistema de alertas
  - [ ] Historial de mantenimiento
  
- [ ] Módulo de Ionizadores
  - [ ] Programación de mantenimientos
  - [ ] Registro de actividades
  - [ ] Sistema de notificaciones

- [ ] Módulo de Sistema de Inventario
  - [ ] Configuración de Base de Datos
    - [ ] Docker Compose con PostgreSQL para desarrollo
    - [ ] Configuración de Supabase para producción
    - [ ] Variables de entorno para ambos ambientes
  - [ ] Modelo de datos para productos
    - [ ] Número de parte (unique)
    - [ ] Nombre, precio (MXN), proveedor
    - [ ] Cantidad en stock
    - [ ] Código de barras (opcional)
    - [ ] Umbrales de alerta configurables
  - [ ] Modelo de datos para áreas
    - [ ] CRUD de áreas
    - [ ] Relación con salidas
  - [ ] Modelo de datos para salidas
    - [ ] Nombre del solicitante
    - [ ] Área solicitante (FK)
    - [ ] Fecha y hora
    - [ ] Usuario que registra
    - [ ] Indicador de cambio por defectuoso
    - [ ] Detalle de productos (relación many-to-many)
  - [ ] Formulario de registro de productos
    - [ ] Campos básicos (nombre, parte, precio, proveedor)
    - [ ] Campo de código de barras (opcional)
    - [ ] Configuración de umbrales de alerta
  - [ ] Sistema de entradas
    - [ ] Formulario de entrada al inventario
    - [ ] Actualización automática de stock
    - [ ] Historial de entradas
  - [ ] Sistema de salidas tipo POS
    - [ ] Interfaz de carrito de productos
    - [ ] Integración con escáner de código de barras
    - [ ] Búsqueda de productos (por nombre o número de parte)
    - [ ] Selector de área solicitante
    - [ ] Campo de nombre del solicitante
    - [ ] Checkbox de cambio por defectuoso
    - [ ] Visualización de stock en tiempo real
    - [ ] Confirmación y registro de salida
    - [ ] Actualización automática de stock
  - [ ] Gestión de áreas
    - [ ] Formulario de creación de áreas
    - [ ] Lista de áreas guardadas
    - [ ] Edición y eliminación de áreas
  - [ ] Sistema de alertas de stock
    - [ ] Configuración de umbrales por producto
    - [ ] Notificaciones automáticas (stock moderado)
    - [ ] Alertas críticas (stock muy bajo)
  - [ ] Servicios de negocio
    - [ ] Cálculo automático de stock
    - [ ] Validación de movimientos
    - [ ] Validación de stock disponible antes de salida
    - [ ] Generación de reportes básicos
  - [ ] Funcionalidades futuras (Fase 2)
    - [ ] Reportes de consumo por área
    - [ ] Análisis de tendencias de salida
    - [ ] Dashboard de productos más solicitados
    - [ ] Integración con proveedores

### Infraestructura
- [ ] Sistema de logging centralizado
- [ ] Manejo de archivos con estructura Año/Mes/Documento
- [ ] Sincronización offline → online
- [ ] Sistema de respaldo y recuperación

### Testing y Calidad
- [ ] Tests unitarios backend
- [ ] Tests de integración
- [ ] Tests E2E frontend
- [ ] Validación de estándares de código

---

## 🚀 Próximos Pasos Inmediatos

1. **Configurar proyecto Django** con estructura de 3 capas
2. **Definir modelos de datos** para los 3 módulos principales
3. **Implementar Service Layer** base
4. **Configurar proyecto React** con Tailwind CSS
5. **Crear componentes base** reutilizables

---

## 📌 Notas Importantes

- **Arquitectura:** Aplicación **full online**, sin modo offline
- **Base de Datos:** 
  - Desarrollo: PostgreSQL con Docker
  - Producción: Supabase (PostgreSQL managed)
- **Gestión de Archivos:** Usar pathlib con estructura Año/Mes/Documento
- **Estilos:** Tailwind CSS exclusivamente, evitar CSS puro o inline styles
- **Errores:** Mensajes amigables al usuario, nunca alerts nativos
- **Documentación:** Cada función/componente debe tener comentarios de propósito y parámetros
- **Código de Barras:** Implementar soporte para escáner en sistema de salidas
- **Áreas:** Sistema CRUD completo para gestión de áreas solicitantes

---

## 🔗 Referencias

- Repositorio: byPerry11/PE-APP
- Ubicación local: `c:\Users\admin\Documents\DEV\PE-APP`
- Conversación de diseño: `4b9a461f-8eb8-46ec-91d3-8ebfb0515b34`

---

**Última revisión:** 2026-02-01 14:25  
**Estado del proyecto:** En fase de configuración inicial  
**Módulos totales:** 4 (Torque, ESD, Ionizadores, Inventario)  
**Arquitectura:** Full Online | Docker + PostgreSQL (dev) | Supabase (prod)
