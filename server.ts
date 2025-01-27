import app from "./app";

const PORT = 3000; //TODO: Add .env port

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});