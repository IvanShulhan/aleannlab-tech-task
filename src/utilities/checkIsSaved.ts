import { SelectedJob } from '../types/SelectedJob';

export const checkIsSaved = (id: string) => {
  const jobsList: SelectedJob[] = JSON.parse(
    localStorage.getItem('selectedJobs') || '[]'
  );

  return jobsList.some((item) => item.id === id) ? true : false
};