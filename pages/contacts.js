import MainLayout from "../components/MainLayout";
import PageLayout from "../components/PageLayout";
import Image from "react-imgix"

export default function Contacts() {
    return (
        <MainLayout>
            <PageLayout>
                <div className="text-5xl font-bold text-gray-100 w-full text-center justify-center">
                    <h1>Контакты</h1>
                    <a className="flex flex-col duration-300 p-10 hover:bg-pink-100 hover:bg-opacity-10 w-max" target="_blank" href="https://wa.me/79629996842">
                        <Image className="text-gray-100" src="/whatsapp.svg" width="30" height="30" />
                        <p className="text-sm py-2">Игорь Whatsapp</p>
                    </a>
                </div>
            </PageLayout>
        </MainLayout >
    )
}