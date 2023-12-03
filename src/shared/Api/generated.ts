/**
 * Generated by orval v6.21.0 🍺
 * Do not edit manually.
 * Block List
 * OpenAPI spec version: 1.0.0
 */
import { customInstance } from './axios.instance';
import type { BodyType } from './axios.instance';
export type AnimeControllerGetAnimeByGenresParams = {
genres: string;
name: string;
status: string;
};

export interface Chapter {
  animeName: string;
  chapter: number;
  img: string[];
  name: string;
}

export interface AnimeDto {
  author: string;
  chapters: Chapter[];
  describe: string;
  genres: string[];
  img: string;
  imgHeader: string;
  name: string;
  published: string;
  status: string;
}

export interface HelloDto {
  message: string;
}




// eslint-disable-next-line
  type SecondParameter<T extends (...args: any) => any> = T extends (
  config: any,
  args: infer P,
) => any
  ? P
  : never;


  export const appControllerGetHello = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<HelloDto>(
      {url: `/hello`, method: 'GET'
    },
      options);
    }
  
export const animeControllerGetAllAnime = (
    
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<AnimeDto[]>(
      {url: `/anime/get-all`, method: 'GET'
    },
      options);
    }
  
export const animeControllerGetAnimeByName = (
    name: string,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<AnimeDto>(
      {url: `/anime/get-one/${name}`, method: 'GET'
    },
      options);
    }
  
export const animeControllerGetAnimeByGenres = (
    params: AnimeControllerGetAnimeByGenresParams,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<AnimeDto>(
      {url: `/anime/get-by-filters`, method: 'GET',
        params
    },
      options);
    }
  
export const animeControllerCreateAnime = (
    animeDto: BodyType<AnimeDto>,
 options?: SecondParameter<typeof customInstance>,) => {
      return customInstance<void>(
      {url: `/anime/create`, method: 'POST',
      headers: {'Content-Type': 'application/json', },
      data: animeDto
    },
      options);
    }
  
export type AppControllerGetHelloResult = NonNullable<Awaited<ReturnType<typeof appControllerGetHello>>>
export type AnimeControllerGetAllAnimeResult = NonNullable<Awaited<ReturnType<typeof animeControllerGetAllAnime>>>
export type AnimeControllerGetAnimeByNameResult = NonNullable<Awaited<ReturnType<typeof animeControllerGetAnimeByName>>>
export type AnimeControllerGetAnimeByGenresResult = NonNullable<Awaited<ReturnType<typeof animeControllerGetAnimeByGenres>>>
export type AnimeControllerCreateAnimeResult = NonNullable<Awaited<ReturnType<typeof animeControllerCreateAnime>>>
