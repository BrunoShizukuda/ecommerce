import React from 'react'
import { useEffect, useState } from 'react'
import {getDocs, collection} from 'firebase/firestore'

// Components
import CategoryItem from '../../../category-item/category-item.components'

// Styles
import { CategoriesContainer, CategoriesContent } from './categories.styles'

// Utilities
import Category from '../../../types/category.types'
import { db } from '../../../config/firebase.config'
import { categoryConverter } from '../../../converter/firestore.converter'


const Categories = () => {
  const [categories, setCategories] = useState<Category[]>([])

  console.log({ categories })

  const fetchCategories = async () => {
    try {
      const categoriesFromFirestore: Category[] = []

      const querySnapshot = await getDocs(collection(db, 'categories').withConverter(categoryConverter))
      querySnapshot.forEach((doc) => {
        
        categoriesFromFirestore.push(doc.data())
      })
      setCategories(categoriesFromFirestore)
    } catch (error) {
      console.log({ error })
    }
  }

  useEffect(() => {
    fetchCategories()
  }, [])

  return (
    <CategoriesContainer>
      <CategoriesContent>
        {categories.map((category) => (
          <div key={category.id}>
            <CategoryItem category={category} />
          </div>
        ))}
      </CategoriesContent>
    </CategoriesContainer>
  )
}

export default Categories