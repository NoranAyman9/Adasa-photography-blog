# Adasa Blog

A web application for a blog specialized in photography, built with React and Tailwind CSS.
The project is designed to provide a modern user interface with a Dark Theme and full support for the Arabic language (RTL).

## Project Features

- Full support for the Arabic language and right-to-left (RTL) direction.
- Dark-themed UI, comfortable for the eyes.
- Search and filtering system for articles by category.
- Ability to switch between Grid and List views for articles.
- Pagination system for navigating between articles.
- Dynamic routing to display each article's details using React Router.
- Custom 404 error page for non-existent routes.

## Technologies Used

- React.js (v18)
- Vite
- Tailwind CSS
- React Router DOM
- FontAwesome

## Running Locally

1. Clone the project:
```bash
   git clone https://github.com/your-username/adasa-blog.git
```

2. Install dependencies:
```bash
   cd adasa-blog
   npm install
```

3. Run the project:
```bash
   npm run dev
```

## Project Structure

```text
src/
├── assets/
├── components/
│   ├── about/
│   ├── article/
│   ├── blog/
│   ├── error/
│   ├── footer/
│   ├── home/
│   └── navbar/
├── data/
│   └── posts.json
├── pages/
│   ├── About.jsx
│   ├── ArticleDetails.jsx
│   ├── Blog.jsx
│   ├── ErrorPage.jsx
│   └── Home.jsx
├── App.jsx
├── index.css
└── main.jsx
```

## Additional Notes

- The project relies on React's core Hooks such as `useState` and `useRef` for state management.
- Article data is fetched from a local JSON file to simulate working with a real API.