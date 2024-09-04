export const movieRouter = {
  create: '/video/create',
  getFilename: (filename: string) => {
    return `/video/${filename}`
  },
  getSomeMovies: ({ skip, count }: { skip: number, count: number }) => {
    return `/movies/${skip}/${count}`
  },
  getRandomMovies: (count: number) => {
    return `/movies/${count}`
  },
  getMovies: ({ page, limit }: { page: number, limit: number }) => {
    return `/movies?page=${page}&limit=${limit}`
  },
  searchMovies: "/movies/search"
}