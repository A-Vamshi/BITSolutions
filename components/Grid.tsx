import { gridItems } from '@/data/index'
import React from 'react'
import { BentoGrid, BentoGridItem } from './ui/BentoGrid'

const Grid = () => {
  return (
     <section id="about">
          <BentoGrid>
               {gridItems.map(({id, title, description, img, spareImg, className, imgClassName, titleClassName }) => (
                    <BentoGridItem
                         id={id}
                         key={id}
                         title={title}
                         description={description}
                         className={className}
                         img={img}
                         imgClassName={imgClassName}
                         spareImg={spareImg}
                         titleClassName={titleClassName}
                    />
               ))}
          </BentoGrid>
     </section>
  )
}

export default Grid


/*





*/