# ⚽ React Goal App

This is a simple React app I built while learning the basics of **React components, props, and conditional rendering**.  
It displays different messages depending on whether a goal is scored or missed.

---

## 🚀 What I Learned
- How to create **functional components** in React
- Passing data using **props**
- Using **conditional rendering** (`if` statements)
- Rendering React components dynamically

---

## 🖥️ Code Example

```jsx
function Goal(props) {
  const isGoal = props.isGoal;
  if (isGoal) {
    return <h1>Goal is made</h1>;
  }
  return <h1>Goal is missed</h1>;
}




## 🚀 Features
- ✅ Built with React
- 🎯 Demonstrates conditional rendering
- 🖥️ Beginner-friendly project


---

## 🛠️ Technologies Used
- React
- JavaScript
- HTML
- CSS

---

## 📦 Setup & Run
```bash
# Clone the repository
git clone https://github.com/amjad-alii/react-goal-app.git

# Navigate into the project
cd react-goal-app

# Install dependencies
npm install

# Run the app
npm start
