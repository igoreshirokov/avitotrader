import Head from 'next/head'
import MainLayout from '../components/MainLayout'
import Link from 'next/link'
import PageLayout from '../components/PageLayout'

export default function Home() {
  return (
      <MainLayout>
        <PageLayout>
          <div className="w-full flex flex-col items-center relative z-10">
            <h1 className="font-extrabold text-5xl sm:text-5xl text-center  text-white leading-tight mt-4">
              Распродажа женской одежды
            </h1>
            <a href="#" className="block bg-gray-800 hover:bg-gray-900 py-3 px-4 text-lg text-white font-bold uppercase mt-10">
              Перейти в каталог
              </a>
          </div>
        </PageLayout>
      </MainLayout>
  )
}
