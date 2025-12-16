# Frontend Role Quick Test

This project is a **React + TypeScript application built with Vite**. It serves as a lightweight frontend setup for rapid development, testing, and evaluation.

---

## 🚀 Setup Instructions

### Prerequisites

Ensure you have the following installed:

* **Node.js** (v18 or later recommended)
* **npm** (comes with Node.js)

---

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/Jonathan4github/frontend-role-quick-test
cd frontend-role-quick-test
```

---

### 2️⃣ Install Dependencies

```bash
npm install
```

---

### 3️⃣ Run the Development Server

```bash
npm run dev
```

The app will be available at:

```
http://localhost:5173
```

---

### 4️⃣ Build for Production

```bash
npm run build
```

This generates an optimized production build in the `dist/` folder.

---

### 5️⃣ Preview the Production Build (Optional)

```bash
npm run preview
```

---

## 🧪 Available Scripts

| Script            | Description                                           |
| ----------------- | ----------------------------------------------------- |
| `npm run dev`     | Starts the Vite development server                    |
| `npm run build`   | Runs TypeScript build and creates a production bundle |
| `npm run preview` | Previews the production build locally                 |
| `npm run lint`    | Runs ESLint on the project                            |

---

## ⚙️ Assumptions & Trade-offs

### Assumptions

* The project is **frontend-only** and does not require backend integration.
* Modern browsers are targeted, allowing the use of **ES modules** and modern JavaScript features.
* Styling approach is flexible (CSS, CSS Modules, or utility frameworks can be added as needed).

---

### Trade-offs

* **No UI framework included by default** (e.g., MUI, Tailwind) to keep the setup minimal and avoid unnecessary dependencies.
* **No global state management** (Redux, Zustand, etc.) included since the scope is small.
* **Custom font loading and email-client compatibility** are not handled at build level and would require additional configuration if needed.

---

## 📦 Tech Stack

* **React 19**
* **TypeScript**
* **Vite**
* **ESLint**

---

## 📌 Notes

This setup prioritizes **speed, clarity, and simplicity**, making it suitable for technical assessments, prototypes, or small-scale frontend tasks.

---

Feel free to reach out if additional features or configurations are required.
