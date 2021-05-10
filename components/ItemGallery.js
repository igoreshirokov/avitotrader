
import { useState, useEffect } from 'react'

import Image from 'react-imgix'

export default function ItemGallery({ images }) {

    const [gallery, setGallery] = useState(images.map((image, index) => {
        return {
            id: index,
            href: image,
            active: index === 0 ? true : false
        }
    }))
    const activeItemHref = gallery.filter(item => item.active === true).map(item => item.href)[0]
    const [active, setActive] = useState(activeItemHref[0])
    const nonActiveItems = gallery.filter(item => item.active === false)

    const activationImage = (index) => {
        setGallery(gallery.map(image => {
            index === image.id ? image.active = true : image.active = false
            return image
        }))
        setActive(activeItemHref)
    }
    const activeItem = gallery.filter(item => item.active === true).map(item => item.active)





    return (
        <>
            <div className="flex flex-col sm:w-full md:w-1/2">

                <div className="w-full" >
                    <Image src={activeItemHref} width="500" height="500" layout="responsive" />
                    {/* <Image src={`/images${activeItemHref}`} width={`500`} height={`500`} layout="responsive" /> */}
                </div>
                <div className="flex flex-row cursor-pointer py-2 first:pl-3">
                    {nonActiveItems.map(image => {
                        return (
                            <div key={image.id.toString()} className="" onClick={() => activationImage(image.id)}>
                                <Image src={image.href} width={`50`} height={`50`} layout="intrinsic" />
                            </div>
                        )
                    })}
                </div>
            </div>
        </>
    )
}



// // console.log(content)
// const [images, setImages] = useState(false)
// const [gallery, setGallery] = useState({
//     active: 0,
//     isOne: true,
//     isLoading: true
// })

// useEffect(() => {
//     content !== undefined ? setImages(JSON.parse(content)) : null
// }, [content])

// useEffect(() => {
//     if (images.length > 1) {
//         setGallery({
//             active: 0,
//             isOne: false,
//             isLoading: false
//         })
//     } else {
//         setGallery({
//             active: 0,
//             isOne: true,
//             isLoading: false
//         })
//     }
// }, [images])

// if (gallery.isLoading) {
//     return (
//         <div>
//             <Loading color={'#734C2F'} type={'spin'} />
//         </div>
//     )
// }

// if (gallery.isOne) {
//     return (
//         <div className={styles.wrapper}>
//             <div className={styles.active}>
//                 <img src={PUBLIC_URL + images[0]} />
//             </div>
//         </div>
//     )
// } else {
//     return (
//         <div className={styles.gallery}>
//             <div className={styles.wrapper}>
//                 <div className={styles.active}>
//                 <Image src={`/images${images[0]}`} width={`500`} height={`500`} layout="responsive" />
//                 </div>
//                 <div className={styles.thumbnails}>
//                     {images.map(image => {

//                         return (
//                             <Image className={styles.thumbnail} key={getRandom()} src={`/images${image}`} width={`50`} height={`50`}  />
//                         )
//                     })}
//                 </div>
//             </div>
//         </div>
//     )
// }
