# Calculadora

Calculator service with docker.

## Building your image

Go to the directory that has your Dockerfile and run the following command to build the Docker image.<br>

```bash
$ docker build -t <your username>/calculadora .
```
Your image will now be listed by Docker:<br>

```bash
$ docker images

# Example
REPOSITORY                      TAG        ID              CREATED
<your username>/calculadora    latest     d64d3505b0d2    1 minute ago
```

## Run the image

Run the image you previously built:<br>

```bash
$ docker run -p 3000:3000 -d <your username>/calculadora
```

Print the output of your app:<br>

```bash
# Get container ID
$ docker ps

# Print app output
$ docker logs <container id>

# Example
Server runing on localhost:3000
```

## Test

To test calculadora app:<br>

### SUM

```bash
# To add 4 + 2 + 1
$ curl http://localhost:3000/calculadora/sum/4/2/1

# Result
El resultado de la suma es: 7
```

### RES

```bash
# To subtract 4 - 2 - 1
$ curl http://localhost:3000/calculadora/res/4/2/1

# Result
El resultado de la resta es: 1
```

### MUL

```bash
# To multiply 4 * 2 * 1
$ curl http://localhost:3000/calculadora/mul/4/2/1

# Result
El resultado de la multiplicación es: 8
```

### DIV

```bash
# To divide 4 / 2
$ curl http://localhost:3000/calculadora/div/4/2

# Result
El resultado de la división es: 2
```
<br><br><br>
