interface NewsFooterProps {
    children?: React.ReactNode,
}

const NewsFooter = ({children}: NewsFooterProps) => {
    return ( 
        <>
          {children}
        </>
     );
}
 
export default NewsFooter;
