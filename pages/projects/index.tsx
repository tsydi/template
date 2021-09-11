import { urlFor } from '../../lib/sanity'
import Image from 'next/image'

export const Projects = () => {
  return (
    <div>

      <Image src={urlFor().url()!} width={400} height={400} alt="" />

    </div>
  )
}
