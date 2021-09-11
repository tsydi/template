/* eslint-disable @next/next/no-img-element */

import { NextPage } from "next"
import Image from "next/image"
import Link from 'next/link'
import { Button, ButtonClear } from "../components/Buttons"

const Home: NextPage = () => {
  return (
    <>
      <div className="title flex-center">
        <h1>Title H1</h1>
      </div>

      <div className="grid-col-2 gap-1">
        <div className="flex-center">
          <img src="https://via.placeholder.com/350" alt="" />
        </div>

        <div className="text-block">
          <h2>Minima natus ipsum dolor</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonClear /></a></Link>
        </div>
      </div>

      <div className="grid-col-3 gap-5">
        <div className="text-block">
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonClear /></a></Link>
        </div>
        <div className="text-block">
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonClear /></a></Link>
        </div>
        <div className="text-block">
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonClear /></a></Link>
        </div>
      </div>

    </>
  )
}

export default Home