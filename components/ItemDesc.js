export default function ItemGallery({ item }) {
    return (
        <>
            <div className="flex flex-col px-10 text-left text-gray-100 ">
                <h1 className="text-5xl font-bold">ЛОТ № {item.itemId}</h1>
                <p className="text-2xl leading-loose py-10">Вы можете заказать данный лот прислав скриншот лота на <a href="https://wa.me/79629996842">Whatsapp</a> </p>
            </div>
        </>
    )
}