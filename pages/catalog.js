import MainLayout from "../components/MainLayout";
import PageLayout from "../components/PageLayout";
import Imgix from 'react-imgix';
// import Image from 'next/image'
import { useRouter } from 'next/router';
import { useEffect, useContext } from 'react';
import { CatalogContext } from '../context/CatalogContext';

function Catalog({ items }) {
    const { catalog, update } = useContext(CatalogContext)
    const router = useRouter()
    // const [catalog, setCatalog] = useState(false)

    useEffect(() => {
        update(items)
    }, [items])

    function goItem(itemid) {
        router.push(`/item/${itemid}`)
    }

    return (
        <MainLayout>
            <PageLayout>
                <div className="flex flex-wrap items-center w-full justify-start">
                    {
                        catalog && catalog.map((item) => {
                            return (
                                <div key={String(item.itemId)} onClick={() => goItem(item.itemId)} className="cursor-pointer relative lg:w-4/12 md:w-full w-6/12 py-0 p-1">
                                    <Imgix className="lazyload" src={item.src[0]} width="500" height="500" />
                                    <span className="absolute font-bold text-4xl font-sans bg-red-600 bg-opacity-50 text-gray-100 right-0 top-0 p-3">{item.item.price} <span className="text-2xl">руб.</span></span>
                                    <div className={`absolute transform -translate-x-2/4 -translate-y-2/4 origin-center top-1/2 left-1/2 mx-auto top-0 z-10 text-gray-100 font-bold mx-auto`}>Подробнее</div>
                                </div>
                            )
                        })
                    }


                </div>
            </PageLayout>
        </MainLayout>
    )
}

export async function getStaticProps(ctx) {

    // Fetch data from external API http://localhost:3000/api/catalog
    const res = await fetch('http://localhost:3000/api/catalog')
    const items = await res.json()

    // Pass data to the page via props
    return { props: { items } }
}

export default Catalog