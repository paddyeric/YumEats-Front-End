import { HiArrowRight } from "react-icons/hi";

const Meal = () => {


const foodItems = [
  {
    id: 1,
    name: 'Sausage & Meat Sauce',
    price: '$280',
    imageUrl: 'https://i.postimg.cc/qqTg6DyS/pexels-vanmalidate-842142.jpg',
  },
  {
    id: 2,
    name: 'Meats Salad',
    price: '$350',
    imageUrl: 'https://i.postimg.cc/029b838J/pexels-senuscape-728360-2313686.jpg',
  },
    {
    id: 3,
    name: 'Salad & Sliced Chicken',
    price: '$150',
    imageUrl: 'https://i.postimg.cc/q7NNP3pb/pexels-chanwalrus-1059943.jpg',
  },
  {
    id: 4,
    name: 'Meat & Vegetables',
    price: '$250',
    imageUrl: 'https://i.postimg.cc/kg1VYcPR/pexels-solliefoto-299347-4.jpg',
  },
  {
    id: 5,
    name: 'Burger',
    price: '$400',
    imageUrl: 'https://i.postimg.cc/FRc7RXd0/pexels-pixabay-461382.jpg',
  },
  {
    id: 6,
    name: 'Pizza',
    price: '$600',
    imageUrl: 'https://i.postimg.cc/XqkqfKgJ/pexels-narda-yescas-724842-1566837.jpg',
  },
    {
    id: 7,
    name: 'Burger With French Fries',
    price: '$300',
    imageUrl: 'https://i.postimg.cc/fWcVQZhN/pexels-jonathanborba-2983101-1.jpg',
  },
    {
    id: 8,
    name: 'Sauce Spaghetti',
    price: '$100',
    imageUrl: 'https://i.postimg.cc/3wzkYxRK/pexels-enginakyurt-1487511.jpg',
  },
];
    
  return (
    <div className="max-w-[1520px] m-auto px-4 py-12">
      <h1 className="text-orange-500 font-bold text-2xl text-center py-2">Our Meal</h1>

      <div className='flex flex-col lg:flex-row justify-center'>
        <div className='flex justify-center md:justify-center '>
            <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-3xl w-20 border-solid border-2' >All</button>
            <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-full w-20 border-solid border-2'>Pizza</button>
            <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-full w-20 border-solid border-2'>Chicken</button>
            <button className='m-1 border-orange-700 text-white bg-orange-700 hover:bg-white hover:text-orange-700 hover:border-orange-700 rounded-full w-20 border-solid border-2'>Salad</button>
        </div>
       </div>

        <div className="grid md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-4 gap-6 py-4">
            {foodItems.map(({ id, name, price, imageUrl }) => (

          
           <div key={id} className='border-none hover:scale-105 duration-300'>
                <img src={imageUrl} className="w-full h-[200px] object-cover rounded-lg"/>

                <div className='flex justify-between py-2 px-4'>

                    <p className="font-bold">{name}</p>
                    <p className="bg-orange-700 h-18 w-18 rounded-full -mt-10 text-white py-4 px-2 border-8 font-bold">
                        {price}
                    </p>
                </div>
                
                <div className='pl-2 py-4 -mt-8'>
                    <p className='flex items-center text-indigo-600'>View Move 
                        <HiArrowRight className='w-5 ml-2'/>
                    </p>
                </div>

            </div>
          
            ))}
        </div>
    </div>
  )
}

export default Meal
