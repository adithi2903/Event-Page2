import { SponsorsRow } from './SponsorsRow'
import { PrizesRow } from './PrizesRow'
import styles from './Sponsor.module.css'
import styleP from './Prizes.module.css'
import { sponsors, sponsors2, sponsors3, sponsors4, sponsors5 } from '@data/sponsor' //This is the data of Sponsors >>sponsor.js | Go here to edit names
import { prizes } from '@data/prizes' //tier list >> sponsors - gold, sponsors2 - silver, sponsors3 - emerald, sponsors4 - learning, sponsors5 - ruby.
import Link from 'next/link'
import { HButton } from '@components/Accessories/button'
import { ImArrowUpRight2 } from 'react-icons/im'
// This is the MAIN File for the entire Sponsors component.

export const Sponsors = (props) => {
    let prizeMoney = '20,000'

    return (
        <div className={styleP.prizesDiv} id="Sponsors">
            {/* All lines below before the next comment are for the 'Prizes' part of the Sponsors component,
            And is taking it's styling from Prizes.module.css */}
            <h2 className={styleP.prizeH2Stroke}>Prizes</h2>
            <h3 className={styleP.prizeH3}>Total prize upto</h3>
            <h2 className={styleP.prizeH2}>Rs. {prizeMoney}</h2>
            <Link
                href='https://drive.google.com/file/d/1V_oi1Uk5xIF2Uu62LF4tyQQVsYR39jKg/view?usp=drivesdk'
                passHref={true}
                >
                    <a target="_blank">
                    <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center'
            }}><HButton name='View '
            icon={<ImArrowUpRight2 />}></HButton></div>
                    </a>
            </Link><br /><br />
            {/* <PrizesRow prizes={prizes} /> */}
            {/* Uncomment the line above to bring back Prizes */}

            {/* After this comment all lines are for the 'Our Sponsors' section,
             puling it's styling from Sponsor.module.css */}
        </div>
    )
}
