const pizzas = [
  {
    id: 1,
    nombre: "pizza de Muzzarella",
    precio: 500,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas"],
  },

  {
    id: 2,
    nombre: "pizza de Cebolla",
    precio: 1500,
    ingredientes: ["Muzzarella", "Tomate", "Cebolla"],
  },

  {
    id: 3,
    nombre: "pizza Napolitana",
    precio: 1350,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas"],
  },

  {
    id: 4,
    nombre: "pizza 4 Quesos",
    precio: 1380,
    ingredientes: [
      "Muzzarella",
      "Tomate",
      "Queso Azul",
      "Parmesano",
      "Roquefort",
    ],
  },

  {
    id: 5,
    nombre: "pizza Especial",
    precio: 1000,
    ingredientes: ["Muzzarella", "Tomate", "Aceitunas", "Anchoas", "Cebolla"],
  },

  {
    id: 6,
    nombre: "pizza con Anana",
    precio: 600,
    ingredientes: ["Muzzarella", "Tomate", "Anana"],
  },
];



// ejercicio A) 
// filtrar por id impar

const MenuDePizzasImpar = pizzas.filter((pizza) => {
  console.log(pizza.id)
  console.log(pizza.nombre)
  return pizza.id % 2 === 1;
});

console.log(MenuDePizzasImpar);

const ArrNombresPizzasSeleccionadas = MenuDePizzasImpar.map((pizza) => {
  return pizza.nombre
});

console.log(ArrNombresPizzasSeleccionadas);

// Respuesta user friendly
const RespuestaMenu = ArrNombresPizzasSeleccionadas.join(", ")

console.log(`Las pizzas que le podemos ofrecer son: ${RespuestaMenu}`)



// Ejercicio B)
// hay alguna pizza que valga $600

const pizzaConPrecioMenorA = (precio) => {

const resultado = pizzas.some( (pizza) => {
return pizza.precio < precio;
} )
return resultado 

// Respuesta 
? console.log(`hay pizzas con precio menor a $ ${precio}`)
: console.log(`No hay pizzas con precio menor a $ ${precio}`);

} 

pizzaConPrecioMenorA(600);


// Ejercicio C)
// cada pizza con su precio 


pizzas.forEach ((pizza) => {

  console.log(`tipo de Pizza: ${pizza.nombre}, Precio: $${pizza.precio}`)

})


// Ejercicio D) 
// cada pizza con sus ingredientes 


pizzas.forEach((pizza) => {

  console.log(`Pizza del menu: ${pizza.nombre}, sus ingredientes son: ${pizza.ingredientes}`)
  
})

