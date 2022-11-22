import { SelectedJob } from '../types/SelectedJob'

export const changeSelectedList = (id: string, title: string) => {
  const jobsList: SelectedJob[] = JSON.parse(
    localStorage.getItem('selectedJobs') || '[]'
  );

  if (Boolean(jobsList.length)) {
    jobsList.some((item: SelectedJob) => item.id === id)
      ? localStorage.setItem('selectedJobs', JSON.stringify(
        jobsList.filter(item => item.id !== id)
      ))
      : localStorage.setItem('selectedJobs', JSON.stringify(
        [...jobsList, { id, title }]
      ));
  } else {
    localStorage.setItem('selectedJobs', JSON.stringify([{ id, title }]));
  }
}