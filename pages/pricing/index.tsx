import Link from 'next/link'

import {MainLayout} from "../../components/layouts/MainLayout"

export default function Pricing() {
  return (

    <MainLayout>
        <h1 className={'title'}>
          Estoy en el Pricing
        </h1>

        <h1 className={'title'}>
          {/* Ir a <a 
          >Home</a> */}
          Ir a <Link href="/">Home</Link>
        </h1>

        <p className={'description'}>
          Get started by editing{' '}
          <code className={'code'}>pages/contact.js</code>
        </p>


    </MainLayout>

    )
}
