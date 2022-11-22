import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { JobInterface } from '../../types/Job';
import { changeSelectedList } from '../../utilities/changeSelectedList';
import { checkIsSaved } from '../../utilities/checkIsSaved';
import styles from './JobCard.module.css';
import { timeAgo } from '../../utilities/timeAgo';

type Props = {
  job: JobInterface;
}

export const JobCard: React.NamedExoticComponent<Props> = React.memo(({ job }) => {
  const [isSaved, setIsSaved] = useState(false);

  useEffect(() => {
    setIsSaved(checkIsSaved(job.id))
  }, [job])
  
  return (
  <li className={styles.card}>
    <img 
      src={job.pictures[0]} 
      alt={job.description} 
      className={styles.image} 
    />
    <div className={styles.descriptrion}>
      <Link to={`/jobs/${job.id}`} className={styles.title}>
        {job.title}
      </Link>
      <div className={styles.department}>
        Department name
        <span>•</span>
        {job.name}
      </div>
      <div className={styles.location}>
        <span className={styles.icon} />
          {job.address}
      </div>
    </div>
    <div className={styles.info}>
      <div className={styles.content}>
        <button 
          className={classNames(
            [styles.bookmark], {[styles.bookmark_active]: isSaved}
            )} 
          onClick={() => {
            changeSelectedList(job.id, job.title);
            setIsSaved(!isSaved);
          }} 
        />
        <span className={styles.posted}>
          {`Posted ${timeAgo(job.createdAt)}`}
        </span>
      </div>
    </div>
  </li>
)});
