import { useState, useEffect } from "react"

//placeholder for missing data
const placeholder = 'undefined'

//change date from yyyy/dd/mm to dd/mm/yyyy
function formatDate (input) {
    var datePart = input.match(/\d+/g),
    year = datePart[0],
    month = datePart[1], day = datePart[2];
  
    return day+'/'+month+'/'+year;
  }

//initially, albums are sorted according to their listen date
const initialSort = (albums) => {
    return (
        albums.sort((a, b) => 
                a['date'].toLowerCase() < b['date'].toLowerCase() ? 1 : -1
            )
    )}

const Albums = ({albums}) => {
    let renderedAlbums = albums
    const [order, setOrder] = useState('ASC')
    const [prevSortType, setPrevSort] = useState(undefined)
    const [data, setData] = useState(albums)

    useEffect( () => setData(initialSort(albums)), [albums] )

    //sorting functions for numbers (album rating)
    const sortRating = () => {
        if (order === 'ASC' || prevSortType !== 'rating') {
            const sorted = renderedAlbums.sort((a, b) => 
                Number(a.rating) < Number(b.rating) ? 1 : -1
            )
            setOrder('DSC')
            setData(sorted)
            setPrevSort('rating')
        }
        else {
            const sorted = renderedAlbums.sort((a, b) => 
            Number(a.rating) > Number(b.rating) ? 1 : -1
            )
            setOrder('ASC')
            setData(sorted)
            setPrevSort('rating')
        }
    }

    //sorting function for others
    const sort = ( sortBy ) => {
        console.log('prev', prevSortType)
        if (prevSortType !== sortBy) {
            const sorted = renderedAlbums.sort((a, b) => 
                a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
            )
            setOrder('DSC')
            setData(sorted)
            setPrevSort(sortBy)
        } else
        if (order === 'ASC') {
            const sorted = renderedAlbums.sort((a, b) => 
                a[sortBy].toLowerCase() > b[sortBy].toLowerCase() ? 1 : -1
            )
            setOrder('DSC')
            setData(sorted)
            setPrevSort(sortBy)
        }
        else {
            const sorted = renderedAlbums.sort((a, b) => 
                a[sortBy].toLowerCase() < b[sortBy].toLowerCase() ? 1 : -1
            )
            setOrder('ASC')
            setData(sorted)
            setPrevSort(sortBy)
        }
    }

    return (
        <div>
            <table className="table">
                <thead >
                    <tr>
                    <th><button className="table-header-button" onClick={() => sort('name')}>
                        Album name
                        </button>
                    </th>
                    <th><button className="table-header-button" onClick={() => sort('artist')}>
                        Artist
                        </button>
                    </th>
                    <th><button className="table-header-button" onClick={() => sort('release_date')}>
                        Release date
                        </button>
                    </th>
                    <th><button className="table-header" >
                        Album cover
                        </button>
                    </th>
                    <th><button className="table-header-button" onClick={() => sort('date')}>
                        Listened
                        </button>
                    </th>
                    <th><button className="table-header-button" onClick={() => sortRating()}>
                        Rating out of 10
                        </button>
                    </th>
                    </tr>
                </thead>
                <tbody>
                {data.map( album => 
                <tr key={album._id} className="table-row">
                    <td className="table-data">{album.name}</td>
                    <td className="table-data">{album.artist}</td>
                    <td className="table-data">{album.release_date.slice(0, 4)}</td>
                    <td className="table-data">
                        <img style={{margin:10}} alt='Album cover' src={album.img} width='200' height='200'></img>
                    </td>
                    <td className="table-data">{formatDate(album.date) || placeholder}</td>
                    <td className="table-data">{album.rating || placeholder}</td>                    
                </tr>
                )}
                </tbody>
            </table>
        </div>
    )
}
export default Albums