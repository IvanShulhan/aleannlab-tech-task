export const createPaginationList = (page: number, paginationList: number[]) => {
  const lastItem = paginationList[paginationList.length - 1];

    if (paginationList.length < 7) {
      return paginationList;
    }

    if (page < 6) {
      return [...paginationList.slice(0, 5), '...', lastItem]
    }

    if (page >= paginationList.length - 3) {
      return [paginationList[0], '...',
      ...paginationList.slice(paginationList.length - 5)];
    }
    
    return [paginationList[0], '...',
      ...paginationList.slice(page - 2, page + 1), '...', lastItem];
   }

