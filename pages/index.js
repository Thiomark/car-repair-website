import Features from '@/components/home/Features'
import Testimonials from '@/components/home/Testimonials'
import { Layout } from 'shared/Layout'
import styles from '../styles/Home.module.css'

export default function Home() {
    return (
        <Layout>
            <main className='relative'>
                <Features />
                <Testimonials />
            </main>
        </Layout>
    )
}
