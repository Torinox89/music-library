import GalleryItem from './GalleryItem'

const renderGallery = () => {
    if(data){
        return (
            <Suspense fallback={<h1>Loading...</h1>} />
                <Gallery data={data} />
            </Suspense>
        )
    }
}

}



export default Gallery
