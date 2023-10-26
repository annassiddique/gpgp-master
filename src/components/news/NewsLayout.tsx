import { Outlet, useParams } from 'react-router-dom'
import Container from '../Container'
import BackgroundWave from '../BackgroundWave'
import { twMerge } from 'tailwind-merge';
import NewsFooter from './NewsFooter';
import BottomLatestNews from './BottomLatestNews';

export const NewsLayout = () => {
  const params = useParams(); 
  const classes = "sm:bg-gpgp-blue sm:text-white bg-white text-black";
  return (
    <>
        <div className="sm:block hidden">
           <BackgroundWave/>
        </div>

        <section className={twMerge("flex flex-col items-center bg-gpgp-blue text-white", classes)}>
           <h1 className="text-bold text-2xl py-5">
              News
            </h1>
        </section>

        <Container>
            <Outlet/>
        </Container>
      
        <NewsFooter>
           {!params.categoryId 
               ? <BackgroundWave/>
               : <BottomLatestNews/>
              }
        </NewsFooter>
    </>
  )
}
