import React, { useState } from 'react';
import './categories.styles.scss';
import Category from '../../../types/category.types';

const Categories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    return ( 
        <div className="categories-container">
            <div className="categories-content">
                {/* {categories.map(category => <CategoryItem)} */}
            </div>
        </div>
     );
}
 
export default Categories;