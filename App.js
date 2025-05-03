// src/App.js
import React from 'react';
import ProductForm from './components/ProductForm';

function App() {
  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-blue-600 text-white p-4 text-center text-xl">
        Deshiya Bazar - Add New Product
      </header>
      <ProductForm />
    </div>
  );
}

export default App;
