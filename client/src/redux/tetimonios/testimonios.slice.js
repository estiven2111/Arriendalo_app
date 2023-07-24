import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    testimonios: [
        {
            name: "Reina Elizabeth II",
            occupation: "Arrendatario",
            exclusivo: false,
            content: "Gracias a Arriendalo, encontré el departamento perfecto para mí. El proceso fue rápido y eficiente. ¡Altamente recomendado!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTy5IDxrF576RrK08nP0RjvcBQgyZLfLu2R7SDCgVpkUu7SH8Wyf05G_fwOWC4oHb18b_g&usqp=CAU"
          },
          {
            name: "Carlos Fernández",
            occupation: "Propietario",
            exclusivo: true,            
            content: "Recomendaría Arriendalo a cualquier propietario que desee una gestión de arrendamiento sin preocupaciones. Su equipo se encargó de todo, desde la promoción de mi propiedad hasta la selección de inquilinos confiables. Estoy muy impresionado con su profesionalismo y resultados. ¡Gracias, Arriendalo!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd7l04O1EbeclTNmOqJ-2_EXWkF0PMAX3Www&usqp=CAU"
          },
          {
            name: "Ana Rodríguez",
            occupation: "Arrendatario",
            exclusivo: false,
            content: "¡No puedo estar más satisfecha con Arriendalo! Encontré un departamento cerca de mi universidad y a un precio excelente. Sin duda, volvería a elegirlos.",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTK73gUlHH3dsydg14wcKbI6ASoBSZ6TTBz3Q&usqp=CAU"
          },
          {
            name: "Pedro Morales",
            occupation: "Arrendatario",
            exclusivo: false,
            content: "Quiero agradecer a Arriendalo por su excelente servicio. Encontré un hogar acogedor y a un precio justo. Su equipo fue amable y diligente en todo momento. ¡Los recomendaré a mis amigos!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSebvHhtInngPOYu_c7XmllehmtZ6HXxGSidA&usqp=CAU"
          },
          {
            name: "Luisa Navarro",
            occupation: "Propietario",
            exclusivo: false,
            content: "Arriendalo hizo que el proceso de arrendamiento de mi propiedad fuera sencillo y sin complicaciones. Su profesionalismo y atención al detalle fueron impresionantes. Estoy muy satisfecha con los resultados.",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcS6fN3fQYT4v44UcLmMAyudCfBMiweCc-OgBw&usqp=CAU"
          },
          {
            name: "Martín Sánchez",
            occupation: "Propietario",
            exclusivo: true,  
            content: "Estoy extremadamente satisfecho con el servicio que recibí de Arriendalo. Su equipo me ayudó a encontrar el inquilino perfecto para mi propiedad en poco tiempo. Su profesionalismo y atención al cliente son excepcionales. ¡Los recomendaré a otros propietarios sin dudarlo!",
            avatar: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmQjrF-hsZQm06rGDcKRFFRs2FYzwJ71KpLA&usqp=CAU"
          },
          {
            name: "Laura Méndez",
            occupation: "Propietaria",
            content: "Arriendalo ha sido mi compañía de confianza durante años. Han gestionado el arrendamiento de mis propiedades de manera eficiente y han encontrado inquilinos de calidad. Siempre están disponibles para resolver mis dudas y preocupaciones. ¡Son verdaderos profesionales en el campo inmobiliario!",
            avatar: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjB8fHBvcnRyYWl0fGVufDB8fDB8fHww&w=1000&q=80"
          }
    ]
}

export const testimoniosSlice = createSlice({
    name: 'testimonios',
    initialState,
    reducers: {
        // lol
    }
})

export const {lol} = testimoniosSlice.actions
export default testimoniosSlice.reducer