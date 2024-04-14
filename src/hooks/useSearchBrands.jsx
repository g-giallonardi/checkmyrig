// import {useEffect, useState} from "react";
//
// export default async function useSeachBrands(searchParams){
//     const [isLoading, setIsLoading] = useState(false)
//     const [result, setResult] = useState([])
//
//
//
//     const filter = filterArr.map(
//         f => {
//             const keys = Object.keys(f)
//             const fl = {}
//             keys.forEach(key => {
//                 fl[key] = {$regex: f[key]}
//                 if(typeof f[key] === 'string'){
//                     fl[key] = {...fl[key], $options: 'i'}
//                 }
//             })
//             return fl
//         }
//     )
//     useEffect(
//         () => {
//             setIsLoading(true)
//             fetch(`/api/brands/search`, {
//                     method: 'POST',
//                     headers: {
//                         'Content-Type': 'application/json'
//                     },
//                     body: JSON.stringify(filter[0])
//                 }
//             )
//             .then((response) => {return response.json()})
//             .then((data) => {setResult(data)} )
//             .catch(() => {
//                 return ('Oopsy! Something wrong happened...')
//             })
//             .finally(()=> setIsLoading(false))
//         }
//     , [searchParams])
//
//     return [result, isLoading]
//
// }