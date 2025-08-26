async function fetchProfileData () {
    const url = 'https://raw.githubusercontent.com/DFL010492/CurriculoMeu/refs/heads/main/data/portifolio.json'
    const fetching = await fetch(url)
    return await fetching.json()
}