import React, { useEffect }  from 'react';
import { useAppDispatch, useAppSelector } from '../app/hooks';
import { useSearchParams, useLocation } from 'react-router-dom';
import { JobCard } from '../components/JobCard';
import { Loader } from '../components/Loader.component';
import { Pagination } from '../components/Pagination';
import { fetchJobs } from '../features/jobsSlice';
import { scrollToTop } from '../utilities/scrollToTop';

export const Jobs = () => {
  const { search } = useLocation();
  const [searchParams, setSearchParams] = useSearchParams(search);

  const currentPage = searchParams.get('page') || 1;

  const dispatch = useAppDispatch();
  const { jobs, loading } = useAppSelector(state => state.jobs);

  const itemsOnPage = 6;
  const jobsCount = jobs.length;

  const nextPage = () => {
    if (+currentPage * itemsOnPage < jobsCount) {
      searchParams.set('page', (+currentPage + 1).toString());
      setSearchParams(searchParams);
      scrollToTop();
    }
  }

  const prevPage = () => {
    if (+currentPage > 1) {
      searchParams.set('page', (+currentPage - 1).toString());
      setSearchParams(searchParams);
      scrollToTop();
    }
  }

  const setPage = (currentTarget: EventTarget & HTMLButtonElement) => {
    if (currentTarget.textContent) {
      const value = currentTarget.textContent;

      if (!Number.isNaN(+value)) {
        searchParams.set('page', value);
        setSearchParams(searchParams);
        scrollToTop();
      }
    }
  };

  useEffect(() => {
    dispatch(fetchJobs());
  }, [dispatch]);


  useEffect(() => {
    searchParams.set('page', currentPage.toString());
    setSearchParams(searchParams);
  }, [currentPage, searchParams, setSearchParams]);

  return (
    <>
       {loading === 'pending' 
       ? <Loader /> 
       : (
        <div className="flex flex-col justify-between items-center gap-[34px] min-h-screen py-2 md:py-7">
          <ul className="w-full flex flex-col gap-2">
            {jobs.slice((+currentPage - 1) * itemsOnPage, +currentPage * itemsOnPage)
              .map((job) => (
                <React.Fragment key={job.id}>
                  <JobCard job={job} />
                </React.Fragment>
            ))}
          </ul>
          <Pagination 
            totalCount={Math.ceil(jobsCount / itemsOnPage)} 
            page={+currentPage} 
            setPage={setPage}
            nextPage={nextPage} 
            prevPage={prevPage} 
          />
        </div>
       )}
    </>
  )
}