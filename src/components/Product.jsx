

/*
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
*/
const products = [
    {
      id: 1,
      name: 'Ultimate Nutrition Iso Sensation',
      href: '#',
      price: '$60',
      imageSrc: 'https://i5.walmartimages.com/asr/cca93e28-7c09-400d-9aad-f0c1ecc7b811.9cc1fe59d0359346760ea52f904c414d.jpeg?odnHeight=768&odnWidth=768&odnBg=FFFFFF',
      imageAlt: 'Tall slender porcelain bottle with natural clay textured body and cork stopper.',
    },
    {
      id: 2,
      name: 'Isopure',
      href: '#',
      price: '$203',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcROQUCGzhFfR9w7VxkBGxVsmrcY0ro9b_YUtz88ft75dyB49_AHVmLk3-2_Q-jrCZEjH3pBlxwlw5ku2W67x_Hb2zFb6VaGoRw8Ai3wJDnlYnOQIGLzyXraHA&usqp=CAE',
      imageAlt: 'Olive drab green insulated bottle with flared screw lid and flat top.',
    },
    {
      id: 3,
      name: 'Muscle Blaze',
      href: '#',
      price: '$96',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcRgQWsgoT7XjBspIH4NwMi2ZDRWmEoWyXqfrDO4amHnBuLKgmLUptTiiKDk4jIt3RT4Skvp-603-El_cEzm_TGOT2g5MHC9el43DKp7lk0&usqp=CAE',
      imageAlt: 'Person using a pen to cross a task off a productivity paper card.',
    },
    {
      id: 4,
      name: 'BioTech USA',
      href: '#',
      price: '$144',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTVYW6hKyLf9AgQN7uXEYI_mxcVD0Cz7tKJwT2kPMYIH6NKJDmlQxrvv21gvecGSt5xIw5504Ue00HaEr3verkYoYTqWNvYLtwxK_MJvX0&usqp=CAE',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 5,
      name: 'Curde BM',
      href: '#',
      price: '$14',
      imageSrc: 'https://encrypted-tbn0.gstatic.com/shopping?q=tbn:ANd9GcSyh8RHB5ECQa1bnmtd9jbn-uob2ds3MfvboNpciVyWprYT-B8VaH_Cbggb8XB2EfVCof-YgnkXWgiyH31Eau_YVfy1jBRzefvspIYHBFjTDA7m1Vs6kqnL6g&usqp=CAE',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 6,
      name: 'Zenith',
      href: '#',
      price: '$24',
      imageSrc: 'https://encrypted-tbn1.gstatic.com/shopping?q=tbn:ANd9GcTYJdrA7Awetx4Bi79rjrzu3e8SRPoLoJEz-2urdVOhXioXeAZ74TIq91nVp4v0xXDQf5yGttSOMB8ol8NMCgM3PIaEyo1e8CGmoG0KH3wlj0t-2-K8DOg0&usqp=CAE',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 7,
      name: 'XLR',
      href: '#',
      price: '$19',
      imageSrc: 'https://encrypted-tbn3.gstatic.com/shopping?q=tbn:ANd9GcTnhk_WbPHlJKauogW_SghxytegD8HZ2aDNkZNVqDTbzUF480sFhbvycy0EL9SyzmHgNJ-zNJ6lQumncotHJX1o49KvwETn80OVd39Zr2EIZMsdB1MZN1Mx_w&usqp=CAE',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    {
      id: 8,
      name: 'Purely BM',
      href: '#',
      price: '$25',
      imageSrc: 'https://encrypted-tbn2.gstatic.com/shopping?q=tbn:ANd9GcS17qn6ykywnlstDuY35QJ_bdZbdCeGx3PUMjLxuB9m0k9k8ZZeA_lcUF1bX1YdmmpF49EVm2mYmQWJQ2Sd7i4I4g88gZye--XHQlUIzNZ9OG9hCMz0Oq8U4Q&usqp=CAE',
      imageAlt: 'Hand holding black machined steel mechanical pencil with brass tip and top.',
    },
    // More products...
  ]
  
  export default function Product() {
    return (
      <section className=" relative">
      <div className=" bg-white">








        <div className="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8 flex flex-col">
          <h2 className="  mx-auto text-4xl mb-8 font-bold font-serif"> Grab your Products</h2>
  
          <div className="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 xl:gap-x-8">
            {products.map((product) => (
              <a key={product.id} href={product.href} className="group">
                <div className="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7">
                  <img
                    src={product.imageSrc} 
                    alt={product.imageAlt}
                    className="h-full w-full object-cover object-center group-hover:opacity-75 "
                  />
                </div>
                <h3 className="mt-4 text-sm text-gray-700">{product.name}</h3>
                <p className="mt-1 text-lg font-medium text-gray-900">{product.price}</p>
              </a>
            ))}
          </div>
        </div>
      </div></section>
    )
  }
  