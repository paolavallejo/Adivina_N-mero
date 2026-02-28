// juego.test.js
const { verificarIntento, calcularPuntaje } = require('./juego');

// --- verificarIntento ---

test('intento correcto', () => {
    expect(verificarIntento(42, 42)).toBe("correcto");
});

test('intento es muy bajo, pista dice mayor', () => {
    expect(verificarIntento(50, 20)).toBe("mayor");
});

test('intento es muy alto, pista dice menor', () => {
    expect(verificarIntento(50, 80)).toBe("menor");
});

test('intento fuera de rango lanza excepción', () => {
    expect(() => verificarIntento(50, 150)).toThrow("El número debe estar entre 1 y 100");
});

test('intento no numérico lanza excepción', () => {
    expect(() => verificarIntento(50, "hola")).toThrow("El intento debe ser un número");
});

// --- calcularPuntaje ---

test('3 intentos o menos dan puntaje 100', () => {
    expect(calcularPuntaje(3)).toBe(100);
});

test('entre 4 y 6 intentos dan puntaje 75', () => {
    expect(calcularPuntaje(5)).toBe(75);
});

test('entre 7 y 10 intentos dan puntaje 50', () => {
    expect(calcularPuntaje(8)).toBe(50);
});

test('más de 10 intentos dan puntaje 25', () => {
    expect(calcularPuntaje(15)).toBe(25);
});