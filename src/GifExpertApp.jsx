import { useState } from "react"
import { AddCategory, GifGrid } from "./components"



export const GifExpertApp = () => {
    const [categories,setCategories]= useState(['One Punch'])

    const onAddCategory=(newCategory)=>{
      if ( categories.includes(newCategory ) ) return;
      // console.log(newCategory)
      // categories.push(newCategory)  ;
       setCategories([newCategory,...categories]);
    }

  return (
    <>
    {/* Titulo */}
    <h1>GifExpetApp</h1>

    {/* Input */}
    <AddCategory 
    // setCategories={ setCategories }
    onNewCategory={value => onAddCategory(value)}
    
    />
   
    {/* Listado de Gif */}
  
      {categories.map( category =>(
              <GifGrid 
              key={category} 
              category={category}
              />
            )
        )}
        {/* <li>ABC</li> */}
       

            {/* gif items */}
    </>
  )
}
