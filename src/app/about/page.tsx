import Image from 'next/image'
import React from 'react'

type Props = {}

function About({ }: Props) {
  return (
    <div className='px-[10vw] 2xl:px-[25vw] w-screen mb-8 pt-16 pb-40'>
      <Image src="/nhc-logo.svg" alt="" width={250} height={240} className='m-auto' />

      <h3 className='text-nhc mb-6 mt-8 font-abel'>
        About NHC National Housing Company
      </h3>
      <p className='font-abel'>
        NHC was established in 2016 under Royal Decree No. 7262, on 8/2/1437 AH to be the investment arm of the initiatives and programs of the Ministry of Municipal and Rural Affairs and Housing in the real estate, residential and commercial sectors. Then the Company came under state ownership in May of the year 2020, after which it entered a new stage in its journey and became an effective enabler of solutions for the Saudi real estate market. To become a leader in the real estate development sector and enable the public and private sectors to develop strategic partnerships with them. NHC is also keen to provide quality projects across urban communities with modern designs and various housing solutions at reasonable prices that keep pace with the aspirations of the future generation and achieve quality of life, in partnership with experienced and efficient real estate developers.
      </p>

      <h3 className="text-nhc mb-6 mt-8 font-abel">
        National Housing Strategy
      </h3>
      <p className='font-abel'>
        The NHC Strategy aims for the Company to be an enabler of the real estate supply system by empowering the private sector to develop the real estate market and improve the professionalism of the services provided in it, thus offering broader horizons for the Company in enhancing the sustainability of its business and the work of the real estate supply system.
      </p>
    </div>
  )
}

export default About