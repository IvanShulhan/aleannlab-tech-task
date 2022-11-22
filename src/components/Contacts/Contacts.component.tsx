import React from 'react';
import { JobInterface } from '../../types/Job';
import { Map } from '../Map.component';
import styles from './Contacts.module.css';

type Props = {
  job: JobInterface;
}

export const Contacts: React.NamedExoticComponent<Props> = React.memo(({ job }) => {
  return (
  <div className={styles.contacts_card}>
    <div className={styles.header}>
      <span className={styles.circle}/>
      <h3 className={styles.title}>
        Department name.<br/>
        {job.name}
      </h3>
      <span className={styles.content_text}>
        <span className={styles.point} />
        {job.address}
      </span>
      <div className={styles.contacts}>
        <a 
        className={styles.content_text} 
        href={`callto:${job.phone}`}
        >
          {job.phone},
        </a>
        <a 
        className={styles.content_text} 
        href={`mailto:${job.email}`}
        >
          {job.email}
        </a>
      </div>
    </div>
    <Map location={job.location} />
  </div>
)});