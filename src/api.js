class api {
  async getPersonagem(id) {
    const data = await (await fetch(`https://rickandmortyapi.com/api/character/${id}`)).json()
    return data
  }
}
export default new api()

