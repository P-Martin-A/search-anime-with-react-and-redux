import React from 'react'

import { animeList, card, figure, imagen, title } from './styles.module.css'

function AnimeList() {
  return (
    <section className={animeList}>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
      <article className={card}>
        <figure className={figure}>
          <img className={imagen}
            src=""
            alt="Imagen anime"
          />
          <figcaption className={title}>Anime title</figcaption>
        </figure>
      </article>
    </section>
  )
}

export default AnimeList
