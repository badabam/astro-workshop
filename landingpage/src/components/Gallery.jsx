import { useState } from 'react'
import './Gallery.css'

export default function Gallery() {
  const images = [
    'http://source.unsplash.com/featured/240x480/?water',
    'http://source.unsplash.com/featured/240x480/?sun',
    'http://source.unsplash.com/featured/240x480/?moon',
    'http://source.unsplash.com/featured/240x480/?fire',
  ]
  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <section className="Gallery">
      {images.map(image => (
        <link key={image} rel="preload" as="image" href={image} />
      ))}
      <img src={images[currentIndex]} width="240" height="480" alt="" />
      <menu className="Gallery__menu">
        {images.map((_, index) => (
          <button
            className={`Gallery__button ${
              currentIndex === index ? 'Gallery__button--active' : ''
            }`}
            onClick={() => setCurrentIndex(index)}
            key={index}
          >
            {index + 1}
          </button>
        ))}
      </menu>
    </section>
  )
}
