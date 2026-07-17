import express from "express";
const app = express();
app.use(express.json());

app.get('/customers', (resquest, response) => {
    const customers = [
        {
            nome: "Antonio",
            status: false
        },
        {
            nome: "Flavio",
            status: true
        },
        {
            nome: "Silva",
            status: false
        },
        {
            nome: "Patricio",
            status: true
        }
    ];

    response.status(200).json(customers);
});

app.listen(3000);