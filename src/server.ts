import app from "./app/app";
const PORT = process.env.PORT || 5000;


let server;

const bootstrap = async () => {
    server = app.listen(PORT, () => {
        console.log(`Server site Running: http://localhost:${PORT}`);
    });
};

bootstrap();