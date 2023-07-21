const mappedChartData = (data, type) => {
    const itemArray = data.map((item)=> (item[type]))
    const itemObj = {}
  
    itemArray.map((item) => {
      const lowerCaseItem = item.toLowerCase()
      return !itemObj[lowerCaseItem] 
        ? itemObj[lowerCaseItem] = 1 
        : itemObj[lowerCaseItem] = itemObj[lowerCaseItem]+1
    })
  
    const newMappedArray = []
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

  const descendingComparator = (a, b, orderBy) => {
      if (b[orderBy] < a[orderBy]) {
        return -1;
      }
      if (b[orderBy] > a[orderBy]) {
        return 1;
      }
      return 0;
    };
    
    const getComparator = (order, orderBy) => {
      return order === "desc"
        ? (a, b) => descendingComparator(a, b, order)
        : (a, b) => -descendingComparator(a, b, orderBy);
    };
    
    const sortedRowInformation = (rowArray, comparator) => {
      const stabilazedRowArray = rowArray.map((el, index) => [el, index]);
      stabilazedRowArray.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
      });
      return stabilazedRowArray.map((el) => el[0]);
    };

    export {
      mappedChartData,
      getComparator,
      sortedRowInformation,
    }