const Search=({onChange})=>{
    const handleChange=(e)=>{
        onChange(e.target.value)
    }
    return(
        <div className="search">
        <input onChange={handleChange}/>
        </div>
    )
}
export default Search