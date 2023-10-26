import guyAtExhibition from "../../assets/images/exhibition-visitor.png"

interface HomeExhibitionProps {
   classes?: string;
}

const HomeExhibition = ({ classes="" }: HomeExhibitionProps) => {
  return (
    <>
      <section className={`bg-gpgp-blue ${classes}`}>
             <img
                src={guyAtExhibition}
                alt="guyAtExhibtion"
                className="-mt-20"
              />
      </section>
   </>
 )
}

export default HomeExhibition