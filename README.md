# Cemzo Store

A responsive product listing application built with Next.js and Tailwind CSS. This project was developed as part of the Cemzo Frontend Developer Intern technical assignment.

## Live Demo

https://cemzo-store-self.vercel.app/

## Features

- Display products from DummyJSON API
- Search products by title
- Responsive design for mobile, tablet, and desktop
- Loading state
- Error state
- Empty search result state
- Clean and user-friendly UI

## Technologies Used

- Next.js
- React.js
- JavaScript
- Tailwind CSS
- HeroUI

## API Used

DummyJSON Products API

https://dummyjson.com/products

## Installation

Clone the repository:

```bash
git clone https://github.com/yourusername/cemzo-store.git
```

Go to the project directory:

```bash
cd cemzo-store
```

Install dependencies:

```bash
npm install
```

Run the development server:

```bash
npm run dev
```

Open:

```txt
http://localhost:3000
```

## Project Structure

```txt
app/
├── page.jsx
├── all-products/
├── components/
│   ├── Navbar.jsx
│   ├── Banner.jsx
│   ├── FeaturedProducts.jsx
│   └── ui/
│       └── ComponentCard.jsx
```

## Challenges Faced

- Implementing product search functionality
- Managing loading and error states
- Creating a responsive product grid layout

## Assumptions

- Product data is fetched directly from the public DummyJSON API.
- No authentication or backend functionality was required.

## Author

Ashikur Rahman

GitHub: https://github.com/halimaashu