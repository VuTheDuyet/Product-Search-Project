# Product Search Application

## Introduction
This is a React + TypeScript application for searching and displaying products. 
The app supports:
- Displaying products with pagination.
- Searching products by name.
- Loading additional products on demand.

## Features
1. Initial display of 10 products.
2. Fetch additional products when the user clicks "Load More."
3. Search products by name with real-time fetching.

## Requirements
- Node.js (v16+)
- npm or yarn

## Getting Started

### Installation
1. Clone the repository:
   ```bash
   git clone git@github.com:VuTheDuyet/Product-Search-Project.git
2. Navigate to the project directory:
cd <repository-name>
3. Install dependencies:
npm install
4. Running the Application
Start the development server:
npm start
Open your browser and navigate to http://localhost:3000.
### Testing the Application
Use the search bar to search for products by name.
Scroll down and click "Load More" to fetch additional products.
## API Details
The app uses the following API endpoints:

GET /products?page={page}&limit={limit}: Fetch paginated products.
GET /products/search?q={term}: Search products by name.
# Project Structure
/src: Source code.
/components: Reusable React components.
/types: TypeScript interfaces and types.
Screenshots

# Contact
For any queries, feel free to reach out at:
Email: vuduyet203@gmail.com
