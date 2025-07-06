import React from 'react'

const Categories = () => {

    const sponsors = [
        {
            id: 1,
            image: 'https://i.postimg.cc/3RKzYRFz/3915c643-43f0-4971-8632-1d5f9a17e403.jpg'
        },
        {
            id: 2,
            image: 'https://i.postimg.cc/LskGcfLz/a4bceee9-f36e-413b-860b-7b9a20870075.jpg'
        },
        {
            id: 3,
            image: 'https://i.postimg.cc/nhDy1NLS/Abstract-D-lar-Ou-Dinheiro-De-Gradiente-De-Cor.jpg'
        },
        {
            id: 4,
            image: 'https://i.postimg.cc/N0vWCb9s/d7983d0b-e469-4809-afee-f9000dc47278.jpg'
        },
        {
            id: 5,
            image: 'https://i.postimg.cc/nrr59P5k/ef58e635-bdb7-439d-9977-0353c1b666a9.jpg'
        },
        {
            id: 6,
            image: 'https://i.postimg.cc/qRjSRTmq/56c2e638-7957-4721-af5a-642b4df835ba.jpg'
        },
        {
            id: 7,
            image: 'https://i.postimg.cc/fyVRwZcj/1731f22d-3650-47bc-8395-ed6c48a73662.jpg'
        },
        {
            id: 8,
            image: 'https://i.postimg.cc/MHgKH4tk/Elite-gold-logo-company-logo-design-Premium.jpg'
        },
        {
            id: 9,
            image: 'https://i.postimg.cc/qMCvSJMp/257d8c8d-5529-4898-a341-715f12a029a9.jpg'
        },
        {
            id: 10,
            image: 'https://i.postimg.cc/pVSdshv0/c6281d1f-b33e-4d78-827a-280192d30927.jpg'
        },
        {
            id: 11,
            image: 'https://i.postimg.cc/QMS81VSJ/d40cf992-38eb-4f20-b8b4-3f0b183b203e.jpg'
        },
        {
            id: 12,
            image: 'https://i.postimg.cc/kg3gd0BK/Logo-de-feu-Premium-Psd-Freepik-psd-logo.jpg'
        },
    ]
  return (
    <div className='max-w-[1520px] m-auto px-4 py-4'>
        <h1 className='text-orange-500 font-bold text-2xl text-center py-2'>
            Trending Categories
        </h1>

        <div className='grid grid-cols-2 md:grid-cols-6 gap-5 py-5 px-2'>
            {sponsors.map(({ id, image}) => (

                <div key={id} className='p-4 flex justify-center items-center hover:scale-105 duration-300'>
                    <img src={image} alt="logo" className='object-cover rounded-xl w-40 h-10 cursor-pointer shadow-xl'/>
                </div>
            ))}
        </div>

    </div>
  )
}

export default Categories
