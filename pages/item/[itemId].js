import MainLayout from "../../components/MainLayout";
import PageLayout from "../../components/PageLayout";
import ItemGallery from "../../components/ItemGallery";
import ItemDesc from "../../components/ItemDesc"
import { useRouter } from 'next/router'

function Item({ item }) {
    const router = useRouter()
    if (router.isFallback) {
        return <div className="w-screen h-screen flex justify-center items-center">Загрузка</div>
    } 

        
        
        
        return (
            <MainLayout title={`Лот № ${item.itemId}`}>
            <PageLayout>
                <button onClick={router.back} className="text-white focus:outline-none">НАЗАД</button>

                <div className="w-full flex flex-col md:flex-row justify-center">
                    <ItemGallery images={item.src}></ItemGallery>
                    <ItemDesc item={item} />
                </div>
            </PageLayout>
        </MainLayout>
    )

}

export async function getStaticPaths() {
    // Call an external API endpoint to get posts
    const res = await fetch('http://localhost:3000/api/catalog')
    const items = await res.json()

    // Get the paths we want to pre-render based on posts
    const paths = items.map((item) => {
        
        
        return (
            {
                params: { itemId: item.itemId.toString() }
            }
        )
    })

    // We'll pre-render only these paths at build time.
    // { fallback: false } means other routes should 404.
    return { paths, fallback: true }
}

export const getStaticProps = async ({ params }) => {
    
    // Fetch data from external API http://localhost:3000/api/catalog
    const res = await fetch(`http://localhost:3000/api/catalog/${params.itemId}`)
    const item = await res.json()

    // Pass data to the page via props
    return { props: { item }, revalidate: 1 }
}

export default Item