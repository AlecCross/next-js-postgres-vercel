// pages/index.js

import React, { useState, useEffect } from 'react'

export default function index() {
    interface Category {
        category_id: number;
        category_name: string;
    }
    
    const [categories, setCategories] = useState<Category[]>([]);
    
    useEffect(() => {
        async function fetchData() {
            const response = await fetch('/api/categories')
            const data = await response.json()
            setCategories(data)
        }
        fetchData()
    }, [])
    
    return (
        <div>
            <h1>Categories:</h1>
            <ul>
                {categories.map(category => (
                    <li key={category.category_id}>{category.category_name}</li>
                ))}
            </ul>
        </div>
    )
}
