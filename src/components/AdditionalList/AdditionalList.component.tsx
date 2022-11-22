import React from 'react';
import { v4 as uuid } from 'uuid';
import classNames from 'classnames';
import styles from './AdditionalList.module.css'

type Props = {
  title: string;
  list: string[];
  color?: 'yellow'
}

export const AdditionalList: React.NamedExoticComponent<Props> = React.memo(({
  title, list, color
}) => {
  return (
    <div className={styles.additional_list_block}>
      <h4 className={styles.additional_title}>{title}</h4>
      <ul className={styles.additional_list}>
        {list.map((item) => (
          <li 
            className={
              classNames(
                styles.additional_item, 
                {[styles.additional_item__yellow]: color && color === 'yellow'}
              )
            } 
            key={uuid()}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  )
}) 