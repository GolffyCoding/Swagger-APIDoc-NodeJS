const express = require("express");
const swaggerJsDoc = require("swagger-jsdoc");
const swaggerUi = require("swagger-ui-express");

const app = express();
app.use(express.json());

const PORT = 3000;

// ตั้งค่า Swagger Options
const swaggerOptions = {
  definition: {
    openapi: "3.0.0",
    info: {
      title: "CRUD API",
      version: "1.0.0",
      description: "API Documentation with Swagger",
    },
    servers: [{ url: "http://localhost:3000" }],
  },
  apis: ["./server.js"], // ระบุไฟล์ที่มี Swagger JSDoc
};

// สร้าง Swagger Docs
const swaggerDocs = swaggerJsDoc(swaggerOptions);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocs));

let items = [];

/**
 * @swagger
 * /items:
 *   get:
 *     summary: ดึงรายการทั้งหมด
 *     responses:
 *       200:
 *         description: สำเร็จ
 */
app.get("/items", (req, res) => {
  res.status(200).json(items);
});

/**
 * @swagger
 * /items:
 *   post:
 *     summary: เพิ่มรายการใหม่
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       201:
 *         description: เพิ่มสำเร็จ
 */
app.post("/items", (req, res) => {
  const { name } = req.body;
  const newItem = { id: items.length + 1, name };
  items.push(newItem);
  res.status(201).json(newItem);
});

/**
 * @swagger
 * /items/{id}:
 *   put:
 *     summary: อัปเดตรายการ
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *     responses:
 *       200:
 *         description: อัปเดตสำเร็จ
 */
app.put("/items/:id", (req, res) => {
  const { id } = req.params;
  const { name } = req.body;
  let item = items.find((item) => item.id === parseInt(id));

  if (!item) return res.status(404).json({ message: "ไม่พบรายการ" });

  item.name = name;
  res.status(200).json(item);
});

/**
 * @swagger
 * /items/{id}:
 *   delete:
 *     summary: ลบรายการ
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: ลบสำเร็จ
 */
app.delete("/items/:id", (req, res) => {
  const { id } = req.params;
  items = items.filter((item) => item.id !== parseInt(id));
  res.status(200).json({ message: "ลบรายการเรียบร้อย" });
});

// เริ่มเซิร์ฟเวอร์
app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}/api-docs`);
});
