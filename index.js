const express = require('express');
const product = require('./API/product');
const app = express();
const PORT = process.env.PORT || 5050;

app.use("/api/product", product);
app.listen(PORT, () => {
console.log(`Server is running on port ${PORT}`);
});
