#NODEPOP

# REQUISITOS DE INSTALACIÓN
- NODE
- MONGODB
- MONGOOSE

# INICIAR APLICACIÓN

Para el correcto funcionamiento de esta aplicación, en primer lugar será necesario iniciar el script initDB.js, que creará 6 artículos como ejemplo. Para hacerlo, se deberá ejecutar el comando
```
npm run initDB
```

A continuación, se iniciará la aplicación con el siguiente comando

```
npm run start
```

# APLICACIÓN

La aplicación se inicia en la dirección localhost:3000, que muestra una ventana en el front desde la que el usuario puede empezar a hacer consultas. Para testear esta aplicación, se puede hacer mediante una aplicación como postman, pero también se puede ejecutar mediante el front, pulsando los botones, creando anuncios, eliminando o filtrando datos.

# LLAMADAS AL API

## ANUNCIOS

### TODOS LOS ANUNCIOS
```
http://localhost:3000/api/ads
```
### ANUNCIOS DE ITEMS QUE SE VENDEN
```
http://localhost:3000/api/ads?sale=true
```
### ANUNCIOS DE ITEMS QUE SE COMPRAN
```
http://localhost:3000/api/ads?sale=false
```

## PRECIOS

```
http://localhost:3000/api/ads?price=10
```

### PRECIOS MAYOR QUE VALOR
```
http://localhost:3000/api/ads?min=10
```
### PRECIOS MENOR QUE VALOR

```
http://localhost:3000/api/ads?max=10
```
### PRECIOS ENTRE DOS VALORES
```
http://localhost:3000/api/ads?min=10&max=63
```

## TAGS

Para ver todas las tags, se debe realizar la siguiente llamada a la API
```
http://localhost:3000/api/ads?tags
```

Al hacer esta llamada, se cargará una vista en el front donde aparecen todos los tags disponibles. Se podrán seleccionar, y al pulsar el botón de enviar, haremos una llamada a la API para buscar los artículos con las tags seleccionadas.

Esa misma llamada se puede hacer manualmente de la siguiente manera:

```
http://localhost:3000/api/ads?tags=lifestyle
http://localhost:3000/api/ads?tags=lifestyle-diy

```

## NAME

```
http://localhost:3000/api/ads?name=bike
http://localhost:3000/api/ads?name=b
```

# CREAR ANUNCIOS

Para crear un anunció, se debe realizar un método POST. Se puede hacer a través del front de la aplicación, en el formulario que aparece en cualquier página que muestre anuncios. Por ejemplo, en 

```
http://localhost:3000/api/ads
```


# ELIMINAR ANUNCIOS

Para eliminar un anunció, se debe realizar un método DELETE. Se puede hacer pulsando el botón de eliminar situado junto con cada uno de los items que aparece en cualquier página que muestre anuncios. Por ejemplo, en 

```
http://localhost:3000/api/ads
```
