## 🤖 AI Hub

**AI Hub** is an AI tools discovery web application where users can explore different AI tools, discover popular products, view tool details, and manage their favorite AI tools in a simple and user-friendly interface.

**Live Demo |** [AI Hub](https://ai-model-hub-pro.surge.sh/)

---

#### 📁 Project Structure

```text
ai-hub/
├── public/
│   └── models.json
├── src/
│   ├── assets/
│   │   ├── banner.png
│   │   ├── logo.png
│   │   └── hero.png
│   ├── components/
│   │   ├── Navbar/
│   │   │   └── Navbar.jsx
│   │   ├── Banner/
│   │   │   └── Banner.jsx
│   │   ├── Models/
│   │   │   └── Models.jsx
│   │   ├── Cart/
│   │   │   └── Cart.jsx
│   │   └── Footer/
│   │       └── Footer.jsx
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── .gitignore
├── eslint.config.js
├── index.html
├── package.json
├── package-lock.json
├── README.md
└── vite.config.js
```

<br>

### 📌 About the Project

`AI Model Hub` is an AI tools discovery platform where users can explore different AI products, discover popular and favorite tools, and manage selected items through an interactive cart interface.

The project focuses on practicing **React components, props, state management, Promise handling, Suspense, dynamic rendering, and cart functionality**.

---




### ⚙️ Technology Stack

| Technology | Purpose |
|:---|:---|
| **HTML5** | Semantic structure |
| **Tailwind CSS** | Responsive styling and layouts |
| **DaisyUI** | Reusable UI components |
| **JavaScript (ES6)** | Application logic and interactivity |
| **React** | Component-based UI development |
| **Vite** | Development server and build tool |
| **JSON** | Storing AI model data |
| **Git** | Version control |
| **GitHub** | Source code management |
| **Surge** | Project deployment |

---

### 🔌 Data Integration

The project uses a locally stored `models.json` file containing AI tool information, including names, descriptions, prices, image URLs, and status labels.

The data is retrieved using JavaScript's `fetch()` method and handled through **Promises, `async/await`, React's `use()`, and Suspense** to render the models dynamically.

---







### 🧩 Development Tools

- **Visual Studio Code** — Code editor
- **Chrome DevTools** — Debugging and inspecting the application
- **Git Bash** — Running commands and managing Git
- **GitHub** — Hosting and managing source code
- **Surge** — Deploying the project

<br>



### || `Promise` and `Suspense`

<details>
<summary>1. Promise inside <code>App()</code></summary>

`App` re-render হলে প্রতিবার নতুন Promise তৈরি হতে পারে। তাই `use()` দিয়ে Promise handle করলে সাধারণত cached/stable Promise ব্যবহার করতে হয়।

```jsx
function App() {
  const modelPromise = getModels();

  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Models modelPromise={modelPromise} />
    </Suspense>
  );
}
```

</details>

<details>
<summary>2. Promise outside <code>App()</code></summary>

Component-এর বাইরে Promise তৈরি করলে একই Promise reuse করা যায়। তাই re-render হলেও প্রতিবার নতুন Promise তৈরি হয় না।

```jsx
const modelPromise = getModels();

function App() {
  return (
    <Suspense fallback={<p>Loading...</p>}>
      <Models modelPromise={modelPromise} />
    </Suspense>
  );
}
```

</details> <br>

> **Note:** Promise বাইরে রাখলেও `Suspense` প্রয়োজন হয়। `use()` দিয়ে pending Promise-এর data read করলে দুই ক্ষেত্রেই `Suspense` দরকার। বাইরে Promise রাখার সুবিধা হলো re-render-এর সময় একই Promise reuse করা যায়।

<br>








### || `Vite 8` + `Tailwind CSS` v4 `Fix`

Vite 8-এর সাথে Tailwind CSS v4 install error fix করতে `package.json`-এ নিচের `overrides` যোগ করো।

```json
"overrides": {
  "@tailwindcss/vite": {
    "vite": "$vite"
  }
}
```

**Reference:** [Vite 8 + Tailwind CSS v4 Fix](https://dev.to/ismailjosim/tailwind-css-v4-install-error-in-vite-8-react-19-complete-fix-4g1l)

<br>






## 👨‍💻 Author

**Bayjid Alom**

> Every small step in coding brings you closer to something extraordinary.



