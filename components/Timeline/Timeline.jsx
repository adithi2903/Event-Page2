import styles from './TL.module.css'
import { useState, useEffect } from 'react'
import classNames from 'classnames'
import Dcard from '@components/Accessories/dcard'
import Ecard from '@components/Accessories/ecard'
// import event from './event.json';
import { event } from '@data/timeline'

export default function Timeline() {
    const [day1, setday1] = useState(true);
    const [day2, setday2] = useState(false);

    const handleday1 = () => {
        setday1(true);
        setday2(false);
    }
    const handleday2 = () => {
        setday2(true);
        setday1(false);
    }

    return (
        <div className={styles.main} id="Events">
            <div className={styles.header}>
                <p className={styles.err}>Timeline</p>
            </div>
            <div className={styles.tabs}>
                <div className={styles.days}>
                    <div onClick={handleday1}>
                        <Dcard name="Day 1" day={day1} />
                    </div>
                    <div onClick={handleday2}>
                        <Dcard name="Day 2" day={day2} />
                    </div>
                </div>
                <div
                    className={classNames(
                        styles.events,
                        !day1 && styles.events2,
                    )}
                >
                    {event.map((item, idx) => {
                        if (item.day === 1) {
                            return (
                                <Ecard
                                    key={idx}
                                    name={item.name}
                                    time={item.time}
                                    room={item.room}
                                />
                            )
                        }
                    })}
                </div>
                
                <div
                    className={classNames(
                        styles.events,
                        !day2 && styles.events2,
                    )}
                >
                    {event.map((item, index) => {
                        if (item.day === 2) {
                            return (
                                <Ecard key={index}
                                    name={item.name}
                                    time={item.time}
                                    room={item.room}
                                />
                            )
                        }
                    })}
                </div>
            </div>

            <div className={styles.mobile}>
                <div className={styles.mdays}>
                    <div onClick={handleday1}>
                        <Dcard name="Day 1" day={day1} />
                    </div>
                    <div className={styles.events}>
                        {event.map((item, index) => {
                            if (item.day === 1) {
                                return (
                                    <Ecard key={index}
                                        name={item.name}
                                        time={item.time}
                                        link={item.link}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
                <div className={styles.mdays}>
                    <div onClick={handleday2}>
                        <Dcard name="Day 2" day={day2} />
                    </div>
                    <div className={styles.events}>
                        {event.map((item, index) => {
                            if (item.day === 2) {
                                return (
                                    <Ecard key={index}
                                        name={item.name}
                                        time={item.time}
                                        link={item.link}
                                    />
                                )
                            }
                        })}
                    </div>
                </div>
            </div>
        </div>
    )
}