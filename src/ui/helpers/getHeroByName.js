

export const getHeroByName = ( name = '', herosAll = [] ) => {

    name = name.toLocaleLowerCase().trim()
    if( name.length === 0 ) return []

    return herosAll.filter(
        hero => hero.aliases.toLocaleLowerCase().includes( name )
    )
}