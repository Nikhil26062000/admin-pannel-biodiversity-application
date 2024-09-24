import React from 'react'
import Sidebar from '../components/Sidebar'
import Header from '../components/Header'

const Post = () => {
  return (
    <>
    <main className="container_box max-lg:hidden ">
        <section className=" left_section">
            <Sidebar/>
        </section>

        <section className="right_section">

        </section>
    </main>

    <section className="lg:hidden">
        <Header/>
    </section>
    </>
  )
}

export default Post