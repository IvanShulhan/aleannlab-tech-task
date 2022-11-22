import React, { useCallback, useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import classNames from 'classnames';
import { v4 as uuid } from 'uuid';
import { useAppSelector } from '../../app/hooks';
import { checkIsSaved } from '../../utilities/checkIsSaved';
import { changeSelectedList } from '../../utilities/changeSelectedList';
import { splitDescription } from '../../utilities/splitDescription';
import { timeAgo } from '../../utilities/timeAgo';
import { ApplyButton } from '../../components/ApplyButton.component';
import { NotFindPage } from '../../components/NotFindPage';
import { Contacts } from '../../components/Contacts/Contacts.component';
import { AdditionalList } from '../../components/AdditionalList';
import { ReturnButton } from '../../components/ReturnButton.component';
import { Content } from '../../types/Content';
import { JobInterface } from '../../types/Job';
import  styles from './JobDetails.module.css';

export const JobDetails = React.memo(() => {
  const [job, setJob] = useState<JobInterface>();
  const [isSaved, setIsSaved] = useState(false);

  const data = {
    id:"635ee6d304601d61a71951f6",
    name:"Sureplex",
    email:"sureplex@gmail.bo",
    phone:"+97117307890",
    title:"Ut veniam occaecat aute adipisicing eiusmod non pariatur enim enim cupidatat nulla ipsum eiusmod.",
    salary:"60k-71k",
    address:"76 Blende Jardine Place",
    benefits:["Pay vocations","Flexible hours"],
    location:{"lat":9.804124,"long":147.139488},
    pictures:["https://picsum.photos/200/300","https://picsum.photos/200/300","https://picsum.photos/200/300"],
    createdAt: new Date(2012/5/4),
    updatedAt: new Date(2012/5/4),
    description:"\n  Reprehenderit Lorem consectetur non et minim adipisicing deserunt. Ipsum reprehenderit do pariatur proident esse sint magna ullamco qui minim. Anim Lorem ut laborum occaecat culpa consectetur reprehenderit aliquip ex cupidatat proident quis laborum. Nulla aute ipsum et anim.\n  \n  Responsopilities:\n    Ex qui consequat deserunt laborum cupidatat ut ullamco veniam minim nisi incididunt aliquip incididunt. Sunt sunt ullamco elit ipsum ea enim consectetur sit magna minim ea cupidatat. Et ut proident voluptate quis nulla anim commodo in pariatur ad.\n  \nCompensation & Benefits:\n\t    Incididunt et sint incididunt laboris duis. Deserunt consectetur sint aute et sint aliqua quis nostrud non elit aliqua elit tempor. Aliquip ad dolore proident eu consequat elit amet laborum aute excepteur sit labore.\n\n",
    employment_type:["Full time"]
  }

  const { jobs } = useAppSelector(state => state.jobs);
  const { jobId } = useParams();

  const findJob = useCallback((id: string) => {
    const currentJob = jobs.find((item: JobInterface)=> item.id === id);
    setJob(currentJob);
  }, [jobs])

  useEffect(() => {
    if (jobId) {
      findJob(jobId);
      setIsSaved(checkIsSaved(jobId))
    }
  }, [findJob, jobId]);

  const salary = job ? job.salary.split('-').map((el) => (el.slice(0, -1) + ' 000')) : [];
  const content: Content | undefined = job && splitDescription(job.description);

  !job && setJob(data);

  return (
    <>
      {!job 
        ? <NotFindPage title="job" /> 
        : (<section className={styles.page}>
          <div className={styles.content}>
            <div className={styles.header}>
              <h3 className={styles.name}>Job Details</h3>
              <div className={styles.buttons}>
                <button 
                  className={styles.button}
                  onClick={() => {
                    setIsSaved(!isSaved);
                    changeSelectedList(job.id, 'selectedJobs');
                  }}
                >
                  <span className={classNames(
                    styles.icon, styles.icon_save, {[styles.icon_save__saved]: isSaved}
                    )}
                  />
                  Save to my list
                </button>
                <button className={styles.button}>
                  <span className={classNames(styles.icon, styles.icon_share)} />
                  Share
                </button>
              </div> 
            </div>
            <div className={styles.top_button_wrapper}>
              <ApplyButton />
            </div>
            <div className={styles.title_block}>
              <h4 className={styles.title}>{job.title}</h4>
              <div className={styles.price}>
                <span>€{salary[0]}<span className={styles.line} />{salary[1]}</span>
                <span className={styles.price__text}>Brutto, per year</span>
              </div>
              <span className={styles.posted}>Posted {timeAgo(job.createdAt)}</span>
            </div>
            {content && (
              <div className={styles.description_block}>
                <p className={styles.description_text}>
                  {content.generalText}
                </p>
                <h4 className={styles.description_title}>{content.responsopilitiesTitle}</h4>
                <p className={styles.description_text}>
                  {content.responsopilitiesText}
                </p>
                <h4 className={styles.description_title}>{content.benefitsTitle}</h4>
                <h5 className={styles.description_subtitle}>
                  Our physicians enjoy a wide range of benefits, including:
                </h5>
                <ul className={styles.description_list}>
                  {content.benefits?.map((item) => (
                    <li key={uuid()} className={styles.description_list_item}>{item}</li>
                  ))}
                </ul>
              </div>
            )}
            <div className={styles.bottom_button_wrapper}>
              <ApplyButton />
            </div>
            <div className={styles.wrapper}>
              <div className={styles.block}>
                <div className={styles.block_header}>
                  <h3 className={styles.name}>Additional info</h3>
                </div>
                <AdditionalList title="Employment type" list={job.employment_type} />
                <AdditionalList title="Benefits" list={job.benefits} color="yellow" />
              </div>
              <div className={styles.block}>
                <div className={styles.block_header}>
                  <h3 className={styles.name}>Attached images</h3>
                </div>
                <ul className={styles.attached_list}>
                  {job.pictures.map((picture) => (
                    <li key={uuid()} className={styles.attached_item}>
                      <img src={picture} alt="attached" />
                    </li>
                  ))}
                </ul>
              </div>
            </div>
            
            <div className={styles.return_button_wrapper}>
              <ReturnButton address="/jobs" />
            </div>           
          </div>
          <div className={classNames(styles.block, styles.block__without_margin)}>
            <div className={classNames(styles.block_header, styles.block_header__tablet)}>
              <h3 className={styles.name}>Contacts</h3>
            </div>
            <Contacts job={job} />
          </div>
        </section>)
      }
    </>
  )
});