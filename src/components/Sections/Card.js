import React from 'react';
import {Link} from 'react-router-dom';
import {useScroll} from '../useScroll';
import {FadeAnim } from '../animation';
import {motion} from 'framer-motion';

const Card = ({data}) => {
    const [Ref , controls] = useScroll();
    return (
        <motion.div className="card" ref={Ref} variants={FadeAnim} animate={controls} initial="hidden">
            <h3 className="card-title">{data.title}</h3>
            <img className="card-img" src={data.img} alt="img"/>
            <p className="card-body">{data.body}</p>
            <Link to={`/${data.id}`} className="btn card-link">more info</Link>
        </motion.div>
    )
}

export default Card
