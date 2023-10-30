import LoaderVideo from '../assets/pc_loader.mp4'

const Preloader = () => {
    return(
        <video className='w-full h-full z-40' autoPlay >
            <source src={LoaderVideo} type="video/mp4" />
        </video>
    )
}

export default Preloader