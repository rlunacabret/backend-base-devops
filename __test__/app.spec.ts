import { describe, test, expect } from "@jest/globals";
import app from "../src/server.js";
import request from "supertest";
import { configuration } from "../src/config.js";

describe("Test Suite App", () => {

    test("api raiz", async () => {
     
        return await request(app)
            .get("/")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, esta api fue configurada por el usuario ${configuration.username}`);
            });
    });

    
    test("api key", async () => {
     
        return await request(app)
            .get("/key")
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, esta api contiene la siguiente api-key: ${configuration.apiKey}`);
            });
    });

    test("PALINDROMO CORRECTO", async () => {
        let a = "reconocer";
        return await request(app)
            .get("/palindromo/" + a)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, La frase ingresada es palindromo`);
            });
    });

    test("PALINDROMO INCORRECTO", async () => {
        let a = "palindromo";
        return await request(app)
            .get("/palindromo/" + a)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, La frase ingresada no es palindromo`);
            });
    });

    test("PRIMO CORRECTO", async () => {
        let a = 11; 
        return await request(app)
            .get("/primo/" + a)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, el numero ingresado es un numero primo`);
            });
    });

    test("PRIMO CORRECTO", async () => {
        let a = 1; 
        return await request(app)
            .get("/primo/" + a)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, el numero ingresado no es un numero primo`);
            });
    });

    
    test("PRIMO INCORRECTO", async () => {
        let a = 10; 
        return await request(app)
            .get("/primo/" + a)
            .expect("Content-Type", /text/)
            .expect(200)
            .then((response) => {
                expect(response.text).toBe(`Hola, el numero ingresado no es un numero primo`);
            });
    });
    



});