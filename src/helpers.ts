import { Data } from './App'

const mappedChartData = (data: Data[], type: keyof Data) => {
    const itemArray = data.map((item: Data)=> (item[type]))
    const itemObj: any = {}
  
    itemArray.map((item: any) => {
      const lowerCaseItem = item.toLowerCase()
      return !itemObj[lowerCaseItem] 
        ? itemObj[lowerCaseItem] = 1 
        : itemObj[lowerCaseItem] = itemObj[lowerCaseItem]+1
    })
  
    const newMappedArray: any = []
    for(let key in itemObj) {
      if(type === 'gender') {
        newMappedArray.push({
          'name': key,
          [key]: itemObj[key]
        }) 
      } else {
        newMappedArray.push({
          'name': key,
          'value': itemObj[key]
        })
      }
     
    }
    return newMappedArray
  }

  export {
    mappedChartData,
  }


    // const data = [
  //   {
  //     name: "Male",
  //     male: 300,
  //   },
  //   {
  //     name: "Female",
  //     female: 700,
  //   },
  // ];