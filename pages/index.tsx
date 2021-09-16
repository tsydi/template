/* eslint-disable @next/next/no-img-element */
import { NextPage } from "next"
import Link from 'next/link'
import { Button, ButtonPost } from "../components/Buttons"

const Home: NextPage = () => {
  return (
    <>
      <section className="grid-col-2 gap-3">
        <div className="flex-center">
          <img src="https://via.placeholder.com/550" width="100%" height="350" alt="" />
        </div>

        <div className="text flex justify-center flex-col">
          <h2>Minima natus ipsum dolor</h2>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><Button /></a></Link>
        </div>
      </section>

      <section className="grid-col-3 gap-2">
        <div className="card text-overflow neomorphism material">
          <div className="flex-center">
            <img src="https://via.placeholder.com/550" width="100%" height="200" alt="" />
          </div>
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonPost /></a></Link>
        </div>
        <div className="card text-overflow neomorphism material">
          <div className="flex-center">
            <img src="https://via.placeholder.com/550" width="100%" height="200" alt="" />
          </div>
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonPost /></a></Link>
        </div>
        <div className="card text-overflow neomorphism material">
          <div className="flex-center">
            <img src="https://via.placeholder.com/550" width="100%" height="200" alt="" />
          </div>
          <h3>Minima natus ipsum dolor</h3>
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Vitae provident sequi voluptatem aut similique non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime. Non consectetur corporis? Minima natus temporibus delectus velit excepturi, consectetur quam quas, officiis, iusto dolor maxime.</p>
          <Link href="/"><a><ButtonPost /></a></Link>
        </div>
      </section>
    </>
  )
}

export default Home